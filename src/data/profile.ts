import type { Experience, SkillGroup, Education, Certification, SocialLink } from '../types'

export const profile = {
  name: 'Francisco Frez',
  fullName: 'Francisco Frez Rojas',
  role: 'Data Engineer',
  location: 'Viña del Mar / Valparaíso, Chile',
  tagline: "Hey! I'm Francisco.",
  heroSummary:
    "Data Engineer at NeuralWorks, building things for LATAM Airlines from Chile. I love learning new things and geeking out over tech. I'm into healthy living, sports, good food, anime, and gaming.",
  aboutTagline: 'I followed my curiosity, and it led me to data.',
  aboutSummary:
    "I studied Electronic Engineering because I liked understanding how things work. Then I got into deep learning, co-founded a few startups (some worked, some didn't), and eventually found my way into the data world. Every weird detour ended up being useful — I just didn't know it at the time.",
  aboutPersonal:
    "When I close the Mac, I like to move — running, hitting the gym, whatever gets me away from a screen. I watch too much anime, game more than I'd admit in an interview, and I'm always chasing good food. I care about staying active, eating well, and finding excuses to try new things. The marathon? I don't even love running — I just set myself the goal and now I have to finish it.",
  email: 'ffrez.rojas@gmail.com',
  phone: '+56 9 8250 0316',
} as const

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/francisco-frez-rojas' },
  { label: 'GitHub', url: 'https://github.com/ffrezr' },
  { label: 'Medium', url: 'https://medium.com/@franciscofrez' },
]

export const skills: SkillGroup[] = [
  { category: 'Core', items: ['SQL', 'Python', 'Google Cloud Platform'] },
  { category: 'Data Analytics', items: ['BigQuery', 'Dataflow', 'Dataform', 'Cloud Run', 'Datastream'] },
  { category: 'Cloud & Infrastructure', items: ['Pub/Sub', 'Airflow', 'Cloud Workflows', 'Terraform', 'Docker'] },
]

export const experiences: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'NeuralWorks',
    client: 'LATAM Airlines',
    period: 'October 2024 — Present',
    location: 'Chile',
    highlights: [
      'Lead a Data Engineering team end-to-end: priorities, delivery, quality standards for data, code, and governance, plus mentoring and onboarding.',
      'Contributed to several million USD in inventory cost savings across Brazil, the U.S., and Spain while maintaining high service levels. Team recognized by LATAM Airlines as the highest value-capture team in 2025.',
      'Drove the migration from batch BigQuery pipelines to a resilient event-driven architecture (Dataflow + Datastream), enabling near real-time synchronization.',
      'Own and optimize a BigQuery Data Warehouse with 450+ tables under a medallion architecture.',
      'Designed GCP pipelines (Cloud Run + Dataform) for demand forecasting models and inventory policy engines; publish outputs via Dataflow + Kafka for downstream systems.',
      'Orchestrate end-to-end flows with Cloud Workflows and built interactive dashboards in Looker Studio for monitoring and analytics.',
    ],
    tags: ['BigQuery', 'Dataflow', 'Datastream'],
  },
  {
    role: 'Data Engineer',
    company: 'Banco Falabella',
    period: 'December 2023 — October 2024',
    location: 'Chile',
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
    role: 'Data Scientist, Founder',
    company: 'Electroveja Labs',
    period: 'August 2019 — September 2023',
    location: 'Chile',
    highlights: [
      'Co-founded a UTFSM spin-off studio combining art, science, and technology to create interactive digital experiences — from projection mapping installations to AI-powered exhibits and video games.',
      'Designed and deployed Deep Learning and Computer Vision models for interactive installations at Museo Artequín and UTFSM, including an AI system that rendered visitors into Van Gogh\'s painting style in real time.',
      'Built an interactive digital aquarium (PintaPeces) for Chile\'s Festival de la Ciencia with AC3E, later adopted by Instituto de Fomento Pesquero (IFOP) for marine biodiversity education.',
      'Led product strategy and multidisciplinary teams of engineers, artists, and scientists — from client discovery and requirement gathering to production deployment.',
      'Secured investment funds to grow the venture; delivered projects for clients including Museo Artequín, UTFSM, AC3E, and IFOP.',
    ],
    tags: ['Computer Vision', 'Entrepreneurship'],
  },
  {
    role: 'Freelance Data Engineer',
    company: 'AC3E',
    period: 'September 2022 — June 2023',
    location: 'Chile',
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
    period: 'March 2020 — August 2021',
    location: 'Chile',
    highlights: [
      'Designed and built an automated oral presentation evaluation system combining Machine Learning, cameras, and digital signal/image processing.',
      'Developed core components using Azure AI services, Natural Language Processing, and Digital Signal Processing.',
      'Deployed the system in an academic environment, conducting testing and fine-tuning to ensure accuracy and adoption.',
    ],
    tags: ['Azure AI', 'NLP', 'DSP', 'ML'],
  },
  {
    role: 'Mathematics Teaching Assistant',
    company: 'Federico Santa María Technical University',
    period: 'March 2015 — August 2019',
    location: 'Chile',
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
  { name: 'EF SET English Certificate 73/100', issuer: 'EF SET — C2 Proficient' },
]

export const awards: string[] = [
  'Team recognized by LATAM Airlines as the highest value-capture team in 2025',
  'Awarded Investment Funds',
  'UTFSM Honor Roll',
  'Academic Merit Award',
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
