import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const colleguesTasks = [
  "Подготовить и провести родительское собрание",
  "Создать презентацию на родительское собрание",
  "Создать чат для родителей",
  "Провести мониторинг детей",
  "Утвердить план проекта с сотрудниками ДОУ",
  "Разработать дидактические материалы",
  "Разработать сайт группы",
  "Организовать интервьюирование детей",
  "Подготовить и провести мастер-класс по созданию видеопоздравления",
  "Организовать и подготовить презентацию семейного альбома",
  "Принять участие в мероприятиях по обобщению педагогического опыта",
  "Оформить галерею детских рисунков «Мой папа в детстве»",
  "Организовать видеоконференцию «Рассказ бабушки о папе»",
  "Провести повторный мониторинг и сравнить результаты",
];

const experience = [
  {
    title: "Актуальность обобщения опыта",
    icon: "Lightbulb",
    text: "Проект «Семейный альбом» демонстрирует эффективную модель интеграции образовательных областей: художественно-эстетического, социально-коммуникативного и познавательного развития. Совместная деятельность детей, педагогов и родителей является ключевым фактором успеха.",
  },
  {
    title: "Педагогическая ценность",
    icon: "Star",
    text: "Проект формирует у детей представления о семейных ценностях, укрепляет детско-родительские отношения, развивает творческие способности и навыки работы в команде. Использование ИКТ (видеоконференции, создание видеопоздравлений) делает проект современным и актуальным.",
  },
  {
    title: "Методические рекомендации",
    icon: "BookOpen",
    text: "Для успешной реализации проекта рекомендуется: заблаговременное информирование родителей; поэтапное включение детей в деятельность; документирование каждого этапа; гибкий подход к планированию с учётом интересов детей.",
  },
  {
    title: "Результаты и перспективы",
    icon: "TrendingUp",
    text: "По итогам проекта значительно улучшились показатели во всех трёх областях мониторинга. Проект получил высокую оценку родителей и рекомендован к тиражированию в других группах ДОУ. Планируется создание цикла проектов о семейных традициях.",
  },
];

export default function ColleaguesPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tasks");
  const dropRef = useRef<HTMLDivElement>(null);
  const [dropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get("tab");
    if (tab) setActiveTab(tab);
  }, [location.search]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const tabs = [
    { id: "tasks", label: "ЗАДАЧИ ПО ПРОЕКТУ" },
    { id: "experience", label: "ОБОБЩЕНИЕ ПЕДАГОГИЧЕСКОГО ОПЫТА" },
  ];

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

          {/* Sub-tabs */}
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
                {tab.label}
              </button>
            ))}
          </div>

          {/* === TASKS === */}
          {activeTab === "tasks" && (
            <div className="animate-fade-in">
              <h1 className="font-caveat font-bold text-4xl md:text-5xl text-center mb-10 leading-tight" style={{ color: "#2d7d2d" }}>
                В данном проекте необходимо Ваше участие в совместной деятельности с детьми для полной реализации проекта «Семейный альбом»
              </h1>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Картинка слева */}
                <div className="flex items-start justify-center">
                  <img
                    src="https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg"
                    alt="Совместная деятельность"
                    className="rounded-2xl shadow-md w-full max-w-sm object-cover"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                {/* Нумерованный список справа */}
                <ol className="space-y-2.5">
                  {colleguesTasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 leading-snug">
                      <span className="flex-shrink-0 text-gray-500 font-medium text-sm w-6 pt-0.5">
                        {i + 1}.
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {/* === EXPERIENCE === */}
          {activeTab === "experience" && (
            <div className="animate-fade-in">
              <h1 className="font-caveat font-bold text-4xl md:text-5xl text-center mb-10 leading-tight" style={{ color: "#d97706" }}>
                Обобщение педагогического опыта по теме проекта «Семейный альбом»
              </h1>

              {/* Блоки: фото слева + текст справа / текст слева + фото справа */}
              <div className="space-y-10">
                {experience.map((item, i) => (
                  <div
                    key={i}
                    className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                  >
                    <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                      <img
                        src={
                          i % 2 === 0
                            ? "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/514e4ef7-9f19-4094-b5d9-78972199d21e.jpg"
                            : "https://cdn.poehali.dev/projects/c1666bf3-3a06-4060-894f-5feebb6ed718/files/27ffda4a-11e7-4be4-8ca9-26d303ccdf7e.jpg"
                        }
                        alt={item.title}
                        className="w-full rounded-2xl shadow-md object-cover"
                        style={{ aspectRatio: "4/3", maxHeight: 280 }}
                      />
                    </div>
                    <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                      <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Контакт */}
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Для обмена педагогическим опытом свяжитесь с нами:</p>
                <a
                  href="tel:+79991234567"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
                  style={{ background: "#2d7d2d" }}
                >
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}