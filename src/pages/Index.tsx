import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const news = [
  { date: "01.04", emoji: "📷", text: "Начали собирать семейные фотографии" },
  { date: "02.04", emoji: "🎨", text: "Рисовали рисунки «Мой папа в детстве»" },
  { date: "03.04", emoji: "📖", text: "Оформляли страницы альбома" },
  { date: "04.04", emoji: "💻", text: "Видеоконференция с бабушкой" },
  { date: "05.04", emoji: "🎬", text: "Мастер-класс по созданию видеопоздравления" },
  { date: "06.04", emoji: "🌟", text: "Презентация альбома" },
];

const teachers = [
  {
    name: "Литвинова Екатерина Андреевна",
    role: "Воспитатель высшей категории",
    emoji: "👩‍🏫",
    phone: "+7 (999) 123-45-67",
    color: "border-purple-200",
    bg: "bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    name: "Горбачёва Алёна Александровна",
    role: "Воспитатель",
    emoji: "👩‍🏫",
    phone: "+7 (999) 123-45-67",
    color: "border-blue-200",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "Смирнова Ольга Дмитриевна",
    role: "Младший воспитатель",
    emoji: "👩‍💼",
    phone: "+7 (999) 123-45-67",
    color: "border-indigo-200",
    bg: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
  },
];

const quickLinks = [
  {
    path: "/project",
    label: "Проектная деятельность",
    desc: "Паспорт проекта, этапы, мониторинг и мероприятия",
    emoji: "📚",
    color: "from-violet-100 to-purple-100 border-violet-200",
    textColor: "text-violet-700",
  },
  {
    path: "/gallery",
    label: "Галерея",
    desc: "Рисунки детей и фотографии готового альбома",
    emoji: "🖼️",
    color: "from-blue-100 to-sky-100 border-blue-200",
    textColor: "text-blue-700",
  },
  {
    path: "/parents",
    label: "Родителям",
    desc: "Задачи, дорожная карта, презентация и видеоролики",
    emoji: "💌",
    color: "from-indigo-100 to-violet-100 border-indigo-200",
    textColor: "text-indigo-700",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slide-up stagger-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                <span>☀️</span>
                <span>Старшая группа «Солнышко»</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Проект<br />
                <span className="font-caveat text-5xl md:text-6xl text-primary">«Семейный альбом»</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Уважаемые гости, мы рады приветствовать вас на нашем сайте!
                Здесь вы найдёте всё о нашем творческом проекте.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/project" className="btn-primary inline-flex items-center gap-2">
                  <Icon name="BookOpen" size={18} />
                  О проекте
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 border border-primary text-primary rounded-2xl px-6 py-3 font-semibold transition-all hover:bg-primary/10"
                >
                  <Icon name="Image" size={18} />
                  Галерея
                </Link>
              </div>
            </div>

            <div className="animate-slide-up stagger-2">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg"
                  alt="Дети с семейным альбомом"
                  className="w-full rounded-3xl shadow-xl object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 border border-border">
                  <p className="font-caveat text-2xl text-primary">Наша группа ☀️</p>
                  <p className="text-xs text-muted-foreground">апрель 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="section-title text-center">Разделы сайта</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quickLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block bg-gradient-to-br ${link.color} border rounded-3xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group`}
            >
              <div className="text-4xl mb-3">{link.emoji}</div>
              <h3 className={`font-bold text-lg ${link.textColor} mb-2`}>{link.label}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{link.desc}</p>
              <div className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${link.textColor}`}>
                Перейти <Icon name="ArrowRight" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="section-title flex items-center gap-2">
          <Icon name="Newspaper" size={28} className="text-primary" />
          Новостная лента
        </h2>
        <div className="grid gap-3">
          {news.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 card-pastel p-4 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-bold text-primary">{item.date}</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">апрель 2024</p>
                <p className="font-medium text-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="section-title flex items-center gap-2">
          <Icon name="Heart" size={28} className="text-primary" />
          О ваших детях заботятся
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {teachers.map((t, i) => (
            <div
              key={i}
              className={`card-pastel p-6 border ${t.color} ${t.bg} hover:shadow-md transition-all`}
            >
              <div className="text-5xl mb-3">{t.emoji}</div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${t.badge}`}>
                {t.role}
              </span>
              <h3 className="font-bold text-foreground text-base mb-3">{t.name}</h3>
              <a
                href={`tel:${t.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={14} />
                {t.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Album image */}
      <section className="container mx-auto px-4 py-10">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/ffbbc12b-e668-4af3-ba2e-b7c115707d67.jpg"
            alt="Семейный альбом"
            className="w-full object-cover max-h-80 rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-md">
              <p className="font-caveat text-4xl mb-2">Наш семейный альбом</p>
              <p className="text-white/90 text-sm">
                Совместный труд детей, педагогов и родителей — страница за страницей.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
