import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const passport = [
  { label: "Тема проекта", icon: "BookOpen", text: "Семейные традиции: «Семейный альбом»" },
  { label: "Вид проекта", icon: "Layers", text: "Познавательно-творческий, детский (инициатива детей)" },
  { label: "Актуальность", icon: "Lightbulb", text: "На утреннем круге дети рассматривали принесённую Лизой старую фотографию её бабушки. Лиза: «Это моя бабушка, когда она была маленькая. А про свою бабушку я ничего не знаю». Максим: «А у меня есть фото, где папа совсем маленький. Я не знаю, где это было». Соня: «А у нас дома есть целый альбом, но мама говорит, что он старый». Ваня: «Давайте и мы сделаем такой альбом, чтобы все знали про свои семьи!». Дети (хором): «Давайте!». Алиса: «А как сделать альбом, если у нас нет таких фотографий?». Дима: «Можно попросить у родителей. И сами нарисовать!». Так родилась идея познавательно-творческого проекта «Семейные традиции: Семейный альбом»" },
  { label: "Проблема (проблемный вопрос)", icon: "AlertCircle", text: "Дети хотят создать общий альбом о семьях группы, но не знают, как и какие собрать для этого фотографии, узнать истории и оформить всё так, чтобы получился настоящий альбом, который можно показать родителям и друзьям." },
  { label: "Проблемная ситуация", icon: "HelpCircle", text: "У детей нет готового альбома, нет полных знаний о семейных историях, и они не знают, с чего начать создание семейного альбома." },
  { label: "Гипотеза", icon: "Sparkles", text: "Предполагаемый результат проекта — создание общего семейного альбома группы, содержащего собранные детьми семейные фотографии, выполненные самостоятельно рисунки и оформленные рассказы, полученные через общение с родителями и видеозвонки бабушкам. В итоге совместной деятельности будет оформлен полноценный альбом, готовый к презентации сверстникам и родителям." },
  { label: "Цель проекта", icon: "Target", text: "Создание детьми общего семейного альбома группы с фотографиями, рисунками и рассказами о семьях, собранными путём опроса родителей, видеозвонков бабушкам, диктовки историй воспитателю, оформления страниц, рисования сюжетов «Моя семья» и «Семейные традиции», сборки альбома и презентации его родителям, в ходе познавательно-творческого проекта «Семейные традиции: Семейный альбом»." },
  { label: "Сроки реализации", icon: "Calendar", text: "Краткосрочный: 01.04.2026 – 10.04.2026" },
  { label: "Задачи проекта", icon: "ListChecks", text: "1. Узнать у родителей и бабушек/дедушек (в том числе по видеосвязи) истории о семейных фотографиях и традициях.\n2. Собрать и принести старые семейные фотографии.\n3. Нарисовать рисунки «Моя семья» и «Семейные традиции».\n4. Составить и продиктовать рассказы о своей семье.\n5. Оформить страницы альбома (наклеить фото, рисунки, подписи).\n6. Собрать страницы в общий альбом и оформить обложку.\n7. Представить готовый альбом родителям и сверстникам." },
  { label: "Особенности проекта", icon: "Star", text: "Проект полностью инициирован детьми. Воспитатель не подсказывал, дети сами продумали последовательность, распределили обязанности, выбрали материалы. Взрослый — помощник." },
  { label: "Продукт проекта", icon: "BookHeart", text: "Общий альбом группы «Наши семейные истории» (печатная и электронная версия)." },
  { label: "Практическая значимость", icon: "Award", text: "Дети получили опыт самостоятельной проектной деятельности, узнали семейные истории, научились договариваться и создавать общий продукт." },
  { label: "Результаты проекта", icon: "CheckCircle", text: "Все 20 семей принесли фотографии и поделились историями. Дети нарисовали 20 рисунков. Создан и оформлен общий альбом. Проведена презентация альбома для родителей. Гипотеза подтвердилась." },
  { label: "Итог", icon: "Trophy", text: "Цель проекта достигнута: детьми создан общий семейный альбом группы, в который вошли принесённые семейные фотографии, авторские рисунки «Моя семья» и «Семейные традиции», а также записанные рассказы о семейных историях и традициях. Материалы были собраны в ходе опроса родителей, видеоконференций с бабушками, совместного оформления страниц и представлены на итоговой презентации для родителей. Дети получили опыт самостоятельной проектной деятельности." },
  { label: "Ресурсы", icon: "Package", text: "Бумага, картон, краски, карандаши, клей, ножницы, семейные фотографии, ноутбук, сканер, принтер; помощь воспитателя." },
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