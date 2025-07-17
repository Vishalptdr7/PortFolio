import Work1 from "../../src/assets/Work1.png";
import Work2 from "../../src/assets/Work2.png";
import Work3 from "../../src/assets/Work3.png";
import Work4 from "../../src/assets/Work4.png";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Barter System (Skill Exchanging Web App)",
    category: "web",
    demoUrl: "",
    sourceUrl: "https://github.com/Vishalptdr7/BarterSystem",
    status: "completed",
    description: `A real-time MERN stack web app for exchanging skills like web development, design, etc. Users can list their skills, chat with others, request swaps, and review each other after completion. Features include group chat, notifications, and secure user authentication.
      Frontend: React.js, Tailwind CSS, Material Tailwind, Zustand, Socket.IO (client)
      Backend: Node.js, Express.js, MySQL, JWT Auth, Socket.IO (server)`,
  },
  {
    id: 2,
    image: Work2,
    title: "Price Tracker",
    category: "web",
    demoUrl: "",
    sourceUrl: "https://github.com/Vishalptdr7/Price-Tracker",
    status: "completed",
    description:
      "A price tracking app that monitors product prices on Amazon and Flipkart. Users can paste product URLs and set target prices. The system checks prices periodically and sends email or SMS alerts when prices drop. Implemented web scraping using Cheerio and Puppeteer, along with email/SMS notification logic. I build this using React.js, Tailwind CSS, Axios, Node.js, Express.js, MongoDB, Puppeteer, Cheerio, Node-Cron, Nodemailer.",
  },
  {
    id: 3,
    image: Work3,
    title: "E-Learning Platform",
    category: "web",
    demoUrl: "",
    sourceUrl: "https://github.com/Vishalptdr7/Minor_project-1",
    status: "completed",
    description: `A basic web-based e-learning platform designed to facilitate digital education. Students can access course content, watch educational videos, and take quizzes to test their understanding. Teachers can upload study materials and track student progress to ensure effective learning.


Students engage with the content through an intuitive interface.

Teachers manage course materials and monitor learners’ performance in real time.

Built using HTML, CSS, JavaScript, Node.js, and MongoDB, the system supports core learning interactions while keeping the architecture simple and efficient.`,
  },
  {
    id: 4,
    image: Work4,
    title: "Portfolio Website",
    category: "web",
    demoUrl: "",
    sourceUrl: "https://github.com/Vishalptdr7/PortFolio",
    status: "completed",
    description:
      "A personal portfolio website built using React . Showcases my projects, skills, and contact form. Fully responsive and cleanly designed to highlight my work and GitHub contributions.",
  },
];
