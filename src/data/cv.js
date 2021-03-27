// playground requires you to assign document definition to a variable called dd

// DATA
const info = {
  fullName: 'Madiyar Bolatov',
  job: 'Frontend Developer',
  age: 22,
  city: 'Almaty',
  country: 'KZ',
  links: [
    {
      title: 'Email',
      url: 'mailto:madiyaar@internet.ru',
      text: 'madiyaar@internet.ru'
    },
    {
      title: 'Telegram',
      url: 'https://t.me/kawaii_neko',
      text: '@kawaii_neko'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/madiyar',
      text: '@madiyar'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/madiyarkz',
      text: '@madiyarkz'
    }
  ],
  languages: [
    { title: 'Kazakh', grade: 'Native' },
    { title: 'Russian', grade: 'Fluent' },
    { title: 'English', grade: 'Intermediate' }
  ],
  jobs: [
    {
      job: 'Junior Frontend Developer',
      company: 'DAR Tech',
      city: 'Almaty',
      start_date: '2020-05-11',
      info: 'Translating complex UX/UI designs, focusing on HTML5, SVG, CSS3, JavaScript and AngularJS.'
    },
    {
      job: 'Web Fullstack Intern',
      company: 'DAR Tech',
      city: 'Almaty',
      start_date: '2020-01-21',
      end_date: '2020-04-01',
      info: 'Translating complex UX/UI designs, focusing on HTML5, SVG, CSS3, JavaScript and AngularJS.'
    }
  ],
  edu: [
    {
      university: 'Satbayev University',
      gpa: 3.3,
      city: 'Almaty',
      grade: 'Bachelor degree',
      start_date: '2017-08-21',
      end_date: '2020-06-02',
      spec: 'Information Systems'
    }
  ],
  skills: [
    'JavaScript', 'HTML/CSS', 'SCSS',
    'TypeScript', 'React', 'Vue.js',
    'Redux', 'Next.js', 'Gatsby',
    'Three.js', 'Nest.js', 'Git',
    'Redux Saga', 'PHP', 'Figma'
  ],
  projects: [
    {
      name: 'Draw Hack',
      link: 'https://github.com/madiyar/draw-hack',
      description: 'Translating complex UX/UI designs, focusing on HTML5, SVG, CSS3, JavaScript and AngularJS.'
    }
  ]
};

// PROFILE
const profile = [
  { text: 'Profile', style: 'header' },
  {
    text: [`I'm a `, { text: info.age, style: 'accent' }, ` y.o. software engineer based in `, { text: `${info.city}, ${info.country}`, style: 'accent' },` specializing in `, { text: 'frontend', style: 'accent' }, ` development.`],
    style: 'summaryStyle',
    marginBottom: 16
  },
];

// WORK EXPERIENCE
const jobs = [
  {
    text: ['Work Experience ', { text: '— 1.5 years', color: '#888', bold: false }],
    style: 'header'
  },
  ...info.jobs.map(item => [
    { text: `${item.job} @ ${item.company}, ${item.city}`, style: 'jobTitle' },
    { text: `${item.start_date} — ${item.end_date ? item.end_date : 'Present'}`, style: 'jobSubtitle' },
    { text: item.info, style: 'summaryStyle', marginBottom: 16 }
  ])
];

// PROJECTS
const projects = [
  { text: 'Projects', style: 'header' },
  ...info.projects.map(item => [
    { text: item.name, style: 'jobTitle' },
    { text: item.link, style: 'jobSubtitle' },
    { text: item.description, style: 'summaryStyle', marginBottom: 16 }
  ])
];

// -------------------------------------------------------------------

// CONTACTS
const contacts = [
  { text: 'Contacts', style: 'header' },
  {
    style: 'contactsStyle',
    text: info.links.map(link => ({
      text: `${link.title}: ${link.text}\n`,
      link: link.url
    }))
  }
];

// SKILLS
const skills = [
  { text: 'Skills', style: 'header' },
  {
    style: 'contactsStyle', 
    text: info.skills.map(skill => ({ text: `${skill}, `}))
  }
];

// EDUCATION
const education = [
  { text: 'Education', style: 'header' },
  ...info.edu.map(item => [
    { text: `${item.university}, ${item.city}`, style: 'jobTitle' },
    { text: `${item.start_date} — ${item.end_date ? item.end_date : 'Present'}`, style: 'jobSubtitle' },
    { text: `${item.grade}, \n${item.spec}, \nGPA: ${item.gpa}`, style: 'contactsStyle', marginBottom: 8 }
  ])
];

// LANGUAGES
const languages = [
  { text: 'Languages', style: 'header' },
  {
    style: 'contactsStyle', 
    text: info.languages.map(lang => ({
      text: `${lang.title} — ${lang.grade}\n`
    }))
  }
];

const styles = {
  fullName: {
    fontSize: 32,
    bold: true
  },
  job: {
    fontSize: 16,
    color: '#888',
    marginBottom: 24,
  },
  header: {
    fontSize: 18,
    bold: true,
    margin: [0, 8, 0, 8],
    color: '#0af'
  },
  accent: {
    color: '#0af',
    bold: true
  },
  contactsStyle: {
    fontSize: 12,
    lineHeight: 1.5
  },
  summaryStyle: {
    fontSize: 14,
    alignment: 'justify'
  },
  jobTitle: {
    bold: true,
    fontSize: 15,
    marginBottom: 4
  },
  jobSubtitle: {
    marginBottom: 4,
    color: '#888',
    fontSize: 12
  }
};

export const cv = {
  pageMargins: [45, 40, 20, 40],
  info: {
    title: info.fullName,
    author: info.fullName,
    subject: 'CV',
  },
  content: [
    { text: info.fullName, style: 'fullName' },
    { text: info.job, style: 'job' },
    {
      columns: [
        {
          // CONTENT
          width: '*',
          stack: [ ...profile, ...jobs, ...projects ]
        },
        {
          // SIDEBAR
          width: 210,
          marginLeft: 20,
          stack: [ ...contacts, ...skills, ...education, ...languages ]
        }
      ]
    },
  ],
  styles,
  defaultStyle: {
    color: '#333'
  }
};