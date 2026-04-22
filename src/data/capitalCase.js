export const capitalCaseHero = {
  title: 'Capital.com',
  description:
    'Capital.com — международная CFD-платформа, 5000+ инструментов: акции, индексы, криптовалюта, форекс, сырьё.',
  imageSrc: '/img/capital-header.png',
  imageAlt: 'Capital.com hero',
  meta: [
    { label: 'Период', value: 'Октябрь 2025 - наст. время' },
    { label: 'Роль', value: 'Senior Product Designer' },
    { label: 'Обязанности', value: 'Design System, UX/UI, Исследования' },
  ],
}

export const capitalCaseNarrativeRows = [
  {
    label: 'ПРОБЛЕМА',
    content:
      'Приложение существовало несколько лет и за это время собрало лояльную базу — но по визуалу и UX заметно отставало от конкурентов',
    textClass: 'text-wrapper-11',
  },
  {
    label: 'ЗАДАЧИ',
    content:
      'Трансформировать актив лояльности в актив опыта, чтобы повысить LTV существующих клиентов и бизнес мог конкурентоспособно привлекать новую аудиторию. Дополнительно нужно создать адаптивный дизайн под юридические реалии и снизить порог входа для новичков.',
    textClass: 'text-wrapper-12',
  },
]

export const capitalCaseNarrativeSlides = [
  {
    id: 'domain',
    title: 'Погружение в домен',
    description:
      'Прежде чем приступить к работе, мне пришлось очень глубоко изучить вопрос данной темы, так как в самом начале появлялись определенные трудности из-за влияния регуляторных норм ЕС.',
    bullets: [],
    imageSrc: '/img/capital-domain.png',
    imageAlt: 'Погружение в домен',
  },
  {
    id: 'onboarding-problem',
    title: 'Онбординг',
    description:
      'Большой процент пользователей отваливался на онбординге, из-за его сложности на этапе тестов и длины прохождения, от которых нельзя отказаться из-за определенных законов государств.',
    bullets: [],
    imageSrc: '/img/capital-onboarding.png',
    imageAlt: 'Онбординг',
  },
  {
    id: 'onboarding-solution',
    title: 'Онбординг',
    description:
      'Чтобы положительно повлиятьна метрику, я решила переработать его следующим образом:',
    bullets: [
      'Тестирование на знания пользователя сократилось с 10 вопросов до 3, что сделало порог входа проще для новичков и быстрее для опытных трейдеров ',
      'Были удалены экраны с объяснением некоторых тем в формате лекций, при этом появился новый раздел Edu Hub, который закрывает боли новичков и не мешает опытным трейдерам',
    ],
    imageSrc: '/img/capital-onboarding2.png',
    imageAlt: 'Поддержка',
  },
]

export const capitalCaseFeatureIntroRows = [
  {
    label: 'ПОИСК АКТИВОВ',
    content:
      'В самом начале проекта я проводила пользовательские интервью, где стоял вопрос о поиске активов разными слоями ЦА через фильтр «Уровень риска»',
    textClass: 'text-wrapper-11',
  },
  {
    label: 'ИНСАЙТ',
    content:
      'Опытные трейдеры отметили, что риск - это совсем не категория интерфейса, а собственная аналитическая работа, новички же предпочитают простые настройки, где все за них продумано.',
    textClass: 'text-wrapper-12',
  },
]

export const capitalCaseFeatureShowcases = [
  {
    id: 'edu-hub',
    sectionClass: 'frame-14',
    title: 'Раздел Edu Hub',
    description:
      'Так как бизнес хотел расширить целевую аудиторию и охватить новичков в трейдинге, нужно было интегрировать раздел, который способствовал бы обучению пользователей.',
    imageSrc: '/img/capital-edu.png',
    imageAlt: 'Раздел Edu Hub',
  },
  {
    id: 'screener',
    sectionClass: 'frame-21',
    title: 'Скринер',
    description:
      'После получения инсайтов о фильтрации, я создала полноценный инструмент для опытных трейдеров с логикой: от широкого к узкому — сначала класс актива (акции / ETF / форекс / индексы / сырьё), затем параметры. Так пользователь мог настраивать все точечно и уникально под себя.',
    imageSrc: '/img/capital-screener.png',
    imageAlt: 'Скринер',
  },
]

export const capitalCaseConcept = {
  intro: {
    label: 'ВИЗУАЛЬНАЯ КОНЦЕПЦИЯ',
    content:
      'Разработка UI началась с опросов пользователей, которые увидели 3 направления. Собрав весь фидбэк мы с коллегой придумали следующее',
    textClass: 'text-wrapper-16',
  },
  outro: {
    label: 'О СОЗДАНИИ КОНЦЕПЦИИ',
    content:
      'Нам было важно сделать продукт с особенным запоминающимся визуалом, но хорошо читаемым и удобным, поэтому главными принципами стали: визуальная плотность в интерфейсах, но с добавлением воздуха в ключевых точках, четкая иерархия и структура, нейтральные цвета, и скругления, которые позволяют видеть интерфейс более дружелюбным и мягким, при этом не снижает уровень серьезности.',
    textClass: 'text-wrapper-12',
  },
  images: [
    { src: '/img/cap-screen1.png', className: 'img-2', alt: 'Экран концепции 1' },
    {
      src: '/img/cap-screen2.png',
      className: 'img-2',
      alt: 'Экран концепции 2',
    },
    {
      src: '/img/cap-screen3.png',
      className: 'img-2',
      alt: 'Экран концепции 3',
    },
    { src: '/img/cap-screen4.png', className: 'img-2', alt: 'Экран концепции 4' },
    { src: '/img/cap-screen5.png', className: 'img-2', alt: 'Экран концепции 5' },
    { src: '/img/cap-screen6.png', className: 'img-2', alt: 'Экран концепции 6' },
  ],
}

export const capitalCaseResults = {
  title: 'РЕЗУЛЬТАТЫ',
  summary:
    'В результате получилось улучшить пользовательский опыт и восприятие продукта, не сломав доверия пользователя.',
  metrics: [
    {
      id: 'retention',
      value: '+15%',
      label: 'Retention 7d, 30d',
      valueClass: 'text-wrapper-17',
      labelClass: 'text-wrapper-18',
      frameClass: 'frame-28',
    },
    {
      id: 'drop-off',
      value: '-30%',
      label: 'Drop-off rate',
      valueClass: 'text-wrapper-17',
      labelClass: 'text-wrapper-18',
      frameClass: 'frame-29',
    },
    {
      id: 'ltv',
      value: '35%',
      label: 'Lifetime Value',
      valueClass: 'text-wrapper-19',
      labelClass: 'text-wrapper-20',
      frameClass: 'frame-30',
    },
  ],
}

export const capitalCaseFooter = {
  title:
    'Спасибо, что ознакомились<br />с проектом, буду рада обсудить детали в рамках интервью',
}
