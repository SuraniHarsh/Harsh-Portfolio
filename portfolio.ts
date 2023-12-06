import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Harsh Surani',
  title: "Hi all, I'm Harsh",
  description:
    "I'm a Full Stack web developer specializing in backend development, particularly in Node.js and Express.js. I excel in crafting scalable server architectures, optimizing databases, and building RESTful APIs. With skills in React.js and Next.js, I create smooth user experiences. My focus is on leveraging my backend expertise to create strong and high-performing web solutions.",
  resumeLink:
    'https://drive.google.com/file/d/16zyfburkaSkhoM44ZSXVoteSEsa81Kah/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'SuraniHarsh',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/harsh-surani/',
  github: 'https://github.com/SuraniHarsh',
  instagram: 'https://www.instagram.com/_harsh_surani_',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji('⚡ Building RESTful APIs in Node.js & Nest.js REST Framework'),
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
      ],
      softwareSkills: [
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nestjs',
          iconifyTag: 'logos:nestjs',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Nodejs',
          iconifyTag: 'logos:nodejs-icon',
        },
        {
          skillName: 'Tailwind-CSS',
          iconifyTag: 'devicon:tailwindcss',
        },
        {
          skillName: 'MongoDB',
          iconifyTag: 'devicon:mongodb',
        },
        {
          skillName: 'Postgresql',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'Google Cloud',
          iconifyTag: 'devicon:googlecloud',
        },
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend',
    progressPercentage: '80',
  },
  {
    Stack: 'Frontend/Design',
    progressPercentage: '60',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Parul University',
    subHeader: 'Bachelor of Information & Technology',
    duration: '2022 - 2026',
    grade: 'Grade A',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Web Developer Intern ',
    company: 'Lapworkz',
    date: 'December 2023 – January 2024',
    desc: 'I have been interning at Lapworkz, sharpening my web development skills with React.js and Next.js. My focus is on crafting user-friendly interfaces and seamless functionalities for a smooth digital experience.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Flickture',
    desc: 'Flickture: An Elegant Instagram Clone using React.js and Next.js. Upload, like, and save images akin to Instagram. Features intuitive authentication and a familiar interface. A testament to solid frontend skills using React.js and Next.js.',
    github: 'https://github.com/SuraniHarsh/Flickture',
    link: 'https://flickture.vercel.app/',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Harsh Surani',
  description: 'A passionate Full Stack Web Developer and BackEnd Developer.',
  author: 'Harsh Surani',
  image: 'https://avatars.githubusercontent.com/u/55034141?v=4',
  keywords: [
    'Harsh',
    'Harsh Surani',
    '@Harsh',
    'harshsurani',
    'web developer',
    'BackEnd developer',
    'harsh Portfolio ',
    'Harsh Surani Portfolio',
  ],
};
