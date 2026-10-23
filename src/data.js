import acecarImage from './assets/acecar.webp'
import carwashImage from './assets/carwash.webp'
import gymhubImage from './assets/gymhub.webp'
import profileImage from './assets/img.webp'
import portfolioImage from './assets/pf.webp'
import achievementImage from './assets/wit.webp'
import networkingImage from './assets/networking1.webp'
import ccnaImage from './assets/networking2.webp'
import nse1Image from './assets/nse1.webp'
import nse2Image from './assets/nse2.webp'
import htmlIcon from './assets/icons/html5-original.svg'
import cssIcon from './assets/icons/css3-original.svg'
import jsIcon from './assets/icons/javascript-original.svg'
import reactIcon from './assets/icons/react-original.svg'
import nodeIcon from './assets/icons/nodejs-original.svg'
import pythonIcon from './assets/icons/python-original.svg'
import gitIcon from './assets/icons/git-original.svg'

export const fullName = 'Joshua Mansueto'
export const firstName = 'Josh'

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = navItems.map((item) => item.id)

export const socials = {
  github: { label: 'GitHub', href: 'https://github.com/Joshua14-dot' },
  instagram: { label: 'Instagram', href: 'https://www.instagram.com/its_me_josh27' },
  facebook: { label: 'Facebook', href: 'https://www.facebook.com/joshuamansueto276/' },
  whatsapp: { label: 'WhatsApp', href: 'https://wa.me/639952331032' },
  email: { label: 'Email', href: 'mailto:joshuabayuranmansueto@gmail.com' },
}

export const contactDetails = {
  email: 'joshuabayuranmansueto@gmail.com',
  phone: '+63 995 233 1032',
  phoneHref: 'tel:+639952331032',
  location: 'Bo. Obrero, Zone 3, Iloilo City',
}

export const profile = {
  image: profileImage,
  alt: `${fullName} profile photo`,
  greeting: `Hello, I'm ${firstName}`,
  quote: 'Expanding skills and discovering new ways to innovate.',
  phrases: [
    'Information Technology',
    'Web Developer',
    'Front-End Developer',
    'Problem Solver',
    'UI/UX Enthusiast',
  ],
}

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'MySQL',
  'Express.js',
  'REST APIs',
  'Responsive Design',
  'UI/UX',
  'GitHub',
]

export const orbitIcons = [
  { name: 'HTML', src: htmlIcon, radius: 132, duration: 24, start: 0 },
  { name: 'CSS', src: cssIcon, radius: 164, duration: 30, start: 58 },
  { name: 'JavaScript', src: jsIcon, radius: 200, duration: 36, start: 118 },
  { name: 'React', src: reactIcon, radius: 152, duration: 28, start: 176 },
  { name: 'Node.js', src: nodeIcon, radius: 188, duration: 32, start: 232 },
  { name: 'Python', src: pythonIcon, radius: 218, duration: 40, start: 286 },
  { name: 'Git', src: gitIcon, radius: 142, duration: 26, start: 322 },
]

export const projects = [
  {
    title: 'AceCar',
    image: acecarImage,
    description:
      'A complete, high-end e-commerce platform for selling luxury vehicles online. It combines a sophisticated shopping cart and reservation system, secure digital payment and financing tools, and a powerful admin dashboard for inventory, sales, and customer relations.',
    tech: ['Python', 'SQL', 'MySQL', 'Express.js', 'REST APIs'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Joshua14-dot' },
    ],
  },
  {
    title: 'Portfolio Website',
    image: portfolioImage,
    description:
      'An interactive personal portfolio with a responsive layout, subtle motion, and accessible design, built to showcase my projects and certificates.',
    tech: ['React', 'CSS', 'JavaScript', 'Vite'],
    links: [{ label: 'GitHub', href: 'https://github.com/Joshua14-dot/myportfolio' }],
  },
  {
    title: 'Niceday Carwash',
    image: carwashImage,
    description:
      'Nice Day Carwash offers a premium car wash experience in Iloilo City, with professional, eco-friendly services where luxury meets convenience.',
    tech: ['Python', 'SQL', 'MySQL', 'Express.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/Joshua14-dot/NiceDay-Carwash-' }],
  },
  {
    title: 'E-Commerce Gym Hub',
    image: gymhubImage,
    description:
      "GymHub is more than a gym—it's a complete fitness e-commerce hub where members can purchase memberships, book training sessions, and sign up for specialized services online.",
    tech: ['Python', 'SQL', 'MySQL', 'Express.js'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Joshua14-dot' },
    ],
  },
]

export const certificates = [
  {
    issuer: 'Certificate',
    title: 'Certificate of Achievement',
    description: 'A certificate recognizing my achievement and continued growth in technology.',
    image: achievementImage,
    alt: 'Certificate of achievement',
  },
  {
    issuer: 'Simplilearn SkillUp',
    title: 'Introduction to Computer Networking',
    description: 'Certificate of completion, earned October 1, 2026.',
    image: networkingImage,
    alt: 'Simplilearn SkillUp certificate for Introduction to Computer Networking',
  },
  {
    issuer: 'Simplilearn SkillUp',
    title: 'Learn CCNA 200-301 Network Fundamentals Online',
    description: 'Certificate of completion, earned October 5, 2026.',
    image: ccnaImage,
    alt: 'Simplilearn SkillUp certificate for Learn CCNA 200-301 Network Fundamentals Online',
  },
  {
    issuer: 'Fortinet NSE',
    title: 'NSE 1 — Information Security Awareness',
    description:
      'Fortinet Network Security Expert certification covering information security awareness.',
    image: nse1Image,
    alt: 'Fortinet NSE 1 certificate for Information Security Awareness',
  },
  {
    issuer: 'Fortinet NSE',
    title: 'NSE 2 — The Evolution of Cybersecurity',
    description:
      'Fortinet Network Security Expert certification covering the evolution of cybersecurity.',
    image: nse2Image,
    alt: 'Fortinet NSE 2 certificate for The Evolution of Cybersecurity',
  },
]
