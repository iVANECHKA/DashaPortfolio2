export const siteBrand = 'ДАРЬЯ КОРМИЛИЦЫНА'
export const siteYearLabel = '©2026'

export const primaryNavigationLinks = [
  { to: { path: '/', hash: '#projects' }, label: 'ПРОЕКТЫ' },
  { to: { path: '/', hash: '#about' }, label: 'ОБО МНЕ' },
]

export const siteContacts = [
  {
    label: 'Эл. почта',
    value: 'kormil.dashu@gmail.com',
    href: 'mailto:kormil.dashu@gmail.com',
    iconSrc: '/img/vector.svg',
  },
  {
    label: 'Телеграм',
    value: '@daria_kormilitsyna',
    href: 'https://t.me/daria_kormilitsyna',
    iconSrc: '/img/image.svg',
  },
]

export const homeHeroContent = {
  specialization: {
    title: 'СПЕЦИАЛИЗАЦИЯ',
    value: 'B2B, B2C, B2B2C',
  },
  parts: [
    { text: 'Привет! ', tone: 'base' },
    { text: 'Я', tone: 'accent' },
    {
      text: ' Senior Product designer.Специализируюсь на мобильных интерфейсах.',
      tone: 'base',
    },
  ],
}

export const homeProjects = [
  {
    title: 'Capital.com',
    subtitle: 'Capital.com — международная<br />CFD-платформа',
    description:
      'Задача на проекте заключалась<br />в трансформации актива лояльности в актив опыта, чтобы повысить LTV существующих клиентов и бизнес мог конкурентоспособно привлекать новую аудиторию.',
    details: [
      {
        label: 'Роль',
        value: 'Senior Product Disigner',
        widthClass: 'project-card__detail-value--role',
      },
      {
        label: 'Ориентация',
        value: 'Мобильное устройство',
        widthClass: 'project-card__detail-value--orientation',
      },
      {
        label: 'Период',
        value: '2025-2026',
        fit: true,
      },
    ],
    imageSrc: '/img/capital-banner.png',
    imageAlt:
      'Проект Capital.com: экран мобильного интерфейса на фоне градиента',
    imageHeightClass: 'project-card__image--default',
    route: '/projects/capital',
  },
  {
    title: 'Gedocorp',
    subtitle:
      'IT-компания, создающая инновационные решения в области промышленной безопасности',
    description:
      'Создание продукта с нуля, с детальной проработкой пользовательских паттернов<br />и проведением сложных исследований.',
    details: [
      {
        label: 'Роль',
        value: 'Lead Product Disigner',
        widthClass: 'project-card__detail-value--role',
      },
      {
        label: 'Ориентация',
        value: 'Планшет',
        widthClass: 'project-card__detail-value--orientation',
      },
      {
        label: 'Период',
        value: '2022-2024',
        fit: true,
      },
    ],
    imageSrc: '/img/gedo-banner.png',
    imageAlt:
      'Проект Gedocorp: интерфейс промышленного программного обеспечения на планшете',
    imageHeightClass: 'project-card__image--default',
  },
  {
    title: 'RBK Bank',
    subtitle: 'Казахстанский банк с региональной сетью',
    description:
      'Моя задача заключалась в полной переработке мобильного приложения: от создания дизайн-системы с нуля до проектирования пользовательских сценариев<br />и интерфейсов.',
    details: [
      {
        label: 'Роль',
        value: 'Senior Product Disigner',
        widthClass: 'project-card__detail-value--role',
      },
      {
        label: 'Ориентация',
        value: 'Мобильное устройство',
        widthClass: 'project-card__detail-value--orientation',
      },
      {
        label: 'Период',
        value: '2023-2025',
        fit: true,
      },
    ],
    imageSrc: '/img/rbk-banner.png',
    imageAlt: 'Проект RBK Bank: экран мобильного банковского приложения',
    imageHeightClass: 'project-card__image--short',
  },
]

export const homeAboutContent = {
  title: 'ОБО МНЕ',
  imageSrc: '/img/profile-pic.png',
  imageAlt: 'Портрет Дарьи Кормилицыной',
  paragraphs: [
    'Но семантический разбор внешних противодействий требует анализа поставленных обществом задач. Повседневная практика показывает,',
    'Но семантический разбор внешних противодействий требует анализа поставленных обществом задач. Повседневная практика показывает,',
  ],
}

export const homeFooterContent = {
  title:
    'Спасибо, что ознакомились<br />с портфолио, буду рада обсудить детали в рамках интервью',
}
