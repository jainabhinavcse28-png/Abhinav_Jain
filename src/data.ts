/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Experience, VolunteerRole, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Abhinav Jain",
  title: "Computer Science Student & Head of Finance at IEEE-PELS",
  institution: "Vellore Institute of Technology, Vellore",
  gpa: "8.3",
  course: "B.Tech in Computer Science and Engineering",
  email: "jain.abhinav.cse28@gmail.com",
  phone: "+91 7206078584",
  linkedin: "https://www.linkedin.com/in/abhinav-jain-a686b5309",
  location: "New Delhi, India",
  about: "I am a driven Computer Science and Engineering student at VIT Vellore, skilled in C++ and currently expanding my expert knowledge in Data Structures, Algorithms, and System Design. Interested in software development and web-based applications to solve real-world problems. As the Head of Finance and Senior Core Member for IEEE-PELS, I combine sound academic logic with team leadership and resource allocation competencies.",
};

export const EXPERIENCES: Experience[] = [
  {
    id: "ieee-pels",
    organization: "IEEE Power Electronics Society (PELS) VIT",
    role: "Head of Finance / Senior Core Member",
    period: "Jan 2025 – Present",
    logoText: "⚡",
    colorClass: "from-blue-500 to-indigo-600",
    details: [
      "Appointed as Head of Finance to oversee budget allocation, event sponsorships, and resource audits for high-visibility technical symposiums.",
      "Spearheaded cost-saving workflows, ensuring optimal resource distribution for multiple college-wide technical workshops and projects.",
      "Worked as a Senior Core Member to design and host technical sessions on hardware-software integrations and automation.",
      "Co-managed Junior Core Members, providing mentorship on engineering principles, event delivery, and community engagement."
    ]
  },
  {
    id: "ieee-pels-jr",
    organization: "IEEE Power Electronics Society (PELS) VIT",
    role: "Junior Core Member",
    period: "Oct 2024 – Dec 2024",
    logoText: "⚡",
    colorClass: "from-slate-400 to-slate-600",
    details: [
      "Gained hands-on skills in cross-functional co-ordination, organizing core society roundtables and technical meetups.",
      "Assisted senior project teams in sourcing materials and assembling hardware kits for electrical and software labs."
    ]
  }
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: "yantra",
    event: "Yantra 2026",
    organization: "VIT Vellore",
    date: "Feb 2026",
    role: "Logistics & Technical Volunteer",
    description: "Facilitated technical events, managed participant check-ins, handled hardware setup, and mitigated delays within crowded competition corridors."
  },
  {
    id: "gravitas",
    event: "Gravitas 2025",
    organization: "VIT Vellore",
    date: "Sept 2025",
    role: "Event Co-ordinator & Technical Volunteer",
    description: "Co-ordinated central panels for VIT's flagship international techno-management fest, ensuring seamless coordination of cross-campus tracks."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "hostel-system",
    title: "Smart Hostel Management System",
    description: "A dual-panel web application separating student complaints and leave applications from warden oversight dashboards, drastically reducing paper workloads.",
    details: [
      "Developed a dual-panel system delivering separate interactive, stateful interfaces for Students and Wardens.",
      "Enabled students to file room complaints (Wi-Fi, plumbing, etc.), apply for official leave out-passes, and check active daily mess schedules.",
      "Built warden dashboard with permissions to approve or decline student leaves, manage room allotments, and broadcast critical alerts or announcements.",
      "Reduced hostel office administrative lag by replacing spreadsheet tracking with automated state queries.",
      "Enforced role-based constraints, ensuring data isolation between students and admin teams."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Local Storage", "Tailwind CSS"],
    link: "https://hostelhub-gules.vercel.app/",
    category: "web",
    demoType: "hostel_system"
  },
  {
    id: "portfolio",
    title: "Portfolio website",
    description: "A fully responsive and interactive portfolio showcasing academic projects, core skills, leadership roles, and real-time frontend systems.",
    details: [
      "Engineered an elegant, fully responsive frontend showcase illustrating technical skills, event history, and achievements.",
      "Integrated lightweight scroll animations, component transitions, interactive state engines, and a custom code terminal.",
      "Designed grid sections and color coordinates optimized for flawless legibility on modern cross-platform displays."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Lucide Icons"],
    category: "web",
    demoType: "custom"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "tech",
    name: "Technical Skills",
    icon: "Code2",
    skills: [
      { name: "C++ Programming", level: 5, description: "Object-oriented modeling, pointers, memory allocation, and STL libraries." },
      { name: "Data Structures & Algos", level: 5, description: "Advanced trees, graphs, sorting, searching, and algorithmic design." },
      { name: "System Design", level: 4, description: "Client-server architecture, database modeling, and scalable design patterns." },
      { name: "DBMS & SQL", level: 4, description: "Relational modeling, schema creation, join queries, indexes, and constraints." },
      { name: "Frontend Development", level: 4, description: "Modern React workflows, state management engines, and responsive UI layout with Tailwind CSS." }
    ]
  },
  {
    id: "math",
    name: "Mathematical Skills",
    icon: "FileDigit",
    skills: [
      { name: "Probability & Statistics", level: 5, description: "Bayesian probability, distribution functions, statististics, and computational models." },
      { name: "Linear Algebra", level: 4, description: "Matrix computations, vector spaces, eigenvalues, and coordinate systems." },
      { name: "Discrete Mathematics", level: 4, description: "Set theory, graph theory, propositional logic, and algebraic structures." }
    ]
  },
  {
    id: "core",
    name: "Core",
    icon: "Users",
    skills: [
      { name: "Problem Solving", level: 5, description: "Expert debugging, complexity optimization, and clean algorithmic code." },
      { name: "Analytical Thinking", level: 5, description: "Interpreting complex data structures, operational bottleneck logs, and business requirements." },
      { name: "Team Management", level: 5, description: "Overseeing IEEE-PELS finance team structures, coordinating fests, and guiding volunteers." },
      { name: "Communication", level: 5, description: "Conveying technical logic, financial audits, and workshop schedules with clarity." }
    ]
  },
  {
    id: "languages",
    name: "Languages",
    icon: "Globe",
    skills: [
      { name: "English (Fluent)", level: 5, description: "Professional and academic default communication." },
      { name: "Hindi (Native)", level: 5, description: "Native bilingual fluency, spoken and written." },
      { name: "Spanish (beginner)", level: 2, description: "Elementary vocabulary and greetings." }
    ]
  }
];
