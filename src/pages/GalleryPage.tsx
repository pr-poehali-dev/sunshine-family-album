import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const UPLOAD_URL = "https://functions.poehali.dev/58e1a7ff-1620-4d8f-8dcc-8e0e655fb6bd";
const GET_URL = "https://functions.poehali.dev/68419f11-834a-4286-91ea-17945d9c1a5c";

const pastelColors = [
  "bg-violet-100 border-violet-200",
  "bg-blue-100 border-blue-200",
  "bg-indigo-100 border-indigo-200",
  "bg-purple-100 border-purple-200",
  "bg-sky-100 border-sky-200",
  "bg-fuchsia-100 border-fuchsia-200",
];

interface GalleryItem {
  url: string;
  key: string;
  category: string;
  uploaded_at: string;
}

const albumPhotos = [
  { title: "Страница 1", desc: "Семья и традиции", emoji: "📸" },
  { title: "Страница 2", desc: "Папа в детстве", emoji: "👨‍👦" },
  { title: "Страница 3", desc: "Бабушкины рассказы", emoji: "👵" },
  { title: "Страница 4", desc: "Наши воспоминания", emoji: "💝" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"drawings" | "album">("drawings");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchGallery = async (category: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${GET_URL}?category=${category}`);
      const data = JSON.parse(await res.json ? res.json() : res.text());
      setItems(typeof data === "string" ? JSON.parse(data).items : data.items || []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery(activeTab);
  }, [activeTab]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let uploaded = 0;

    for (const file of Array.from(files)) {
      setUploadProgress(`Загружаю ${file.name}... (${uploaded + 1}/${files.length})`);
      const reader = new FileReader();
      const base64 = await new Promise<string>((resolve) => {
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });

      await fetch(UPLOAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ file: base64, name: file.name, category: activeTab }),
      });
      uploaded++;
    }

    setUploadProgress("");
    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
    await fetchGallery(activeTab);
  };

  const drawingItems = items.filter((i) => i.category === "drawings");
  const albumItems = items.filter((i) => i.category === "album");
  const currentItems = activeTab === "drawings" ? drawingItems : albumItems;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="Image" size={16} />
            <span>Галерея</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Наши творческие работы
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Рисунки детей и страницы нашего семейного альбома
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-muted/50 p-1.5 rounded-2xl max-w-sm mx-auto">
          <button
            onClick={() => setActiveTab("drawings")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "drawings" ? "bg-white shadow text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            🎨 Рисунки
          </button>
          <button
            onClick={() => setActiveTab("album")}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "album" ? "bg-white shadow text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            📖 Альбом
          </button>
        </div>

        {/* Upload zone */}
        <div className="mb-8">
          <div
            onClick={() => !uploading && fileRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-6 text-center transition-all cursor-pointer ${
              uploading
                ? "border-primary/50 bg-primary/5 cursor-wait"
                : "border-border hover:border-primary/50 hover:bg-primary/5"
            }`}
          >
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-primary font-medium">{uploadProgress}</p>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Icon name="Upload" size={22} className="text-primary" />
                </div>
                <p className="font-semibold text-foreground mb-1">
                  {activeTab === "drawings" ? "Загрузить рисунки" : "Загрузить фото альбома"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Нажмите или перетащите файлы · JPG, PNG · можно несколько
                </p>
              </>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </div>

        {/* Gallery grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-3xl bg-muted animate-pulse aspect-square" />
            ))}
          </div>
        ) : currentItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentItems.map((item, i) => (
              <div
                key={item.key}
                onClick={() => setLightbox(item.url)}
                className={`rounded-3xl border overflow-hidden ${pastelColors[i % pastelColors.length]} hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.url}
                    alt={`Работа ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs text-muted-foreground">
                    {activeTab === "drawings" ? "Мой папа в детстве" : "Страница альбома"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder when empty */
          <div className="text-center py-16">
            <div className="text-6xl mb-4">{activeTab === "drawings" ? "🎨" : "📖"}</div>
            <p className="font-semibold text-foreground mb-1">
              {activeTab === "drawings" ? "Рисунки ещё не загружены" : "Фото альбома ещё не добавлены"}
            </p>
            <p className="text-sm text-muted-foreground">
              Нажмите на область выше, чтобы загрузить первые работы
            </p>
          </div>
        )}

        {/* Static album preview (always shown in album tab when empty) */}
        {activeTab === "album" && currentItems.length === 0 && (
          <div className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/ffbbc12b-e668-4af3-ba2e-b7c115707d67.jpg"
                  alt="Семейный альбом"
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {albumPhotos.map((photo, i) => (
                  <div key={i} className={`rounded-2xl border p-4 flex flex-col items-center justify-center text-center ${pastelColors[i]}`}>
                    <span className="text-3xl mb-2">{photo.emoji}</span>
                    <p className="font-semibold text-foreground text-sm">{photo.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{photo.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Privacy notice */}
        <div className="mt-10 card-pastel p-4 flex items-start gap-3 border-l-4 border-primary">
          <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Согласие на публикацию:</span>{" "}
            Фото размещены с согласия родителей (законных представителей) на основании
            Федерального закона №152-ФЗ «О персональных данных».
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Просмотр" className="w-full rounded-3xl shadow-2xl max-h-[80vh] object-contain" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              <Icon name="X" size={18} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
