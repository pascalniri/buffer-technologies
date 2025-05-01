import {
  Building2,
  Mail,
  MapPin,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";

const navlinks = [
  {
    label: "Home",
    link: "#home",
  },
  {
    label: "Who We Are",
    link: "#about",
  },
  {
    label: "Services",
    link: "#services",
  },
  {
    label: "Our Clients",
    link: "#clients",
  },
  {
    label: "Contact Us",
    link: "#contact",
  },
];

const aboutContents = [
  {
    icon: "/missionIcon.svg",
    number: "01",
    heading: "Our Mission",
    desc: "To provide high quality IT in small Business and Enterprise Solutions to all categories of our clients while bringing new global technologies to our region particularly Rwanda",
  },
  {
    icon: "/visionIcon.svg",
    number: "02",
    heading: "Our Vision",
    desc: "Our vision is to be the regional market leader and trusted service provider to customers concerned with the safe, confidential and efficient storage and management of records and information as well as to bring new global technologies that will increase efficiency and hence generate productivity at doorstep of our client base.",
  },
  {
    icon: "/philoIcon.svg",
    number: "03",
    heading: "Our Philosophy",
    desc: "Buffer Technologies Ltd is a values-based company, which works within a common belief system. This belief system allows Buffer Technologies Ltd to work inter and intra dependently with very little supervision and no micro-management, enabling true breakthrough results. With a common belief system and total commitment, the impossible becomes possible. We believe in analogy “One who dares goes furthest”. At the foundation of the Buffer Technologies Ltd belief system is a very clear set of guiding principles, we call them our Pillars of Strength.",
  },
];

const services = [
  {
    image: "1.webp",
    title: "Electronic Document/ Digital Archiving Services",
    desc: "To provide high quality IT in small Business and Enterprise Solutions to all categories of our clients while bringing new global technologies to our region particularly Rwanda.",
  },
  {
    image: "2.jpg",
    title: "Software Applications Development",
    desc: "Custom-built software solutions tailored to your business needs—whether web-based, desktop, or mobile.",
  },
  {
    image: "3.webp",
    title: " IT & Systems Consultancy",
    desc: "We analyze your challenges and deliver practical, tech-based solutions to improve your workflows, systems, and infrastructure.",
  },
  {
    image: "4.jpg",
    title: "Television Programming and Broadcasting Activities",
    desc: "We develop and manage broadcast-ready TV content—bringing technical precision to media platforms.",
  },
  {
    image: "5.jpg",
    title: "Wired Telecommunications Activities",
    desc: "We offer wired communication setups and enhancements that support voice and data transmission at enterprise level.",
  },
  {
    image: "6.png",
    title: "Computer Consultancy and Computer Facilities Management Activities",
    desc: "From on-site management to cloud-based monitoring, we keep your IT environment optimized, secure, and responsive.",
  },
  {
    image: "7.jpg",
    title: "Data Processing, Hosting & Analytics",
    desc: "We provide secure data hosting, processing, and insightful analytics to help you make data-driven decisions.",
  },
  {
    image: "8.webp",
    title: "Web Portals",
    desc: "We build high-performance, user-friendly websites and portals that serve as effective platforms for your services and communications.",
  },
  {
    image: "9.png",
    title: "Network Infrastructure Design and Implementation",
    desc: "From structured cabling to full network deployment, we ensure your IT environment is fast, secure, and scalable.",
  },
  {
    image: "10.jpg",
    title: "PACS (Picture Archiving and Communication System) Software",
    desc: "Digitally storing and sharing medical images like X-rays and MRIs for faster access and diagnosis.",
  },
  {
    image: "11.jpeg",
    title: "HIMS (Hospital Information Management System) ",
    desc: "Managing hospital operations including patients, billing, pharmacy, and staff in one integrated system.",
  },
  {
    image: "12.jpg",
    title: "LIMS (Laboratory Information Management System)",
    desc: "Automating lab processes like sample tracking, testing, and reporting for better accuracy and speed.",
  },
  {
    image: "13.jpg",
    title: "Blood Bank Management Software",
    desc: "Tracking donations, tests, and stock to ensure safe and efficient blood management.",
  },
  {
    image: "14.avif",
    title: "Pharmacy Management Software ",
    desc: "Managing prescriptions, inventory, and billing to streamline pharmacy operations.",
  },
  {
    image: "15.webp",
    title: "OPD / Clinic Software",
    desc: "Simplifying outpatient services like appointments, billing, and patient records.",
  },
];

const clients = [
  {
    image: "/mod.svg",
    name: "Ministry of Defence",
  },
  {
    image: "/dog.svg",
    name: "Gasabo District",
  },
  {
    image: "/hsc.svg",
    name: "Highsec Company LTD",
  },
  {
    image: "/edcl.svg",
    name: "EDCL REG Rwanda",
  },
];

const partners = [
  {
    image: "/itaz.jpeg",
    name: "ITAZ Technologies Ltd",
    link: 'itaz.com'
  },
  {
    image: "/birlamedisoft.png",
    name: "Birlamedisoft PVT Ltd",
    link: 'https://www.birlamedisoft.com/'
  },

];

const members = [
  {
    image: "/eraste.jpg",
    name: "Eraste Gasarasi",
    role: "MD (Managing Director) of Buffer Technologies Ltd",
    call: "+250788538982",
    email: "eraste.gasarasi@buffertechnologies.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=eraste.gasarasi@buffertechnologies.com",
  },
  {
    image: "/Emmanuel.jpg",
    name: "Emmanuel Rwagasana",
    role: "COO (Chief Operations Officer) of Buffer Technologies Ltd",
    call: "+250788554478",
    email: "emmanuel.rwagasana@buffertechnologies.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=emmanuel.rwagasana@buffertechnologies.com",
  },
];

const socialMedia = [
  {
    icon: <FaLinkedinIn  />,
    link: "https://linkedin.com",
    name: "LinkedIn",
  },
  {
    icon: <RiInstagramFill  />,
    link: "https://instagram.com",
    name: "Instagram",
  },
  {
    icon: <RiFacebookFill  />,
    link: "https://facebook.com",
    name: "Facebook",
  },
];

const locations = [
  {
    icon: <MapPin strokeWidth={1.5} />,
    label: "Kigali, Rwanda",
    link: "https://www.google.com/maps/place/Kigali/@-1.9297626,29.9624314,55705m/data=!3m2!1e3!4b1!4m6!3m5!1s0x19dca4258ed8e797:0xf32b36a5411d0bc8!8m2!3d-1.9440727!4d30.0618851!16zL20vMGZuaGY?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
  {
    icon: <Mail strokeWidth={1.5} />,
    label: "info@buffertechnologies.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@buffertechnologies.com",
  },
  {
    icon: <Building2 strokeWidth={1.5} />,
    label: "Kigali Height 6th Floor.",
    link: "https://www.google.com/maps/place/Kigali+Heights/@-1.952861,30.0901059,870m/data=!3m2!1e3!4b1!4m6!3m5!1s0x19dca6f3a6d7d373:0xda6c2b3cabfec246!8m2!3d-1.952861!4d30.0926808!16s%2Fg%2F11bz0162mc?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
];

export {
  navlinks,
  aboutContents,
  services,
  clients,
  partners,
  members,
  socialMedia,
  locations,
};
