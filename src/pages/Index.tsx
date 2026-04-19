import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const news = [
  { date: "01.04", text: "Начали собирать семейные фотографии" },
  { date: "02.04", text: "Рисовали рисунки «Мой папа в детстве»" },
  { date: "03.04", text: "Оформляли страницы альбома" },
  { date: "04.04", text: "Видеоконференция с бабушкой" },
  { date: "05.04", text: "Мастер-класс по созданию видеопоздравления" },
  { date: "06.04", text: "Презентация семейного альбома" },
];

const teachers = [
  {
    name: "Литвинова Екатерина Андреевна",
    role: "Воспитатель высшей категории",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg",
  },
  {
    name: "Горбачёва Алёна Александровна",
    role: "Воспитатель",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/c5fd8a15-ea50-480f-b875-0e23930e6010.jpg",
  },
  {
    name: "Смирнова Ольга Дмитриевна",
    role: "Младший воспитатель",
    phone: "+7 (999) 123-45-67",
    avatar: "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/ffbbc12b-e668-4af3-ba2e-b7c115707d67.jpg",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* === WELCOME === */}
      <section
        className="relative py-12 md:py-20 px-4"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60px 90px at 3% 30%, rgba(255,130,130,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 50px 80px at 5% 65%, rgba(255,170,80,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 95% 25%, rgba(100,190,100,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 55px 85px at 97% 60%, rgba(100,190,100,0.25) 0%, transparent 70%)
          `,
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-caveat font-bold text-5xl md:text-6xl mb-6" style={{ color: "#2d7d2d" }}>
            Старшая группа «Солнышко»
          </h1>
          <div className="space-y-2">
            <p className="welcome-text">Уважаемые гости,</p>
            <p className="welcome-text">мы рады приветствовать вас на нашем сайте!</p>
          </div>
        </div>
      </section>

      {/* === NEWS === */}
      <section
        className="py-10 px-4 relative"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50px 80px at 2% 40%, rgba(255,130,130,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 4% 75%, rgba(255,170,80,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 40px 65px at 96% 30%, rgba(100,190,100,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 50px 75px at 98% 70%, rgba(100,190,100,0.2) 0%, transparent 70%)
          `,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading mb-8">Новостная лента</h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#4a9e4a" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-green-400/40">
              {news.map((item, i) => (
                <div
                  key={i}
                  className="p-5 flex flex-col justify-between min-h-[130px]"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)" }}
                >
                  <p className="text-white font-medium text-sm leading-snug">{item.text}</p>
                  <p className="news-date">{item.date}.2024</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === TEACHERS === */}
      <section
        className="py-12 px-4 relative"
        style={{
          background: "#f5ead8",
          backgroundImage: `
            radial-gradient(ellipse 55px 85px at 2% 40%, rgba(255,130,130,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 4% 75%, rgba(255,170,80,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 40px 60px at 96% 35%, rgba(100,190,100,0.2) 0%, transparent 70%)
          `,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-2">О ваших детях заботятся</h2>
          <div className="w-8 h-1 bg-gray-400 rounded mx-auto mb-10" />
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Round photo */}
                <div
                  className="w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md"
                  style={{ filter: "grayscale(80%)" }}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-snug mb-3 max-w-[200px]">
                  <span className="text-gray-500">{t.role}:</span>{" "}
                  <span className="font-semibold">{t.name}</span>
                </p>
                <a
                  href={`tel:${t.phone}`}
                  className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-700 transition-colors"
                >
                  <Icon name="Phone" size={14} />
                  {t.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROJECT BUTTON === */}
      <section
        className="py-12 px-4 relative"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50px 80px at 2% 50%, rgba(255,130,130,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 97% 50%, rgba(100,190,100,0.25) 0%, transparent 70%)
          `,
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-caveat text-4xl font-bold mb-4" style={{ color: "#d97706" }}>
            В данном проекте необходимо Ваше участие в совместной деятельности с детьми и сотрудниками ДОУ
          </h2>
          <p className="text-gray-600 mb-6">
            Узнайте подробнее о задачах, этапах и мероприятиях проекта «Семейный альбом»
          </p>
          <a
            href="/project"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: "#2d7d2d" }}
          >
            <Icon name="BookOpen" size={18} />
            Проектная деятельность
          </a>
        </div>
      </section>
    </Layout>
  );
}
