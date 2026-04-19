import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const passport = [
  { label: "Актуальность", icon: "Lightbulb", text: "Современные дети мало знают о семейных традициях и истории своей семьи. Проект помогает укрепить связь поколений и сформировать у детей ценностное отношение к семье." },
  { label: "Проблема", icon: "AlertCircle", text: "Недостаточная осведомлённость детей о семейных традициях, истории семьи и роли отца в детстве." },
  { label: "Цель", icon: "Target", text: "Создание семейного альбома как продукта совместной деятельности детей, педагогов и родителей, отражающего историю каждой семьи." },
  { label: "Задачи", icon: "ListChecks", text: "Расширить представления детей о семье и семейных традициях; развить творческие способности; привлечь родителей к совместной деятельности; воспитать уважение к старшему поколению." },
  { label: "Гипотеза", icon: "HelpCircle", text: "Если создать семейный альбом совместными усилиями, это укрепит семейные связи, обогатит знания детей и создаст ценный памятный продукт." },
  { label: "Продукт", icon: "BookHeart", text: "Семейный альбом группы «Солнышко» — иллюстрированное издание с рисунками детей и фотографиями, рассказывающими историю каждой семьи." },
];

const stages = [
  {
    num: "I",
    title: "Подготовительный этап",
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-500",
    items: ["Изучение интересов и знаний детей о семье", "Разработка паспорта проекта", "Подбор методической литературы", "Информирование родителей", "Подготовка материалов и оборудования"],
  },
  {
    num: "II",
    title: "Основной этап",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-500",
    items: ["Сбор семейных фотографий", "Рисование «Мой папа в детстве»", "Оформление страниц альбома", "Видеоконференция с бабушкой", "Мастер-класс по видеопоздравлению"],
  },
  {
    num: "III",
    title: "Заключительный этап",
    color: "bg-indigo-50 border-indigo-200",
    badge: "bg-indigo-500",
    items: ["Презентация альбома", "Анализ результатов", "Обобщение педагогического опыта", "Размещение материалов на сайте"],
  },
];

const monitoring = [
  { area: "Когнитивная область", before: 42, after: 87, color: "bg-violet-400" },
  { area: "Аффективная область", before: 55, after: 91, color: "bg-blue-400" },
  { area: "Психомоторная область", before: 38, after: 82, color: "bg-indigo-400" },
];

const events = [
  { emoji: "🎨", title: "Галерея «Мой папа в детстве»", desc: "Выставка детских рисунков, созданных в ходе проекта" },
  { emoji: "👨‍👩‍👧", title: "Тренинг для родителей", desc: "Практический тренинг «Роль отца в воспитании ребёнка»" },
  { emoji: "💻", title: "Видеоконференция «Рассказ бабушки о папе»", desc: "Онлайн-встреча с бабушками воспитанников" },
  { emoji: "🎬", title: "Мастер-класс по созданию видеопоздравления", desc: "Практическое занятие для детей и родителей" },
  { emoji: "📖", title: "Презентация семейного альбома", desc: "Торжественное представление готового продукта проекта" },
];

export default function ProjectPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} />
            <span>Проектная деятельность</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Паспорт проекта
          </h1>
          <p className="font-caveat text-3xl text-primary">«Семейный альбом»</p>
        </div>

        {/* Passport */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-4">
            {passport.map((item, i) => (
              <div key={i} className="card-pastel p-6 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={item.icon} size={20} className="text-primary" fallback="Circle" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stages */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="GitBranch" size={26} className="text-primary" />
            Этапы реализации
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <div key={stage.num} className={`rounded-3xl border p-6 ${stage.color}`}>
                <div className={`w-10 h-10 ${stage.badge} text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-3`}>
                  {stage.num}
                </div>
                <h3 className="font-bold text-foreground mb-3">{stage.title}</h3>
                <ul className="space-y-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Monitoring */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="BarChart3" size={26} className="text-primary" />
            Мониторинг результатов
          </h2>
          <div className="card-pastel p-6">
            <div className="grid gap-6">
              {monitoring.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{item.area}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">До проекта</span>
                        <span className="font-bold text-muted-foreground">{item.before}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-muted-foreground/40 rounded-full transition-all"
                          style={{ width: `${item.before}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">После проекта</span>
                        <span className="font-bold text-primary">{item.after}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all`}
                          style={{ width: `${item.after}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Данные педагогической диагностики, апрель 2024
            </p>
          </div>
        </section>

        {/* Events */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="Calendar" size={26} className="text-primary" />
            Мероприятия проекта
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {events.map((event, i) => (
              <div key={i} className="card-pastel p-5 flex items-start gap-4 hover:shadow-md transition-all">
                <span className="text-3xl">{event.emoji}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
