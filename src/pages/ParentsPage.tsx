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

// Подготовительный этап: Дата | Мероприятия | Как помогал воспитатель | Результаты
const prepStage = {
  title: "Подготовительный этап",
  cols: ["Дата", "Мероприятия, инициированные детьми", "Как помогал воспитатель", "Результаты"],
  rows: [
    {
      date: "01.04.2026",
      event: "Входной мониторинг «Что мы знаем о семейных альбомах и традициях?» (беседа-игра с рассматриванием старых фото).\nОпрос родителей: дети получают мини-анкеты «Семейные фото и традиции» (3 вопроса: есть ли старые фото, какие традиции помнят, готовы ли участвовать).\nДети решили спросить у родителей о детских фотографиях (личные расспросы).",
      help: "Подготовила вопросы для мониторинга, фиксировала ответы. Разработала анкеты, раздала детям. Дала бумагу для записи вопросов родителям.",
      results: "Выявлен исходный уровень: высокий 35%, средний 45%, низкий 20%. Получены заполненные анкеты от всех 20 семей, родители дали согласие. Дети принесли первые фотографии и факты.",
    },
    {
      date: "02.04.2026",
      event: "Нарисовали объявление о сборе фотографий (коллективная работа)",
      help: "Предоставил ватман, фломастеры. Помог сформулировать текст.",
      results: "Яркое объявление размещено в раздевалке. Все родители проинформированы.",
    },
    {
      date: "03.04.2026",
      event: "Обратились к заведующей за разрешением. Обсудили, какие материалы понадобятся (сканер, принтер, видеосвязь).",
      help: "Поддержал, заранее предупредил заведующую. Не вмешивался.",
      results: "Разрешение получено. Утверждён план использования оборудования и видеозвонков.",
    },
  ],
};

// Основной этап: Дата | Место в режиме дня | Мероприятия | Участники | Промежуточные результаты
const mainStage = {
  title: "Основной этап",
  cols: ["Дата", "Место в режиме дня", "Мероприятия", "Участники", "Промежуточные результаты"],
  rows: [
    {
      date: "04.04.2026",
      place: "1-я половина дня (самостоятельная деятельность)",
      event: "Принесли фотографии, рассматривают, обмениваются впечатлениями. Провели первые видеоконференции с бабушками и дедушками (при организационной поддержке воспитателя: настроил связь, помог задать заготовленные вопросы).",
      participants: "Дети, воспитатель, родственники (онлайн)",
      results: "Собрано 25 фотографий. Сделаны короткие записи интересных фактов с видеозвонков.",
    },
    {
      date: "05.04.2026",
      place: "1-я половина дня (самостоятельная деятельность)",
      event: "Организовали выставку «Наши семейные фото», дополнили снимки первыми краткими подписями (кто изображён, где). Дети рассказывают друг другу истории.",
      participants: "Дети",
      results: "Выставка оформлена. Повысился интерес к историям других семей.",
    },
    {
      date: "06.04.2026",
      place: "2-я половина дня (совместная деятельность)",
      event: "На основе принесённых фото и информации от видеозвонков составили рассказы. Попросили воспитателя записать их (диктовка).",
      participants: "Дети, воспитатель (записывает)",
      results: "Каждый ребёнок продиктовал небольшой рассказ о семейной истории или традиции.",
    },
    {
      date: "07.04.2026",
      place: "1-я половина дня (совместная деятельность)",
      event: "Мастер-класс «Как оформить страницу семейного альбома» (воспитатель показал приёмы: выбор фона, создание рамок, наклеивание, размещение подписей). Затем совместное оформление страниц: наклеивают фото, добавляют рисунки, подписи.",
      participants: "Дети, родители (помогали)",
      results: "Освоены приёмы оформления. Созданы первые 12 оформленных страниц.",
    },
    {
      date: "08.04.2026",
      place: "2-я половина дня (самостоятельная деятельность)",
      event: "Нарисовали рисунки «Моя семья», «Семейные традиции». Лучшие работы отобрали для включения в альбом, остальные разместили на сменной выставке.",
      participants: "Дети",
      results: "Рисунки добавлены на страницы. Альбом пополнился яркими изобразительными материалами.",
    },
    {
      date: "09.04.2026",
      place: "1-я половина дня (совместная деятельность)",
      event: "Объединили все страницы, придумали название и обложку альбома. Воспитатель помог скрепить листы (дырокол, лента, папка).",
      participants: "Дети, воспитатель (помогает скрепить)",
      results: "Альбом «Наши семейные истории» полностью собран.",
    },
    {
      date: "10.04.2026",
      place: "2-я половина дня (самостоятельная деятельность)",
      event: "Игра «Угадай семейную историю» (по фотографиям и фрагментам рассказов из альбома дети отгадывают, о чьей семье идёт речь).",
      participants: "Дети",
      results: "Закрепили знание семейных историй, проявили живой интерес к альбому.",
    },
    {
      date: "11.04.2026",
      place: "1-я половина дня (совместная деятельность)",
      event: "Решили пригласить родителей на презентацию. Нарисовали и подписали пригласительные открытки (воспитатель помог с формулировками).",
      participants: "Дети, воспитатель",
      results: "Приглашения переданы родителям.",
    },
  ],
};

// Заключительный этап: Дата | Итоговые мероприятия | Оценка эффективности | Степень достижения | Обобщение педагогического опыта
const finalStage = {
  title: "Заключительный этап",
  cols: ["Дата", "Итоговые мероприятия", "Оценка эффективности", "Степень достижения", "Обобщение педагогического опыта"],
  rows: [
    {
      date: "12.04.2026",
      event: "Презентация альбома (развлечение «Семейный альбом»)",
      evaluation: "Дети представили альбом, рассказали о наиболее интересных страницах и историях. Родители высоко оценили самостоятельность детей и результат.",
      achievement: "Цель достигнута",
      generalization: "Фотоотчёт и электронная версия на сайте ДОУ",
    },
    {
      date: "13.04.2026",
      event: "Рефлексия – беседа с детьми",
      evaluation: "Дети отметили, что научились узнавать семейные истории, оформлять страницы, работать сообща. Выросла доля детей с высокими показателями: когнитивная — 55%, аффективная — 60%, психомоторная — 50%.",
      achievement: "Все задачи решены. Дети демонстрируют устойчивые знания о семейных традициях и способах создания коллективного продукта.",
      generalization: "Опыт представлен на педсовете. Отмечена высокая степень детской инициативы и вовлечённости семей.",
    },
  ],
};

const PRESENTATION_URL = "/files/Семейный_альбом_презентация.pptx";

const articleLinks = [
  {
    label: "Как создать семейный альбом вместе с ребёнком — методические рекомендации",
    url: "https://www.youtube.com/results?search_query=семейный+альбом+дети+методика",
  },
  {
    label: "Мастер-класс по созданию видеопоздравления для папы",
    url: "https://www.youtube.com/results?search_query=видеопоздравление+папа+дети+мастер+класс",
  },
  {
    label: "Проектная деятельность в детском саду: семейные ценности",
    url: "https://www.youtube.com/results?search_query=проектная+деятельность+детский+сад+семья",
  },
];

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
              <h1 className="font-caveat font-bold text-4xl md:text-5xl text-center mb-10 leading-tight" style={{ color: "#d97706" }}>
                Принятие участия в мастер-классе по созданию видеопоздравления для папы
              </h1>

              {/* Статьи — жёлтые полоски */}
              <p className="text-lg text-gray-700 mb-4">
                Перейдя по ссылкам ниже вы сможете ознакомиться с подробной информацией по созданию видеофильмов:
              </p>
              <div className="flex flex-col gap-3 mb-10">
                {articleLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 rounded-xl font-medium text-gray-800 transition-all hover:brightness-95 hover:shadow-sm truncate"
                    style={{ background: "#fde68a" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Видеоролики */}
              <p className="text-lg text-gray-700 mb-4">
                Перейдя по ссылкам ниже вы сможете попасть на обучающие видеоролики по созданию видеофильмов:
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
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#fee2e2" }}>
                      <span className="text-2xl">▶️</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">{video.title}</p>
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