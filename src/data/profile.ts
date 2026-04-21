import type { Experience, SkillGroup, Education, Certification, SocialLink } from '../types'

export const profile = {
  name: 'Francisco Frez',
  fullName: 'Francisco Frez Rojas',
  role: 'Data Engineer',
  location: 'Viña del Mar / Valparaíso, Chile',
  tagline: "Hey! I'm Francisco.",
  heroSummary:
    "Data Engineer at NeuralWorks, building things for LATAM Airlines from Chile. I love learning new things and geeking out over tech. I'm into healthy living, sports, good food, anime, and gaming.",
  aboutTagline: 'Architecting the foundations of data.',
  aboutSummary:
    'I started as an Electronic Engineer, moved into Deep Learning research, co-founded three startups, and landed in Data Engineering — where every past chapter converges. Today I lead teams that turn raw data into systems worth millions in business impact.',
  aboutPersonal:
    'When I\'m not wrangling pipelines, I teach, write on Medium, play guitar on stage, and train for my first marathon. I also launched Astro Cold Brew — because good coffee and good data have the same rule: quality in, quality out.',
  email: 'ffrez.rojas@gmail.com',
  phone: '+56 9 8250 0316',
} as const

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/francisco-frez-rojas' },
  { label: 'GitHub', url: 'https://github.com/ffrezr' },
  { label: 'Medium', url: 'https://medium.com/@franciscofrez' },
]

export const skills: SkillGroup[] = [
  { category: 'Core', items: ['SQL', 'Python', 'GCP'] },
  { category: 'GCP Services', items: ['BigQuery', 'Dataflow', 'Datastream', 'Cloud Run', 'Pub/Sub', 'Dataform', 'Looker Studio'] },
  { category: 'Orchestration', items: ['Composer / Airflow', 'Cloud Workflows'] },
  { category: 'Data Quality', items: ['Dataform Assertions', 'Dataplex'] },
  { category: 'Databases', items: ['PostgreSQL', 'Oracle', 'SQL Server'] },
  { category: 'Machine Learning', items: ['Regressions', 'Tree-Based Models', 'Clustering', 'SVM', 'Neural Networks (DNN, CNN)'] },
  { category: 'Languages', items: ['Spanish (native)', 'English — C2 Proficient (EF SET 73/100)'] },
]

export const experiences: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'NeuralWorks',
    client: 'LATAM Airlines',
    period: 'Oct 2024 — Present',
    location: 'Santiago, Chile',
    highlights: [
      'Lead a Data Engineering team end-to-end: priorities, delivery, quality standards for data, code, and governance, plus mentoring and onboarding.',
      'Contributed to several million USD in inventory cost savings across Brazil, the U.S., and Spain while maintaining high service levels. Team recognized by LATAM Airlines as the highest value-capture team in 2025.',
      'Drove the migration from batch BigQuery pipelines to a resilient event-driven architecture (Dataflow + Datastream), enabling near real-time synchronization.',
      'Own and optimize a BigQuery Data Warehouse with 450+ tables under a medallion architecture.',
      'Designed GCP pipelines (Cloud Run + Dataform) for demand forecasting models and inventory policy engines; publish outputs via Dataflow + Kafka for downstream systems.',
      'Orchestrate end-to-end flows with Cloud Workflows and built interactive dashboards in Looker Studio for monitoring and analytics.',
    ],
    tags: ['BigQuery', 'Dataform', 'Dataflow', 'Datastream', 'Cloud Workflows'],
  },
  {
    role: 'Data Engineer',
    company: 'Banco Falabella',
    period: 'Dec 2023 — Oct 2024',
    location: 'Santiago, Chile',
    highlights: [
      'Cut transactional irregularity SLA from 3 days to 24 hours by designing automated workflows with Airflow, Python, and Docker, processing 5M+ records daily.',
      'Built and maintained robust data pipelines with Airflow, Python, Docker, and GCP, delivering actionable insights to customer service teams across multiple data sources.',
      'Implemented near real-time monitoring with React dashboards and automated alerts — reduced complaints by 30% with a near-zero false positive rate.',
      'Designed a centralized multi-source Data Warehouse that cut anomaly root-cause diagnosis from 1 day to ~2 hours.',
      'Refactored Python algorithms applying software engineering best practices, achieving a 40% performance improvement.',
    ],
    tags: ['Python', 'SQL', 'Airflow'],
  },
  {
    role: 'Data Scientist, CEO & Co-Founder',
    company: 'Electroveja Labs',
    period: 'Aug 2019 — Sep 2023',
    location: 'Valparaíso, Chile',
    highlights: [
      'Co-founded a UTFSM spin-off studio combining art, science, and technology to create interactive digital experiences — from projection mapping installations to AI-powered exhibits and video games.',
      'Designed and deployed Deep Learning and Computer Vision models for interactive installations at Museo Artequín and UTFSM, including an AI system that rendered visitors into Van Gogh\'s painting style in real time.',
      'Built an interactive digital aquarium (PintaPeces) for Chile\'s Festival de la Ciencia with AC3E, later adopted by Instituto de Fomento Pesquero (IFOP) for marine biodiversity education.',
      'Led product strategy and multidisciplinary teams of engineers, artists, and scientists — from client discovery and requirement gathering to production deployment.',
      'Secured investment funds to grow the venture; delivered projects for clients including Museo Artequín, UTFSM, AC3E, and IFOP.',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Projection Mapping', 'Entrepreneurship'],
  },
  {
    role: 'Freelance Data Engineer',
    company: 'AC3E – USM',
    period: 'Sep 2022 — Jun 2023',
    location: 'Valparaíso, Chile',
    highlights: [
      'Designed and deployed a microservices architecture on AWS for industrial event forecasting in collaboration with AC3E and NASA.',
      'Engineered data pipelines for industrial sensor data feeding predictive models developed jointly with NASA researchers.',
      'Built a modular, Docker-containerized architecture enabling scalable development, with full version control and documentation.',
    ],
    tags: ['AWS', 'Docker', 'ML'],
  },
  {
    role: 'R&D Engineer',
    company: 'Federico Santa María Technical University',
    period: 'Mar 2020 — Aug 2021',
    location: 'Valparaíso, Chile',
    highlights: [
      'Designed and built an automated oral presentation evaluation system combining Machine Learning, cameras, and digital signal/image processing.',
      'Developed core components using Azure AI services, Natural Language Processing, and Digital Signal Processing.',
      'Deployed the system in an academic environment, conducting testing and fine-tuning to ensure accuracy and adoption.',
    ],
    tags: ['Azure AI', 'NLP', 'DSP', 'ML'],
  },
  {
    role: 'Mathematics Teaching Assistant',
    company: 'UTFSM',
    period: 'Mar 2015 — Aug 2019',
    location: 'Valparaíso, Chile',
    highlights: [
      'Teaching Assistant for Math I, II, III, IV, and Numerical Analysis: differential, integral, and multivariable calculus, differential equations, linear algebra, and numerical methods.',
    ],
    tags: ['Mathematics', 'Teaching'],
  },
]

export const education: Education[] = [
  { degree: 'Diploma in Data Science', institution: 'Universidad del Desarrollo', date: 'February 2024' },
  { degree: 'University Expert in Startup Management', institution: 'Universitat de València', date: 'February 2022' },
  { degree: 'Electronic Engineering', institution: 'Federico Santa María Technical University', date: 'July 2021' },
]

export const certifications: Certification[] = [
  { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', hours: 240, date: 'Feb 2024' },
  { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', hours: 120, date: 'Jan 2020' },
  { name: 'HCIA — Artificial Intelligence', issuer: 'Huawei' },
  { name: 'EF SET English Certificate', issuer: 'EF SET — C2 Proficient' },
]

export const awards: string[] = [
  'UTFSM Honor Roll',
  'Academic Merit Award',
  'Awarded Investment Funds',
  'Team recognized by LATAM Airlines as the highest value-capture team in 2025',
]

export const heroImage = '/img/me/profile-casual.jpeg'

export const aboutHeroImage = '/img/me/francisco-outdoor-portrait.jpg'

export const latamImage = '/img/me/latam-hangar-visit.jpeg'

export const projectImages = [
  '/img/university/anechoic-chamber.jpg',
  '/img/entrepreneurship/cold-brew/astro-bottle-balcony.jpeg',
]

export const hobbyImages = [
  { src: '/img/hobbies/guitar-live-session.jpeg', alt: 'Playing guitar at a live session', label: 'Music' },
  { src: '/img/hobbies/paragliding-coast.jpeg', alt: 'Paragliding over the Chilean coast', label: 'Paragliding' },
  { src: '/img/hobbies/rollerblade-slalom.jpg', alt: 'Freestyle slalom rollerblading', label: 'Rollerblading' },
  { src: '/img/hobbies/worship-band-stage.jpeg', alt: 'Playing in a worship band on stage', label: 'Worship' },
]

export const universityImages = [
  { src: '/img/university/anechoic-chamber.jpg', alt: 'Working in the anechoic chamber at UTFSM' },
  { src: '/img/university/antenna-detail.jpg', alt: 'Antenna measurement detail' },
  { src: '/img/university/electronics-lab.jpg', alt: 'Electronics laboratory at UTFSM' },
]

export const entrepreneurshipImages = [
  { src: '/img/entrepreneurship/cold-brew/astro-bottle-balcony.jpeg', alt: 'Astro Cold Brew coffee bottle' },
  { src: '/img/entrepreneurship/cold-brew/astro-bottles-lineup.jpeg', alt: 'Astro Cold Brew product lineup' },
]
