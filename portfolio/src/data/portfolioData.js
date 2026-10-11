/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes needed.
 *
 * Fields marked TODO are empty on purpose: the UI hides anything left blank,
 * so the site stays clean until you fill them in.
 * Icons are Lucide icon names (see src/lib/icons.js for the available set).
 */

export const profile = {
  name: "Arif Rachman Ramli",
  initials: "AR",
  roles: ["Front End Developer", "IT Support Specialist"],
  intro:
    "I build responsive web interfaces with React and Laravel, and I've spent a year keeping an office's computers, network and licenses in order. I care about both sides of the screen: how it looks, and whether it keeps working.",
  bio: [
    "I'm a Teknik Informatika graduate from Universitas Nusa Mandiri, based in Jakarta Timur. My work sits where software meets the people using it.",
    "As a front end developer, I turned designs into responsive, user-friendly interfaces, tuned them for speed, and tested them before release. Before that, in IT support, I fixed the problems users actually run into — broken apps, slow networks, missing licenses — which taught me to build things that hold up outside the dev environment.",
  ],
  photo: "/arif.webp", // square face crop, used as the hero avatar (files live in /public)
  portrait: "/arif-portrait.webp", // 4:5 portrait, used in the About section
  location: "Jakarta Timur, Indonesia",
  email: "arifrachmanramli16@gmail.com",
  phone: "088290381487",
  whatsapp: "6288290381487", // international format, used for wa.me links
  showPhone: false, // set true to print the phone number on the page (WhatsApp button works either way)
  cvUrl: "/cv-arif-rachman-ramli.pdf", // put the PDF in /public with this exact name
  socials: [
    { label: "GitHub", url: "", icon: "github" }, // TODO: https://github.com/your-username
    { label: "LinkedIn", url: "", icon: "linkedin" }, // TODO: https://www.linkedin.com/in/your-profile
  ],
};

export const facts = [
  { label: "Education", value: "S1 Teknik Informatika, Universitas Nusa Mandiri" },
  { label: "GPA", value: "3.03" },
  { label: "Experience", value: "2+ years in front end development and IT support" },
  { label: "Based in", value: "Jakarta Timur" },
];

export const education = [
  {
    degree: "S1",
    major: "Teknik Informatika",
    institution: "Universitas Nusa Mandiri",
    gpa: "3.03",
    period: "", // TODO: e.g. "2018 – 2022"
  },
];

export const experience = [
  {
    id: "front-end-developer",
    role: "Front End Developer",
    company: "", // TODO: company name
    period: { start: "2023-07", end: "2024-07" },
    highlights: [
      "Built responsive, user-friendly interfaces from design to production.",
      "Optimized page performance so screens load and respond quickly.",
      "Worked with the design team to turn mockups into working UI.",
      "Tested features manually and with automated tests before release.",
    ],
    tech: [], // TODO: optional, e.g. ["React", "Tailwind CSS"]
  },
  {
    id: "it-support",
    role: "IT Support",
    company: "", // TODO: company name
    period: { start: "2022-06", end: "2023-07" },
    highlights: [
      "Diagnosed and fixed operating system and application problems for staff.",
      "Managed the office LAN/WAN network and kept people connected.",
      "Kept the hardware and software license inventory accurate.",
      "Maintained data integrity and system security.",
    ],
    tech: [],
  },
];

export const projectCategories = ["All", "Web App", "Company Profile", "Internal System"];

export const projects = [
  {
    id: "absensi-cuti",
    title: "Employee Attendance & Leave System",
    originalTitle: "Sistem Aplikasi Absensi dan Cuti Karyawan",
    client: "Kelurahan Cipinang Muara",
    category: "Web App",
    icon: "CalendarCheck",
    description:
      "A web application that records staff attendance and handles leave requests for the kelurahan office.",
    tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "", // TODO: screenshot path, e.g. "/projects/absensi.webp"
    links: { demo: "", github: "" },
    featured: true,
  },
  {
    id: "furniture-company-profile",
    title: "Furniture Company Profile",
    originalTitle: "Website Company Profile Furniture",
    client: "Furniture business",
    category: "Company Profile",
    icon: "Sofa",
    description:
      "A company profile website that presents a furniture business's products and contact details on desktop and mobile.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    image: "",
    links: { demo: "", github: "" },
    featured: false,
  },
  {
    id: "inventaris-kantor",
    title: "Office Inventory Management",
    originalTitle: "Sistem Manajemen Inventaris Kantor",
    client: "Internal office tool",
    category: "Internal System",
    icon: "Boxes",
    description:
      "Tracks office assets and equipment in one place, with records that are easy to search and update.",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    image: "",
    links: { demo: "", github: "" },
    featured: false,
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "LayoutTemplate",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["PHP", "Laravel", ".NET Core", "ElysiaJS", "Bun"],
  },
  { category: "Database", icon: "Database", items: ["MySQL", "SQL Server"] },
  { category: "Mobile", icon: "Smartphone", items: ["Android (Java)"] },
  { category: "Tools & Ops", icon: "Wrench", items: ["Git", "IT Troubleshooting", "LAN/WAN"] },
];

export const services = [
  {
    title: "Troubleshooting",
    icon: "MonitorCog",
    description: "Operating system and application problems found and fixed, so people can get back to work.",
  },
  {
    title: "Network setup & care",
    icon: "Network",
    description: "LAN/WAN configuration and day-to-day upkeep that keeps an office online.",
  },
  {
    title: "Asset & license inventory",
    icon: "ClipboardList",
    description: "An accurate record of hardware and software licenses, before an audit asks for one.",
  },
  {
    title: "Data & security",
    icon: "ShieldCheck",
    description: "Routine maintenance that keeps company data intact and systems protected.",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "IT Support" },
  { id: "contact", label: "Contact" },
];

/**
 * Contact form delivery.
 * - Leave formspreeId empty: the form opens the visitor's email app with the message filled in.
 * - Add a Formspree form ID (https://formspree.io, free tier): messages are sent straight to your inbox.
 */
export const contactConfig = {
  formspreeId: "", // TODO (optional): e.g. "xayzabcd"
};
