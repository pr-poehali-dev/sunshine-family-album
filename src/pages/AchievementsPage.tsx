import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const achievements = [
  {
    type: "Грамота",
    emoji: "🏆",
    title: "Грамота за лучший педагогический проект",
    org: "Управление образования",
    color: "from-amber-50 to-yellow-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    type: "Благодарность",
    emoji: "🌟",
    title: "Благодарность за активное участие в проекте",
    org: "Совет родителей",
    color: "from-violet-50 to-purple-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    type: "Диплом",
    emoji: "🎖️",
    title: "Диплом участника конкурса педагогических проектов",
    org: "Городской методический центр",
    color: "from-blue-50 to-sky-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    type: "Благодарность",
    emoji: "💫",
    title: "Благодарность за творческий подход к воспитанию",
    org: "Администрация ДОУ",
    color: "from-indigo-50 to-violet-50 border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
  },
];

const results = [
  { icon: "Users", value: "22", label: "Участника проекта", color: "text-violet-500 bg-violet-50" },
  { icon: "Image", value: "22", label: "Творческих работы", color: "text-blue-500 bg-blue-50" },
  { icon: "Heart", value: "100%", label: "Родителей вовлечены", color: "text-pink-500 bg-pink-50" },
  { icon: "TrendingUp", value: "+49%", label: "Рост показателей", color: "text-indigo-500 bg-indigo-50" },
];

const presentation = [
  { emoji: "👨‍👩‍👧‍👦", desc: "Выступление детей перед родителями" },
  { emoji: "📖", desc: "Представление семейного альбома" },
  { emoji: "🎬", desc: "Показ видеопоздравлений" },
  { emoji: "🎉", desc: "Праздничное чаепитие" },
];

export default function AchievementsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="Star" size={16} />
            <span>Достижения</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Наши достижения
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Итоги и результаты проекта «Семейный альбом»
          </p>
        </div>

        {/* Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((item, i) => (
              <div key={i} className="card-pastel p-5 text-center hover:shadow-md transition-all">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon name={item.icon} size={26} className={item.color.split(" ")[0]} fallback="Circle" />
                </div>
                <p className="font-caveat text-4xl font-bold text-primary">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="Award" size={26} className="text-primary" />
            Грамоты и благодарности
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((item, i) => (
              <div
                key={i}
                className={`rounded-3xl border bg-gradient-to-br ${item.color} p-6 hover:shadow-md transition-all`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.emoji}</span>
                  <div>
                    <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${item.badge}`}>
                      {item.type}
                    </span>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-current/10 pt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Image" size={14} />
                  <span>Скан документа будет добавлен</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Presentation */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="Presentation" size={26} className="text-primary" />
            Фото с презентации проекта
          </h2>
          <div className="relative rounded-3xl overflow-hidden mb-6 shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg"
              alt="Презентация проекта"
              className="w-full object-cover max-h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-caveat text-3xl">06 апреля 2024</p>
                <p className="text-white/80 text-sm">Презентация семейного альбома</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {presentation.map((item, i) => (
              <div key={i} className="card-pastel p-4 text-center hover:shadow-md transition-all">
                <span className="text-3xl">{item.emoji}</span>
                <p className="text-sm text-foreground/70 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <div className="card-pastel p-8 text-center border-2 border-primary/20">
          <p className="font-caveat text-3xl text-primary mb-3">
            «Каждая семья — это целый мир!»
          </p>
          <p className="text-muted-foreground text-sm">
            Именно это открытие сделали наши воспитанники в ходе проекта «Семейный альбом»
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>☀️</span><span>💜</span><span>📖</span><span>💙</span><span>⭐</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
