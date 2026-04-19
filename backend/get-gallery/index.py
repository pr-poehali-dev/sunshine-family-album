import os
import json
import boto3


def handler(event: dict, context) -> dict:
    """Получение списка файлов галереи из S3.
    Возвращает массив объектов с URL и категорией для каждого файла.
    Параметр category (drawings / album) фильтрует по папке.
    """
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    params = event.get("queryStringParameters") or {}
    category = params.get("category", "")
    prefix = f"gallery/{category}" if category else "gallery/"

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    response = s3.list_objects_v2(Bucket="files", Prefix=prefix)
    items = []

    for obj in response.get("Contents", []):
        key = obj["Key"]
        if key.endswith("/"):
            continue
        parts = key.split("/")
        cat = parts[1] if len(parts) >= 3 else "other"
        cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/files/{key}"
        items.append({
            "url": cdn_url,
            "key": key,
            "category": cat,
            "size": obj["Size"],
            "uploaded_at": obj["LastModified"].isoformat(),
        })

    items.sort(key=lambda x: x["uploaded_at"], reverse=True)

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"items": items, "total": len(items)}),
    }
