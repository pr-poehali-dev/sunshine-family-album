import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const drawings = [
  { title: "Мой папа в детстве", author: "Рисунок 1", emoji: "🎨" },
  { title: "Мой папа в детстве", author: "Рисунок 2", emoji: "🖌️" },
  { title: "Мой папа в детстве", author: "Рисунок 3", emoji: "✏️" },
  { title: "Мой папа в детстве", author: "Рисунок 4", emoji: "🎨" },
  { title: "Мой папа в детстве", author: "Рисунок 5", emoji: "🖌️" },
  { title: "Мой папа в детстве", author: "Рисунок 6", emoji: "✏️" },
];

const albumPhotos = [
  { title: "Страница 1", desc: "Семья и традиции", emoji: "📸" },
  { title: "Страница 2", desc: "Папа в детстве", emoji: "👨‍👦" },
  { title: "Страница 3", desc: "Бабушкины рассказы", emoji: "👵" },
  { title: "Страница 4", desc: "Наши воспоминания", emoji: "💝" },
];

const pastelColors = [
  "bg-violet-100 border-violet-200",
  "bg-blue-100 border-blue-200",
  "bg-indigo-100 border-indigo-200",
  "bg-purple-100 border-purple-200",
  "bg-sky-100 border-sky-200",
  "bg-fuchsia-100 border-fuchsia-200",
];

export default function GalleryPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="Image" size={16} />
            <span>Галерея</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Наши творческие работы
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Рисунки детей и страницы нашего семейного альбома
          </p>
        </div>

        {/* Drawings gallery */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            Рисунки «Мой папа в детстве»
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {drawings.map((item, i) => (
              <div
                key={i}
                className={`rounded-3xl border p-6 ${pastelColors[i % pastelColors.length]} hover:shadow-md transition-all hover:-translate-y-1 group cursor-pointer`}
              >
                <div className="aspect-square flex items-center justify-center text-6xl mb-3">
                  <img
                    src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/c5fd8a15-ea50-480f-b875-0e23930e6010.jpg"
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="font-semibold text-foreground text-sm text-center">{item.title}</p>
                <p className="text-xs text-muted-foreground text-center">{item.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Album */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <span className="text-2xl">📖</span>
            Готовый семейный альбом
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/ffbbc12b-e668-4af3-ba2e-b7c115707d67.jpg"
                alt="Семейный альбом"
                className="w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {albumPhotos.map((photo, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border p-4 flex flex-col items-center justify-center text-center ${pastelColors[i]}`}
                >
                  <span className="text-3xl mb-2">{photo.emoji}</span>
                  <p className="font-semibold text-foreground text-sm">{photo.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{photo.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy notice */}
        <div className="card-pastel p-4 flex items-start gap-3 border-l-4 border-primary">
          <Icon name="Shield" size={20} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Согласие на публикацию:</span>{" "}
            Фото размещены с согласия родителей (законных представителей) на основании 
            Федерального закона №152-ФЗ «О персональных данных».
          </p>
        </div>
      </div>
    </Layout>
  );
}
