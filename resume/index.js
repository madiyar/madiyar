import resume from "./resume.json" with { type: 'json' };
import dayjs from "dayjs";
import fs from "fs";

// const { resume } = require("./resume.json");
// var fs = require("fs");

const { basics, education, skills, work } = resume;
const date = (date) => date ? dayjs(date).format("MMM. YYYY") : "";

const getBasics = () => {
  const summary = `${basics.location.city}, ${basics.location.countryCode}, GTM+5`;

  // left column
  const left = [
    `\\textbf{\\Huge ${basics.name}}`,
    `\\textbf{\\Large ${basics.label}}`,
    summary,
    `\\href{${basics.url}}{${basics.url}}`,
  ];

  // right column
  const right = [{ network: "Email", url: `mailto:${basics.email}`, username: basics.email }, ...basics.profiles].map(
    ({ network, url, username }) => `${network}: \\href{${url}}{${username.replace(/_/g, "\\_")}}`
  );

  const items = [];
  const length = left.length > right.length ? left.length : right.length;

  for (let i = 0; i < length; i++) {
    if (left[i]) {
      items.push(left[i]);
    }
    if (right[i]) {
      items.push(right[i]);
    }
  }

  const heading = items.reduce((acc, cur, i) => {
    if (i % 2 !== 0) {
      acc += `\n & ${cur} \\\\ \n\n`;
    } else {
      acc += cur;
    }
    return acc;
  }, "");

  return `
    %-----------------HEADING-----------------
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      ${heading}
    \\end{tabular*}
  `;
};

const getEducation = () => {
  return `
    %-----------------EDUCATION-----------------
    \\section{Education}
      \\resumeSubHeadingListStart
        ${education
          .map(
            ({ institution, location, studyType, area, score, startDate, endDate }) => `
          \\resumeSubheading
            {${institution}}{${location.city}, ${location.countryCode}}
            {${studyType} of ${area}: GPA: ${score}}{${date(startDate)} -- ${date(endDate)}}
        `
          )
          .join("")}
      \\resumeSubHeadingListEnd
  `;
};

const getSkills = () => {
  return `
    %-----------------PROGRAMMING SKILLS-----------------
    \\section{Programming Skills}
    \\resumeSubHeadingListStart
      ${skills
        .map(
          ({ name, keywords }) => `
        \\item{
          \\textbf{${name}}{: ${keywords.join(", ")}}
        }
      `
        )
        .join("")}
    \\resumeSubHeadingListEnd
  `;
};

const getWork = () => {
  const getProject = ({ name, stack, highlights }) => `
    \\projectName{${name}}
    \\resumeItem{Stack}{${stack}}
    ${highlights.map((item) => `\\listItem{${item}} \n`).join("")}
  `;
  return `
  %-----------------EXPERIENCE-----------------
  \\section{Experience}
    \\resumeSubHeadingListStart
      ${work
        .map(
          ({ name, location, position, startDate, endDate, projects }) => `
        \\resumeSubheading
          {${name}}{${location.city}, ${location.countryCode}}
          {${position}}{${date(startDate)} - ${date(endDate) || "Present"}}
          \\resumeItemListStart
            ${projects.map(getProject).join("")}
          \\resumeItemListEnd
      `
        )
        .join("")}
    \\resumeSubHeadingListEnd
  `;
};

fs.readFile("resume/head.txt", "utf8", function (err, data) {
  if (err) throw err;

  const output = `
    ${data}
    ${getBasics()}
    ${getWork()}
    ${getEducation()}
    ${getSkills()}
    %-------------------------------------------
    \\end{document}
  `

  fs.writeFile("resume/resume.tex", output, (err) => {
    if (err) console.log(err);
  });
});
