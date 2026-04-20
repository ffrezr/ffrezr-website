import type { Experience, Project, SkillGroup, Education, Certification, Article, SocialLink } from '../types'

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
    role: 'Data Scientist & Founder',
    company: 'Electroveja Labs',
    period: 'Aug 2019 — Sep 2023',
    location: 'Valparaíso, Chile',
    highlights: [
      'Co-founded a startup delivering Deep Learning and Computer Vision solutions — from client discovery to production deployment.',
      'Trained, validated, and optimized ML models, deploying them into scalable production applications for real-world data processing.',
      'Led product strategy with multidisciplinary teams, translating business problems into technical roadmaps.',
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Entrepreneurship'],
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

export const projects: Project[] = [
  {
    slug: 'kings-league-big-data-king',
    title: 'Kings League — Big Data King',
    role: 'Data Scientist',
    period: 'Aug 2023 — Dec 2023',
    location: 'Remote, Barcelona, Spain',
    description: 'Computer Vision team developing neural network solutions to automate data extraction from match recordings.',
    tags: ['Deep Learning', 'Computer Vision', 'Python'],
    type: 'project',
  },
  {
    slug: 'mundo-colegios',
    title: 'Mundo Colegios',
    role: 'Founder',
    period: 'Aug 2022 — Jun 2023',
    location: 'Remote, Santiago, Chile',
    description: 'EdTech platform helping families find the right school for their kids. Led the technology strategy and web platform development; designed the AWS architecture for scalability.',
    tags: ['AWS', 'EdTech', 'Entrepreneurship'],
    type: 'venture',
  },
  {
    slug: 'omniduc',
    title: 'Omniduc',
    role: 'Founder',
    period: 'Sep 2021 — Sep 2022',
    location: 'Valparaíso, Chile',
    description: 'Defined business model and strategic vision; led product development for the education sector.',
    tags: ['Product Strategy', 'Education', 'Entrepreneurship'],
    type: 'venture',
  },
  {
    slug: 'electroveja-labs',
    title: 'Electroveja Labs',
    role: 'Co-Founder & Data Scientist',
    period: 'Aug 2019 — Sep 2023',
    location: 'Valparaíso, Chile',
    description: 'Co-founded a startup delivering Deep Learning and Computer Vision solutions — from client discovery to production deployment. Led product strategy with multidisciplinary teams.',
    tags: ['Deep Learning', 'Computer Vision', 'ML', 'Entrepreneurship'],
    type: 'venture',
  },
  {
    slug: 'astro-cold-brew',
    title: 'Astro Cold Brew',
    role: 'Founder',
    period: '2022 — Present',
    location: 'Valparaíso, Chile',
    description: 'Specialty cold brew coffee crafted with 100% Arabica beans from El Salvador and Colombia. A passion project blending entrepreneurship with my love for great coffee.',
    image: '/img/entrepreneurship/cold-brew/astro-bottle-balcony.jpeg',
    tags: ['Coffee', 'Entrepreneurship', 'Product'],
    type: 'side-project',
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

export const articles: Article[] = [
  {
    slug: 'why-medallion-architecture-works',
    title: 'Why Medallion Architecture Works at Scale',
    excerpt: 'How structuring a 450+ table BigQuery warehouse into bronze, silver, and gold layers transformed our data reliability at LATAM Airlines.',
    category: 'Data Architecture',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc9yj3dxaXsnBkjiCZZJR3XoHS2CFA27SxOHXn9TrO8wZqOwT2ykKLmSe63BNo3qZjNhukZKmBOrq85eFeQh4_wZv8bEV75SBy5OYTenBMvvgrJiQGpRyqav3WZH1tWR31P-ICCYn_lvtFfcST8_RK_sx9KxpCjRU610IKkkOuEQ-Q3SSPIuxUqZuffV8nYb6zofLfWq5CBUc5HpI7BQZ6TfVviAkPwR33w0cwAmHaHBo7QFs9ebYOzjoqxYlPfgknp1trbNUrsQ',
    featured: true,
  },
  {
    slug: 'from-batch-to-event-driven',
    title: 'From Batch to Event-Driven: A Migration Story',
    excerpt: 'Lessons learned migrating critical BigQuery pipelines to Dataflow + Datastream for near real-time synchronization.',
    category: 'Data Engineering',
    date: 'Feb 20, 2025',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlS3SgG78qEKzLi_mpwaBpQkWK_ObxwyKilk5M1AD2o__ei45schxajlX6t16y683N-l1GCGs3BzKvXgc8Vy5b_8J5XIfsltQeB9vnSNmlAVv_i3p9-EZW_hNdog5fiUcZ7AaxyOdAh998tUHL2Qse4jYVDxMtsnq7d9WwiUp7Az09CmJK99szV6835DRVbV_3EEIYPMiEskKrhH9Ntf-FiJPEjMYOJjY-gVUmj_AOX3QkO5NgB5v_qfmmVMeiel1TaJldS1_L7Q',
  },
  {
    slug: 'monitoring-5m-transactions-daily',
    title: 'Monitoring 5M Transactions Daily with Near-Zero False Positives',
    excerpt: 'How we built an anomaly detection system at Banco Falabella that cut complaints by 30% without crying wolf.',
    category: 'Data Quality',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpw_eYM5m4FMQMvZBd_ux3K1uML_T-O-ZzWlrHQlZU-J-7RjlcbCfKXG3C2Hd4MRKuMFOEe5vvqjP0frPO08INKbipg0-YJEbbT9yh0MHAMNK9jIGIgGvxkU40-YtEXYzNBifyQUcoMih7QCDKYeODB0gjm0pjJEvCWyqoswXdZh627RGssynTZU8t9w-7-IZafJ64yAqgeHwKHhP5ZUmaHTR6lleHrzasXX7cY7p56SAryA6j8hvpFV0HV9z8kzxcGAKTnHMhIw',
  },
  {
    slug: 'data-engineering-for-ml-forecasting',
    title: 'The Data Engineer\'s Role in ML Forecasting Pipelines',
    excerpt: 'Bridging the gap between data scientists and production systems — designing pipelines that serve forecasting models reliably.',
    category: 'MLOps',
    date: 'Dec 05, 2024',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaiAYye4CVGJG0bi-Bh4VlC3r19fSw14ins3dHi3BXI8AZYLu3cZlJBPbZ7FUhGB5_UgitoUS7cUj5_Eing0DbVVirbCx7XtnjtnqkOKinic2okQdndbwHvqTId1CYHRtg3BstZFu5CuLtse9Io6_-ePu1LEI0aAtgzsp3Jpub5_KOxlH8wigspA6PHzUb9EHOWM1KyIf4jlHRNkpDOfTQnIE0w4k9P8qXzBbYtY04lL-avuBpQsMxZRguXyUuLEj-7qDWj8pMhg',
  },
  {
    slug: 'industrial-iot-pipelines-nasa',
    title: 'Building Industrial IoT Pipelines with NASA',
    excerpt: 'What I learned engineering data infrastructure for predictive maintenance models on industrial sensor data.',
    category: 'IoT & Industry',
    date: 'Nov 18, 2024',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQP3jiLOJ0WMwi5mHHPiLagTfBvpUJUVvJkvxtJS3XUl1HTJAs4TQlZqPZH9UHT1brls4a8qs1mezOvcm3oWMBLJ0SVWGTtoU1XBjCh4YCJtBrDcdP4-2MwFpXXENBj_VGjZJ10rSFK1AFyWEX2lEjP9eoglJj4op8Ixy3UeRZGtj2fhZINqZSJTjdf_VOuiOLkMM2hat0cRrQRvxCqM7-0HhlS3zhKXdvmMN3QcK8vUGzR17Ms-N7C4HEMZXvy9QShAVwFd-9w',
  },
  {
    slug: 'electronics-engineer-to-data-engineer',
    title: 'From Electronics Engineer to Data Engineer',
    excerpt: 'How a background in signal processing, circuits, and math shaped the way I think about data systems.',
    category: 'Career',
    date: 'Oct 25, 2024',
    readTime: '4 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_brnL6PGhaZuzugVv5_Y_-CwEgRfXqsO7TxFRC-PzC8iPq4k5hC0bFrNVEyMAkSZZ_vH9VpP37coSlj00lIk4owk7XzmtlnlSM7AwwniVeATI6otaviGTlBk5YY4oNULp2Fcth2UeHceqgVL36WgFtn0k006Z_oItpoFaNM2lXGa3yrqrT-7CIc5LC9tfsHObPsLw0XRGSOpHvzd1I9OMubSFi8N_p43Pw3AVOuy9p6UIgwwBrlvp7CMOvFf4AkaVziTDJrroWA',
  },
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
