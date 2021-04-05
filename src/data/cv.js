import moment from 'moment';
import { awards } from "./awards";
import { basics } from "./basics";
import { languages } from './languages';
import { education } from './education';
import { skills } from './skills';
import { projects } from './projects';
import { work } from './work';

const d = d => moment(d).format('MMM. YYYY');
const s = s => s.split('\n').filter(Boolean).map(text => ({ text: `${text.trim()}\n` }));

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
  skills: [].concat(...skills?.map(s => s.keywords)),
  get exp() {
    const startDate = work[work.length - 1].startDate;
    const endDate = work[0].endDate || moment().format('YYYY-MM-DD');
    return moment(endDate).diff(startDate, 'years', true).toFixed(1);
  }
};

// PROFILE
const PROFILE = [
  { text: 'Profile', style: 'header' },
  { text: basics.summary, style: 'summaryStyle' }
];

// WORK EXPERIENCE
const JOBS = [
  {
    text: ['Work Experience ', { text: `— ${DATA.exp} years`, color: '#888', bold: false }],
    style: 'header'
  },
  ...work.map(item => [
    { text: `${item.position} @ ${item.company}, ${item.city}`, style: 'jobTitle' },
    { text: `${d(item.startDate)} — ${item.endDate ? d(item.endDate) : 'Present'}`, style: 'jobSubtitle' },
    { text: s(item.summary) }
  ])
];

// PROJECTS
const PROJECTS = [
  { text: 'Projects', style: 'header' },
  ...projects.map(item => [
    { text: item.name, style: 'jobTitle' },
    { text: item.url, style: 'jobSubtitle' },
    { text: s(item.summary) },
    { text: item.stack.join(', '), style: 'stack' }
  ])
];

// ACHIEVMENTS
const ACHIEVMENTS = [
  { text: 'Achievments', style: 'header' },
  ...awards.map(item => [
    { text: `${item.title} @ ${item.awarder}`, style: 'jobTitle' },
    { text: d(item.date), style: 'jobSubtitle' },
    { text: s(item.summary), style: 'summaryStyle' }
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
    text: DATA.skills.join(', ')
  }
];

// EDUCATION
const EDUCATION = [
  { text: 'Education', style: 'header' },
  ...education.map(item => [
    { text: `${item.institution}, ${item.city}`, style: 'jobTitle' },
    { text: `${d(item.startDate)} — ${item.endDate ? d(item.endDate) : 'Present'}`, style: 'jobSubtitle' },
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
    marginBottom: 16,
    marginTop: 8
  },
  header: {
    fontSize: 16,
    bold: true,
    margin: [0, 8, 0, 8],
    marginBottom: 16,
    color: '#0af'
  },
  listStyle: {
    fontSize: 12,
    lineHeight: 1.5
  },
  summaryStyle: {
    fontSize: 12,
    alignment: 'justify',
    lineHeight: 1,
    marginBottom: 16
  },
  stack: {
    marginBottom: 16,
    bold: true
  },
  jobTitle: {
    bold: true,
    fontSize: 14,
    marginBottom: 4
  },
  jobSubtitle: {
    marginBottom: 4,
    color: '#888',
    fontSize: 12
  }
};

export const cv = {
  pageMargins: [40, 30, 20, 30],
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
          stack: [ ...CONTACTS, ...SKILLS, ...EDUCATION, ...LANGUAGES, ...ACHIEVMENTS ]
        }
      ]
    },
  ],
  styles,
  defaultStyle: {
    color: '#333'
  }
};