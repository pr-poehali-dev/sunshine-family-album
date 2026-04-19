import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const tasks = [
  { emoji: "📋", text: "Изучение паспорта проекта и его реализация в своей группе" },
  { emoji: "🤝", text: "Взаимодействие с коллегами по вопросам проекта" },
  { emoji: "📊", text: "Проведение педагогической диагностики по когнитивной, аффективной и психомоторной областям" },
  { emoji: "🎨", text: "Организация творческих занятий и мастер-классов" },
  { emoji: "👨‍👩‍👧", text: "Привлечение родителей к участию в проекте" },
  { emoji: "📖", text: "Ведение документации: планы, отчёты, фотоотчёты" },
];

const experience = [
  {
    title: "Актуальность обобщения опыта",
    icon: "Lightbulb",
    color: "bg-violet-50 border-violet-200",
    iconColor: "text-violet-500",
    text: "Проект «Семейный альбом» демонстрирует эффективную модель интеграции образовательных областей: художественно-эстетического, социально-коммуникативного и познавательного развития. Совместная деятельность детей, педагогов и родителей является ключевым фактором успеха.",
  },
  {
    title: "Педагогическая ценность",
    icon: "Star",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500",
    text: "Проект формирует у детей представления о семейных ценностях, укрепляет детско-родительские отношения, развивает творческие способности и навыки работы в команде. Использование ИКТ (видеоконференции, создание видеопоздравлений) делает проект современным и актуальным.",
  },
  {
    title: "Методические рекомендации",
    icon: "BookOpen",
    color: "bg-indigo-50 border-indigo-200",
    iconColor: "text-indigo-500",
    text: "Для успешной реализации проекта рекомендуется: заблаговременное информирование родителей; поэтапное включение детей в деятельность; документирование каждого этапа; гибкий подход к планированию с учётом интересов детей.",
  },
  {
    title: "Результаты и перспективы",
    icon: "TrendingUp",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-500",
    text: "По итогам проекта значительно улучшились показатели во всех трёх областях мониторинга. Проект получил высокую оценку родителей и рекомендован к тиражированию в других группах ДОУ. Планируется создание цикла проектов о семейных традициях.",
  },
];

const materials = [
  { icon: "FileText", label: "Паспорт проекта (PDF)", size: "245 КБ" },
  { icon: "BarChart2", label: "Карты мониторинга", size: "180 КБ" },
  { icon: "Calendar", label: "Дорожная карта проекта", size: "120 КБ" },
  { icon: "Presentation", label: "Презентация опыта работы", size: "3.2 МБ" },
];

export default function ColleaguesPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Коллегам ДОУ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Педагогический опыт
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Материалы для коллег по реализации проекта «Семейный альбом»
          </p>
        </div>

        {/* Tasks for colleagues */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="ListChecks" size={26} className="text-primary" />
            Задачи педагогов по проекту
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {tasks.map((task, i) => (
              <div key={i} className="card-pastel p-5 flex items-start gap-4 hover:shadow-md transition-all">
                <span className="text-3xl">{task.emoji}</span>
                <p className="text-foreground leading-relaxed">{task.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="GraduationCap" size={26} className="text-primary" />
            Обобщение педагогического опыта
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {experience.map((item, i) => (
              <div key={i} className={`rounded-3xl border p-6 ${item.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon name={item.icon} size={20} className={item.iconColor} fallback="Circle" />
                  </div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section className="mb-12">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="FolderOpen" size={26} className="text-primary" />
            Методические материалы
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {materials.map((mat, i) => (
              <div key={i} className="card-pastel p-5 flex items-center gap-4 hover:shadow-md transition-all group cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name={mat.icon} size={22} className="text-primary" fallback="File" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{mat.label}</p>
                  <p className="text-xs text-muted-foreground">{mat.size}</p>
                </div>
                <Icon name="Download" size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Материалы будут доступны для скачивания после завершения проекта
          </p>
        </section>

        {/* Contact */}
        <div className="card-pastel p-6 text-center border-2 border-primary/20">
          <Icon name="MessageCircle" size={32} className="text-primary mx-auto mb-3" />
          <h3 className="font-bold text-xl text-foreground mb-2">Есть вопросы?</h3>
          <p className="text-muted-foreground mb-4">
            Свяжитесь с нами для обмена педагогическим опытом
          </p>
          <a
            href="tel:+79991234567"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Icon name="Phone" size={18} />
            +7 (999) 123-45-67
          </a>
        </div>
      </div>
    </Layout>
  );
}
