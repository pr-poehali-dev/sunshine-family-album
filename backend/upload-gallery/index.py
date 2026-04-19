import os
import json
import boto3
import base64
import uuid
from datetime import datetime


def handler(event: dict, context) -> dict:
    """Загрузка фото/рисунка в галерею.
    Принимает base64-файл, сохраняет в S3 в папку gallery/.
    Возвращает публичный URL загруженного файла.
    """
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body", "{}"))
    file_data = body.get("file")
    file_name = body.get("name", "image.jpg")
    category = body.get("category", "drawings")

    if not file_data:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Файл не передан"}),
        }

    if "," in file_data:
        content_type_part, file_data = file_data.split(",", 1)
        content_type = content_type_part.split(":")[1].split(";")[0]
    else:
        content_type = "image/jpeg"

    file_bytes = base64.b64decode(file_data)

    ext = file_name.rsplit(".", 1)[-1].lower() if "." in file_name else "jpg"
    unique_name = f"{uuid.uuid4().hex}.{ext}"
    key = f"gallery/{category}/{unique_name}"

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    s3.put_object(
        Bucket="files",
        Key=key,
        Body=file_bytes,
        ContentType=content_type,
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/files/{key}"

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({
            "url": cdn_url,
            "key": key,
            "category": category,
            "name": file_name,
            "uploaded_at": datetime.utcnow().isoformat(),
        }),
    }
