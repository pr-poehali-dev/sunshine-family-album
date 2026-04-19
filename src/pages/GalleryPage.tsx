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

const drawingCaptions = [
  "Мой папа в детстве",
  "Папа играет во дворе",
  "Папа и бабушка",
  "Папина любимая игрушка",
  "День рождения папы",
  "Папа на рыбалке с дедушкой",
  "Наша семья",
  "Мамины воспоминания",
  "Дедушка в молодости",
  "Семейный праздник",
  "Любимое занятие папы",
  "Папин дом детства",
];

const albumCaptions = [
  "Страница «Семья и традиции»",
  "Страница «Папа в детстве»",
  "Страница «Бабушкины рассказы»",
  "Страница «Наши воспоминания»",
  "Страница «Дорогие моменты»",
  "Страница «История семьи»",
];

const PRESET_DRAWINGS: GalleryItem[] = [
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/bac7e147-6ece-49c5-82c2-2d63d59fbbd1.jpg",
    key: "preset/drawing_1.jpg", category: "drawings", uploaded_at: "2024-04-02T09:00:00",
  },
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/8cd9b104-4eae-4f2c-9a35-262f737a2b73.jpg",
    key: "preset/drawing_2.jpg", category: "drawings", uploaded_at: "2024-04-02T09:01:00",
  },
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/df170d0b-011c-4b46-be8c-4742546cc866.jpg",
    key: "preset/drawing_3.jpg", category: "drawings", uploaded_at: "2024-04-02T09:02:00",
  },
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/45ec17af-0c75-4119-8065-0c27ee37645c.jpg",
    key: "preset/drawing_4.jpg", category: "drawings", uploaded_at: "2024-04-02T09:03:00",
  },
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/2121ed06-56c2-4686-9944-2cd22d5885fc.jpg",
    key: "preset/drawing_5.jpg", category: "drawings", uploaded_at: "2024-04-02T09:04:00",
  },
  {
    url: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/a1a70bf0-0f03-4661-92e0-b6e4fa5400fa.jpg",
    key: "preset/drawing_6.jpg", category: "drawings", uploaded_at: "2024-04-02T09:05:00",
  },
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

  const uploadedDrawings = items.filter((i) => i.category === "drawings");
  const allDrawings = uploadedDrawings.length > 0
    ? uploadedDrawings
    : PRESET_DRAWINGS;
  const albumItems = items.filter((i) => i.category === "album");
  const currentItems = activeTab === "drawings" ? allDrawings : albumItems;

  return (
    <Layout>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55px 85px at 2% 30%, rgba(255,130,130,0.28) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 3% 65%, rgba(255,170,80,0.28) 0%, transparent 70%),
            radial-gradient(ellipse 40px 60px at 97% 25%, rgba(100,190,100,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 50px 75px at 98% 65%, rgba(100,190,100,0.16) 0%, transparent 70%)
          `,
        }}
      >
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* ФЗ-152 — крупный красный текст как на референсе */}
        <p
          className="font-bold text-center text-xl md:text-2xl leading-snug mb-10"
          style={{ color: "#cc0000" }}
        >
          Все фото и видео материалы размещены на сайте ДОУ с согласия родителей (законных представителей, лиц их заменяющих), на основании ФЗ №152 и Декларации прав ребёнка
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 max-w-sm">
          <button
            onClick={() => setActiveTab("drawings")}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              activeTab === "drawings" ? "bg-yellow-400 border-yellow-400 text-gray-900" : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-50"
            }`}
          >
            🎨 Рисунки
          </button>
          <button
            onClick={() => setActiveTab("album")}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              activeTab === "album" ? "bg-yellow-400 border-yellow-400 text-gray-900" : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-50"
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
                    {activeTab === "drawings"
                      ? drawingCaptions[i % drawingCaptions.length]
                      : albumCaptions[i % albumCaptions.length]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Placeholder when empty — only for album tab */
          activeTab === "album" ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📖</div>
              <p className="font-semibold text-foreground mb-1">Фото альбома ещё не добавлены</p>
              <p className="text-sm text-muted-foreground">
                Нажмите на область выше, чтобы загрузить первые фото
              </p>
            </div>
          ) : null
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