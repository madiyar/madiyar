import { useEffect, useState } from 'preact/hooks';

const useData = (): IResponse | null => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/resume');
      const data = await res.json();
      setData(data);
    })();
  }, []);

  return data;
}

interface IResponse {
  basics: Basics;
  work: Work[];
  education: Education[];
  awards: Award[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
}

interface Profile {
  network: string;
  username: string;
  url: string;
}

interface Basics {
  name: string;
  label: string;
  email: string;
  url: string;
  birthday: string;
  location: {
    city: string;
    country: string;
  };
  profiles: Profile[];
}

interface Work {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  city: string;
}

interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Skill {
  name: string;
  keywords: string[];
  level: string;
}

interface Language {
  language: string;
  fluency: string;
}

interface Project {
  name: string;
  url: string;
  summary: string;
  keywords: string[];
}

export default useData
