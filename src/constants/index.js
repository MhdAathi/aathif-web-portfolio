import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Aathif is a passionate Software Engineering student with a strong foundation in full-stack web development and modern technologies. Known for his creativity, adaptability, and drive to build clean, efficient, and user-friendly digital experiences, he is constantly exploring new tools and best practices in the tech world. Whether it's crafting seamless front-end interfaces or building powerful back-end systems, Aathif is committed to turning ideas into reality with code.`;

export const ABOUT_TEXT = `A committed Software Engineering Intern and Computer Science graduate, skilled in software development, enterprise software, and 
full-stack web technologies. Proficient in PHP, Java, and modern front-end frameworks, with experience developing scalable 
solutions. Recognized for strong problem-solving skills, attention to detail, and creativity in software engineering. Experienced in 
operating systems and enterprise-level application development, with a focus on sustainability and efficiency. Innovative and 
collaborative, with excellent teamwork and communication skills. Eager to contribute technical expertise to a dynamic and forward
thinking team. `;

export const EXPERIENCES = [
  {
    year: "11/2021 - Present",
    role: "IT Support Technician",
    company: "SMART PC Pvt Ltd, Sri Lanka",
    description: `Provided technical support and troubleshooting for hardware and software issues. Assisted in software installations and optimizations to improve system efficiency. Developed strong problem-solving and debugging skills, which are transferable to software engineering and web development.`,
    technologies: [
      "Hardware Support",
      "Software Troubleshooting",
      "Windows",
      "Linux",
    ],
  },
];

export const PROJECTS = [
  {
    title: "BloodHub | Blood Bank Management System",
    image: project1,
    description:
      "A web-based blood bank management system to streamline donor registration, blood inventory tracking, and hospital requests. It enhances operational efficiency, ensures real-time transparency, and optimizes blood supply management.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/MhdAathi/BloodHub-Project", // 👈 Your GitHub repo link
  },
  {
    title: "GiveHope | Crowdsourced Fundraising Platform",
    image: project2,
    description:
      "A crowdfunding platform designed to streamline campaign management, enable secure donation processing, and enhance supporter engagement. It provides real-time fund tracking and ensures transparency and trust for donors and campaign creators.",
    technologies: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/MhdAathi/GiveHope", // 👈 GitHub link
  },
  {
    title: "Aurora Skin Care | Clinic Appointment & Billing System",
    image: project3,
    description:
      "A Java-based appointment and billing management system for Aurora Skin Care, streamlining appointment scheduling, patient registration, and invoicing to improve clinic operations.",
    technologies: ["Java", "Object-Oriented Programming (OOP)"],
    github: "https://github.com/MhdAathi/aurora-skin-care-system", // 👈 GitHub link
  },
  {
    title: "Pizza Shop System | Customizable Ordering & Payment Platform",
    image: project4,
    description:
      "A Java-based pizza shop management system with customizable orders, real-time tracking, and a loyalty program to enhance customer satisfaction and streamline operations.",
    technologies: [
      "Java",
      "Object-Oriented Programming (OOP)",
      "Design Patterns (Builder, State, Strategy)",
    ],
    github: "https://github.com/MhdAathi/PizzaShopSystem", // 👈 GitHub link
  },
];

export const CONTACT = {
  address: "34/A, Danagama, Mawanella 7C7V+C8M ",
  phoneNo: "+94 76 918 3535 | +94 75 021 3767 ",
  email: "mohamedaathif.dev@gmail.com ",
};
