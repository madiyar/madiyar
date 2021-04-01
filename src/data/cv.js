import { basics } from "./basics";
import { languages } from './languages';
import { education } from './education';
import { skills } from './skills';
import { projects } from './projects';
import { work } from './work';

// DATA
const DATA = {
  contacts: [
    {
      network: 'Website',
      url: basics.website,
      username: basics.website
    },
    {
      network: 'E-mail',
      url: `mailto:${basics.email}`,
      username: basics.email
    },
    ...basics.profiles.map(item => ({ ...item, username: `@${item.username}`}))
  ],
  skills: [].concat(...skills?.map(s => s.keywords))
};

// PROFILE
const PROFILE = [
  { text: 'Profile', style: 'header' },
  { text: basics.summary, style: 'summaryStyle' }
];

// WORK EXPERIENCE
const JOBS = [
  {
    text: ['Work Experience ', { text: '— 1.5 years', color: '#888', bold: false }],
    style: 'header'
  },
  ...work.map(item => [
    { text: `${item.position} @ ${item.company}, ${item.city}`, style: 'jobTitle' },
    { text: `${item.startDate} — ${item.endDate ? item.endDate : 'Present'}`, style: 'jobSubtitle' },
    { text: item.summary, style: 'summaryStyle' }
  ])
];

// PROJECTS
const PROJECTS = [
  { text: 'Projects', style: 'header' },
  ...projects.map(item => [
    { text: item.name, style: 'jobTitle' },
    { text: item.url, style: 'jobSubtitle' },
    { text: item.summary, style: 'summaryStyle' }
  ])
];

// -------------------------------------------------------------------

// CONTACTS
const CONTACTS = [
  { text: 'Contacts', style: 'header' },
  {
    style: 'listStyle',
    text: DATA.contacts.map(link => ({
      text: `${link.network}: ${link.username}\n`,
      link: link.url
    }))
  }
];

// SKILLS
const SKILLS = [
  { text: 'Skills', style: 'header' },
  {
    style: 'listStyle', 
    text: DATA.skills.map(skill => ({ text: `${skill}, `}))
  }
];

// EDUCATION
const EDUCATION = [
  { text: 'Education', style: 'header' },
  ...education.map(item => [
    { text: `${item.institution}, ${item.city}`, style: 'jobTitle' },
    { text: `${item.startDate} — ${item.endDate ? item.endDate : 'Present'}`, style: 'jobSubtitle' },
    { text: `${item.studyType} degree, \n${item.area}, \nGPA: ${item.gpa}`, style: 'listStyle', marginBottom: 8 }
  ])
];

// LANGUAGES
const LANGUAGES = [
  { text: 'Languages', style: 'header' },
  {
    style: 'listStyle', 
    text: languages.map(lang => ({
      text: `${lang.language} — ${lang.fluency}\n`
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
  listStyle: {
    fontSize: 12,
    lineHeight: 1.5
  },
  summaryStyle: {
    fontSize: 14,
    alignment: 'justify',
    marginBottom: 16
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
    title: basics.name,
    author: basics.name,
    subject: 'CV',
  },
  content: [
    { text: basics.name, style: 'fullName' },
    { text: basics.label, style: 'job' },
    {
      columns: [
        {
          // CONTENT
          width: '*',
          stack: [ ...PROFILE, ...JOBS, ...PROJECTS ]
        },
        {
          // SIDEBAR
          width: 210,
          marginLeft: 20,
          stack: [ ...CONTACTS, ...SKILLS, ...EDUCATION, ...LANGUAGES ]
        }
      ]
    },
  ],
  styles,
  defaultStyle: {
    color: '#333'
  }
};