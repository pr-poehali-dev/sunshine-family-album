import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const tasks = [
  "Принять участие в родительском собрании по проекту",
  "Принять участие в групповом чате",
  "Оказать помощь в организации мероприятий",
  "Ознакомиться с сайтом группы",
  "Принять участие в мастер-классе по созданию видеопоздравления",
  "Принять участие в подготовке и проведении презентации альбома",
  "Принять участие в видеоконференции по теме «Рассказ бабушки о папе»",
];

// Подготовительный этап: Дата | Мероприятия | Материально-техническое | Риски | Результаты
const prepStage = {
  title: "Подготовительный этап",
  cols: ["Дата", "Мероприятия, инициированные воспитателем", "Материально-техническое и дидактическое обеспечение", "Риски", "Результаты"],
  rows: [
    {
      date: "01.04.24",
      event: "1. Мониторинг детей",
      materials: "— ИКТ оборудование\n— Материал д/и",
      risks: "— болезнь ребёнка\n— поломка оборудования\n— перебой в электросети\n— неумение педагога работать с приложениями с ИКТ оборудованием",
      results: "— Определение проблемы проекта\n— Отвечают на вопросы",
    },
    {
      date: "01.04.24",
      event: "2. Родительское собрание для ознакомления с актуальностью, организацией и последующим обсуждением проекта",
      materials: "— ноутбук, проектор и экран для демонстрации плана взаимодействия участников проекта",
      risks: "— поломка оборудования\n— перебой в электросети\n— болезнь участника проекта\n— отказ родителей в участии проекта",
      results: "— родители проявляют интерес к проекту, предлагают свои идеи для его реализации",
    },
    {
      date: "01.04.24",
      event: "3. Утверждение плана проекта со специалистами ДОУ",
      materials: "— ноутбук, проектор и экран для демонстрации плана взаимодействия участников проекта",
      risks: "— поломка оборудования\n— перебой в электросети\n— болезнь сотрудников ДОУ",
      results: "— план взаимодействия сотрудников ДОУ утверждён на педагогическом совете",
    },
    {
      date: "01.04.24",
      event: "4. Создание чата и сайта для родителей",
      materials: "— Интернет ресурсы, гаджеты",
      risks: "— поломка оборудования\n— отсутствие доступа к интернету",
      results: "— создание чата для родителей\n— создание сайта для родителей",
    },
  ],
};

// Основной этап: Дата | Место в режиме дня | Мероприятия | Участники | Промежуточные результаты
const mainStage = {
  title: "Основной этап",
  cols: ["Дата", "Место в режиме дня", "Мероприятия", "Участники образовательного процесса", "Промежуточные результаты"],
  rows: [
    {
      date: "02.04.24",
      place: "Режим первой половины дня (совместная деятельность)",
      event: "Начали собирать семейные фотографии",
      participants: "Дети, воспитатель, родители",
      results: "— формируют интерес к истории своей семьи\n— расширяют знания о семейных традициях",
    },
    {
      date: "02.04.24",
      place: "Режим второй половины дня (самостоятельная деятельность)",
      event: "Рисование «Мой папа в детстве»",
      participants: "Дети, воспитатель",
      results: "— изображают портрет папы в различных техниках рисования\n— расширяют знания о правилах рисования портрета",
    },
    {
      date: "03.04.24",
      place: "Режим первой половины дня (совместная деятельность)",
      event: "Оформление страниц семейного альбома",
      participants: "Дети, воспитатель, родители",
      results: "— расширяют знания и умения в грамотном оформлении фотоальбома",
    },
    {
      date: "04.04.24",
      place: "Режим первой половины дня (совместная деятельность, свободная деятельность)",
      event: "Видеоконференция с бабушкой «Рассказ бабушки о папе»",
      participants: "Дети, воспитатель, родители",
      results: "— знают о том, каким был папа в детстве\n— узнают об интересных фактах о своих семьях\n— формируют знания о применении ИКТ",
    },
    {
      date: "05.04.24",
      place: "Режим второй половины дня (совместная деятельность)",
      event: "Мастер-класс по созданию видеопоздравления",
      participants: "Дети, воспитатель, родители",
      results: "— умеют создавать видеопоздравления\n— демонстрируют навыки работы с ИКТ",
    },
  ],
};

// Заключительный этап: Дата | Итоговые мероприятия | Оценка эффективности | Степень достижения | Обобщение педагогического опыта
const finalStage = {
  title: "Заключительный этап",
  cols: ["Дата", "Итоговые мероприятия", "Оценка эффективности реализации проекта", "Степень достижения поставленных целей", "Обобщение педагогического опыта"],
  rows: [
    {
      date: "06.04.24",
      event: "Презентация семейного альбома для родителей и сотрудников ДОУ",
      evaluation: "Дети презентуют семейный альбом",
      achievement: "Демонстрируют альбом о том, какой была семья",
      generalization: "— представление альбома на семинарах, конференциях\n— издание методических рекомендаций по созданию семейного альбома",
    },
    {
      date: "06.04.24",
      event: "Повторный мониторинг дошкольников",
      evaluation: "Детям задаются вопросы, фиксируются результаты, сравниваются с первоначальными данными мониторинга",
      achievement: "Высчитывается доля самостоятельности детей, участвующих в проекте (в процентном соотношении). Определяется степень эффективности реализации проекта.",
      generalization: "— сравнивание данных первоначального и данного мониторинга",
    },
    {
      date: "06.04.24",
      event: "Итоговое родительское собрание",
      evaluation: "В презентации представлены результаты мониторинга свидетельствующие об эффективности реализации проекта",
      achievement: "В презентации отражены результаты самостоятельной деятельности дошкольников, подтверждающие уровень достижения цели.",
      generalization: "— обобщение результатов проектной деятельности «Семейный альбом» на городской конференции дошкольных работников",
    },
  ],
};

const PRESENTATION_URL = "/files/Семейный_альбом_презентация.pptx";

const videos = [
  {
    title: "Как сделать видеопоздравление для папы",
    url: "https://www.youtube.com/results?search_query=видеопоздравление+для+папы+от+ребёнка",
    duration: "≈ 5 мин",
  },
  {
    title: "Создаём семейный альбом вместе с ребёнком",
    url: "https://www.youtube.com/results?search_query=семейный+альбом+с+детьми+мастер+класс",
    duration: "≈ 8 мин",
  },
  {
    title: "Рисуем портрет папы: мастер-класс",
    url: "https://www.youtube.com/results?search_query=рисуем+портрет+папы+дети+мастер+класс",
    duration: "≈ 12 мин",
  },
];

function RoadmapTable({ stage }: { stage: typeof prepStage }) {
  return (
    <div className="mb-10">
      <h3 className="font-caveat text-3xl font-bold mb-1" style={{ color: "#2d7d2d" }}>
        {stage.title}:
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm" style={{ borderColor: "#999" }}>
          <thead>
            <tr style={{ background: "#f5f5f5" }}>
              {stage.cols.map((col, i) => (
                <th
                  key={i}
                  className="border border-gray-400 px-3 py-2 text-left font-semibold text-gray-700 align-top"
                  style={{ minWidth: i === 0 ? 80 : 150 }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stage.rows.map((row, i) => {
              const cells = Object.values(row);
              return (
                <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  {cells.map((cell, j) => (
                    <td key={j} className="border border-gray-300 px-3 py-2 align-top text-gray-700 leading-snug whitespace-pre-line">
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ParentsPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tasks");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) setActiveTab(tab);
  }, [location.search]);

  const tabs = [
    { id: "tasks", label: "Задачи по проекту" },
    { id: "roadmap", label: "Дорожная карта проекта" },
    { id: "presentation", label: "Презентация проекта" },
    { id: "videos", label: "Задания по проекту" },
  ];

  return (
    <Layout>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 55px 85px at 2% 30%, rgba(255,130,130,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 45px 70px at 3% 65%, rgba(255,170,80,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 40px 60px at 97% 25%, rgba(100,190,100,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50px 75px at 98% 65%, rgba(100,190,100,0.18) 0%, transparent 70%)
          `,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Title */}
          <h1 className="font-caveat font-bold text-4xl md:text-5xl mb-8" style={{ color: "#d97706" }}>
            В данном проекте необходимо Ваше участие в совместной деятельности с детьми и сотрудниками ДОУ:
          </h1>

          {/* Sub-navigation — таблетки как в референсе */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeTab === tab.id
                    ? "bg-yellow-400 border-yellow-400 text-gray-900"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-yellow-50"
                }`}
              >
                {tab.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* === TASKS === */}
          {activeTab === "tasks" && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
                    Для успешной реализации проекта «Семейный альбом» необходимо Ваше активное участие:
                  </p>
                  <ol className="space-y-3">
                    {tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: "#2d7d2d" }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-gray-700 leading-snug pt-0.5">{task}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg"
                    alt="Совместная деятельность"
                    className="rounded-2xl shadow-md w-full max-w-sm object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          )}

          {/* === ROADMAP === */}
          {activeTab === "roadmap" && (
            <div className="animate-fade-in">
              <h2 className="font-caveat font-bold text-4xl mb-8" style={{ color: "#2d7d2d" }}>
                Дорожная карта проекта «Семейный альбом»
              </h2>
              <RoadmapTable stage={prepStage} />
              <RoadmapTable stage={mainStage} />
              <RoadmapTable stage={finalStage} />
            </div>
          )}

          {/* === PRESENTATION === */}
          {activeTab === "presentation" && (
            <div className="animate-fade-in">
              <h2 className="font-caveat font-bold text-4xl mb-8" style={{ color: "#2d7d2d" }}>
                Презентация проекта «Семейный альбом»
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Preview block — лиловый как на референсе */}
                <div
                  className="rounded-2xl p-8 flex flex-col items-center justify-center min-h-[220px] text-center"
                  style={{ background: "#d8b4e2" }}
                >
                  <p className="font-bold text-xl text-gray-800 uppercase leading-tight">
                    ОТЧЁТ О ИТОГАХ ПРОЕКТНОЙ ДЕЯТЕЛЬНОСТИ НА ТЕМУ<br />
                    «СЕМЕЙНЫЙ АЛЬБОМ»
                  </p>
                </div>
                {/* Download block */}
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-semibold text-gray-700">
                    Скачать презентацию «Семейный альбом»:
                  </p>
                  <a
                    href={PRESENTATION_URL}
                    download="Семейный_альбом_презентация.pptx"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-gray-900 transition-all hover:scale-105 hover:shadow-md w-fit"
                    style={{ background: "#f5c518" }}
                  >
                    <Icon name="Download" size={20} />
                    Скачать .pptx
                  </a>
                  <p className="text-sm text-gray-500">
                    Полная презентация с фотографиями, результатами мониторинга и выводами по проекту
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* === VIDEOS === */}
          {activeTab === "videos" && (
            <div className="animate-fade-in">
              <h2 className="font-caveat font-bold text-4xl mb-4" style={{ color: "#2d7d2d" }}>
                Задания по проекту
              </h2>
              <p className="text-gray-600 mb-8">
                Обучающие видеоролики для выполнения заданий совместно с ребёнком:
              </p>
              <div className="grid gap-4">
                {videos.map((video, i) => (
                  <a
                    key={i}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-yellow-300 transition-all group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#fee2e2" }}
                    >
                      <span className="text-2xl">▶️</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                        {video.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-red-100 text-red-600 font-semibold px-2 py-0.5 rounded-full">YouTube</span>
                        <span className="text-xs text-gray-400">{video.duration}</span>
                      </div>
                    </div>
                    <Icon name="ExternalLink" size={18} className="text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                * Ссылки ведут на подборку видео YouTube по теме. Воспитатель укажет конкретные ролики.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
