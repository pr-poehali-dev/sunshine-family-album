import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const tasks = [
  { emoji: "📋", text: "Участие в родительском собрании по проекту" },
  { emoji: "💬", text: "Участие в групповом чате и обсуждениях" },
  { emoji: "🎬", text: "Участие в мастер-классе по видеопоздравлению" },
  { emoji: "💻", text: "Участие в видеоконференции с бабушкой" },
  { emoji: "📸", text: "Предоставление семейных фотографий" },
  { emoji: "🎨", text: "Помощь ребёнку в создании рисунка" },
];

const roadmap = [
  {
    stage: "Подготовительный этап",
    color: "bg-violet-50 border-violet-200",
    badgeColor: "bg-violet-100 text-violet-700",
    icon: "Milestone",
    rows: [
      { who: "Педагоги", what: "Разработка паспорта проекта, информирование родителей" },
      { who: "Родители", what: "Участие в родительском собрании, подготовка фотоматериалов" },
      { who: "Дети", what: "Рассматривание семейных фотографий, беседы о семье" },
    ],
  },
  {
    stage: "Основной этап",
    color: "bg-blue-50 border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    icon: "Pencil",
    rows: [
      { who: "Педагоги", what: "Проведение занятий, мастер-классов, видеоконференции" },
      { who: "Родители", what: "Участие в мастер-классе и видеоконференции, помощь детям" },
      { who: "Дети", what: "Рисование, создание страниц альбома, участие в мероприятиях" },
    ],
  },
  {
    stage: "Заключительный этап",
    color: "bg-indigo-50 border-indigo-200",
    badgeColor: "bg-indigo-100 text-indigo-700",
    icon: "CheckCircle",
    rows: [
      { who: "Педагоги", what: "Оформление альбома, презентация, анализ результатов" },
      { who: "Родители", what: "Участие в презентации, обратная связь" },
      { who: "Дети", what: "Представление своей страницы альбома, итоговые беседы" },
    ],
  },
];

const PRESENTATION_URL = "/files/Семейный_альбом_презентация.pptx";

const videos = [
  {
    title: "Как сделать видеопоздравление для папы",
    url: "https://www.youtube.com/results?search_query=видеопоздравление+для+папы+от+ребёнка",
    duration: "≈ 5 мин",
    ready: false,
  },
  {
    title: "Создаём семейный альбом вместе с ребёнком",
    url: "https://www.youtube.com/results?search_query=семейный+альбом+с+детьми+мастер+класс",
    duration: "≈ 8 мин",
    ready: false,
  },
  {
    title: "Рисуем портрет папы: мастер-класс",
    url: "https://www.youtube.com/results?search_query=рисуем+портрет+папы+дети+мастер+класс",
    duration: "≈ 12 мин",
    ready: false,
  },
];

export default function ParentsPage() {
  const [activeTab, setActiveTab] = useState("tasks");

  const tabs = [
    { id: "tasks", label: "Задачи", icon: "ListChecks" },
    { id: "roadmap", label: "Дорожная карта", icon: "Map" },
    { id: "presentation", label: "Презентация", icon: "Presentation" },
    { id: "videos", label: "Видеоролики", icon: "Play" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Icon name="Heart" size={16} />
            <span>Родителям</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Для родителей
          </h1>
          <p className="text-muted-foreground">
            Всё необходимое для участия в проекте «Семейный альбом»
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-muted/50 p-1.5 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-white shadow text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={tab.icon} size={16} fallback="Circle" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tasks */}
        {activeTab === "tasks" && (
          <div className="animate-fade-in">
            <h2 className="section-title">Задачи родителей по проекту</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {tasks.map((task, i) => (
                <div key={i} className="card-pastel p-5 flex items-center gap-4 hover:shadow-md transition-all">
                  <span className="text-3xl">{task.emoji}</span>
                  <p className="font-medium text-foreground">{task.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Roadmap */}
        {activeTab === "roadmap" && (
          <div className="animate-fade-in">
            <h2 className="section-title">Дорожная карта проекта</h2>
            <div className="grid gap-6">
              {roadmap.map((stage, i) => (
                <div key={i} className={`rounded-3xl border p-6 ${stage.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                      <Icon name={stage.icon} size={20} className="text-primary" fallback="Circle" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{stage.stage}</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-current/10">
                          <th className="text-left py-2 pr-4 font-semibold text-foreground/70 w-1/4">Участник</th>
                          <th className="text-left py-2 font-semibold text-foreground/70">Деятельность</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stage.rows.map((row, j) => (
                          <tr key={j} className="border-b border-current/5 last:border-0">
                            <td className="py-2.5 pr-4">
                              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stage.badgeColor}`}>
                                {row.who}
                              </span>
                            </td>
                            <td className="py-2.5 text-foreground/70">{row.what}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Presentation */}
        {activeTab === "presentation" && (
          <div className="animate-fade-in">
            <h2 className="section-title">Презентация проекта</h2>
            <div className="card-pastel p-8 text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={40} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">
                Презентация «Семейный альбом»
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Полная презентация проекта с фотографиями, результатами и выводами.
                Формат: PowerPoint / PDF
              </p>
              <a
                href={PRESENTATION_URL}
                download="Семейный_альбом_презентация.pptx"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Icon name="Download" size={18} />
                Скачать презентацию
              </a>
              <p className="text-xs text-muted-foreground mt-4">
                Файл .pptx · Загружается автоматически
              </p>
            </div>
          </div>
        )}

        {/* Videos */}
        {activeTab === "videos" && (
          <div className="animate-fade-in">
            <h2 className="section-title">Обучающие видеоролики</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Ссылки ведут на подборку похожих видео на YouTube — воспитатель заменит их на конкретные ролики.
            </p>
            <div className="grid gap-4">
              {videos.map((video, i) => (
                <a
                  key={i}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-pastel p-5 flex items-center gap-4 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">▶️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">YouTube</span>
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                    </div>
                  </div>
                  <Icon name="ExternalLink" size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}