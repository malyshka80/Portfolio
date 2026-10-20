const assetUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
const HeroImage = assetUrl("hero-img.webp");

const Image = {
  HeroImage,
};

export default Image;

const Tools1 = assetUrl("tools/vscode.png");
const Tools2 = assetUrl("tools/reactjs.png");
const Tools3 = assetUrl("tools/nextjs.png");
const Tools4 = assetUrl("tools/tailwind.png");
const Tools6 = assetUrl("tools/js.png");
const Tools7 = assetUrl("tools/nodejs.png");
const Tools8 = assetUrl("tools/github.png");
const Tools9 = assetUrl("tools/ai.png");
const Tools10 = assetUrl("tools/canva.png");
const Tools11 = assetUrl("tools/figma.png");
const Tools13 = assetUrl("tools/firebase.png");
const Tools14 = assetUrl("tools/html.png");
const Tools15 = assetUrl("tools/css.png");
const Tools18 = assetUrl("tools/vite.png");
const Tools19 = assetUrl("tools/mysql.png");


export const listTools = [
  {
    id: 1,
    image: Tools1,
    name: "Visual Studio Code",
    is: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    image: Tools2,
    name: "React JS",
    is: "Framework",
    dad: "200",
  },
  {
    id: 3,
    image: Tools3,
    name: "Next JS",
    is: "Framework",
    dad: "300",
  },
  {
    id: 4,
    image: Tools4,
    name: "Tailwind CSS",
    is: "Framework",
    dad: "400",
  },
  
  {
    id: 6,
    image: Tools6,
    name: "Javascript",
    is: "Language",
    dad: "600",
  },
  {
    id: 7,
    image: Tools7,
    name: "Node JS",
    is: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    image: Tools8,
    name: "Github",
    is: "Repository",
    dad: "800",
  },
  {
    id: 9,
    image: Tools9,
    name: "Adobe Illustrator",
    is: "Design App",
    dad: "900",
  },
  {
    id: 10,
    image: Tools10,
    name: "Canva",
    is: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    image: Tools11,
    name: "Figma",
    is: "Design App",
    dad: "1100",
  },
  
  {
    id: 13,
    image: Tools13,
    name: "Firebase",
    is: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    image: Tools14,
    name: "HTML",
    is: "Language",
    dad: "1400",
  },
  {
    id: 15,
    image: Tools15,
    name: "CSS",
    is: "Language",
    dad: "1500",
  },
  
  {
    id: 18,
    image: Tools18,
    name: "Vite",
    is: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    image: Tools19,
    name: "MySql",
    is: "Framework",
    dad: "1900",
  },
];

const Project1 = assetUrl("projects/project1.png");
const Project2 = assetUrl("projects/project2.png");
const Project3 = assetUrl("projects/project3.png");

export const listProjects = [
  {
    id: 1,
    image: Project1,
    title: "Personal Web Portfolio ",
    subtitle: "A professional website showcasing the developer's projects, technical skills, and background in one accessible place.",
    fullDescription:"A personal portfolio website created to establish a professional online presence and showcase projects, technical skills, and development experience. The website serves as a central place for visitors, recruiters, and potential collaborators to discover the developer's work and learn more about their background.Designed to present information in a clear and accessible way, the portfolio helps communicate technical abilities, highlight selected projects, and make it easier for visitors to connect with the developer. It also provides a foundation for continuously showcasing new projects and professional achievements.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/malyshka80/Portfolio",
    dad: "100",
  },
  {
    id: 2,
    image: Project2,
    title: "Finance Management Web App",
    subtitle: "A personal finance platform for tracking income and expenses, organizing budgets, and monitoring financial activity.",
    fullDescription:"A personal finance management web application designed to help users organize their finances, track income and expenses, and gain a clearer understanding of their spending habits. The platform provides a centralized space for managing financial activity, monitoring budgets, and making more informed everyday financial decisions. Its goal is to make personal money management more accessible, structured, and intuitive through a user-friendly digital experience.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/malyshka80/Finance-Web-App",
    dad: "200",
  },
  {
    id: 3,
    image: Project3,
    title: "MindMate AI — AI-Powered Study Companion",
    subtitle: "An AI-powered study companion combining personalized learning tools, mood check-ins, relaxing music, and eye-comfort features.",
    fullDescription:"MindMate AI is an AI-powered study companion designed to make learning more personalized, comfortable, and enjoyable for high school and university students. It combines AI-assisted learning, mood check-ins, relaxing music, and eye-comfort features in a calm and welcoming digital environment.The study assistant helps learners understand concepts, summarize notes, create flashcards, and practice through short quizzes. Students can also select relaxing soundscapes, reflect on their mood, and organize manageable study sessions at their own pace. With its student-centered design, MindMate AI aims to encourage productive study habits while reducing unnecessary pressure.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/malyshka80/MyMindMate",
    dad: "300",
  },
  
];
