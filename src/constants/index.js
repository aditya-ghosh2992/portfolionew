import project1 from "../assets/projects/p1.avif";
import project2 from "../assets/projects/p2.avif";
import project3 from "../assets/projects/p3.webp";
import project4 from "../assets/projects/p4.jpg";

export const HERO_CONTENT = `Hello Guys👋I'm an aspiring Machine Learning Engineer passionate about AI and data science. I enjoy building impactful projects, engaging in different tech communities, and crafting designs for various tech organizations.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With nearlly an Year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, PostGresql, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website {OLD}",
    image: project1,
    description:
      "My previous Portfolio Website, which is designed and developed myself using the basic web development technologies I learnt back then.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Drum Kit JS",
    image: project2,
    description:
      "A simple application which allows you to play drums by clicking on the drums or pressing the corresponding keys on your keyboard.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "AI-HUB",
    image: project4,
    description:
      "Landing page for a AI based platform which aims to help people with their daily life activities.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
