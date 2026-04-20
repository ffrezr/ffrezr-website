import type { Experience, Project, SkillGroup, Education, Certification, Article, SocialLink } from '../types'

export const profile = {
  name: 'Francisco Frez',
  fullName: 'Francisco Frez Rojas',
  role: 'Data Engineer',
  location: 'Viña del Mar / Valparaíso, Chile',
  tagline: 'Architecting the foundations of data.',
  summary:
    'I turn large volumes of data into measurable business decisions. 4+ years building Data Engineering and Data Science solutions with a focus on reliability, quality, and performance.',
  about:
    'Passionate about teaching and continuous learning. I enjoy sports, reading, healthy living, and video games. Currently training for my first marathon.',
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
]

export const experiences: Experience[] = [
  {
    role: 'Data Engineer',
    company: 'NeuralWorks',
    client: 'LATAM Airlines',
    period: 'Oct 2024 — Present',
    location: 'Santiago, Chile',
    highlights: [
      'Led the Data Engineering team, coordinating priorities and end-to-end delivery; defined quality standards and ran mentoring/onboarding.',
      'Contributed to several million USD in inventory cost savings while maintaining high service levels. Team recognized by LATAM Airlines as the highest value-capture team in 2025.',
      'Led the refactor of BigQuery–application pipelines toward a resilient event-driven architecture (Dataflow + Datastream).',
      'Owned and optimized a BigQuery Data Warehouse with 450+ tables under a medallion architecture.',
    ],
    tags: ['GCP', 'BigQuery', 'Dataflow'],
  },
  {
    role: 'Data Engineer',
    company: 'Banco Falabella',
    period: 'Dec 2023 — Oct 2024',
    location: 'Santiago, Chile',
    highlights: [
      'Reduced the SLA for resolving transactional irregularities from 3 days to 24 hours, processing 5M+ records/day.',
      'Implemented near real-time monitoring with React dashboards and automated alerts, achieving −30% in complaints.',
      'Designed a centralized multi-source Data Warehouse that cut anomaly diagnosis time from 1 day to ~2 hours.',
      'Optimized Python algorithms achieving a 40% performance improvement.',
    ],
    tags: ['Airflow', 'Python', 'Docker'],
  },
  {
    role: 'Data Scientist, CEO & Co-Founder',
    company: 'Electroveja Labs',
    period: 'Aug 2019 — Sep 2023',
    location: 'Valparaíso, Chile',
    highlights: [
      'Led development and deployment of Deep Learning and Computer Vision solutions for data-driven digital products.',
      'Trained, validated, and optimized ML models for production environments.',
    ],
    tags: ['Deep Learning', 'Computer Vision'],
  },
  {
    role: 'Freelance Data Engineer',
    company: 'AC3E – USM',
    period: 'Sep 2022 — Jun 2023',
    location: 'Valparaíso, Chile',
    highlights: [
      'Designed and deployed a microservices architecture on AWS for industrial event forecasting.',
      'Worked with industrial system data for predictive models developed by AC3E and NASA.',
    ],
    tags: ['AWS', 'Docker', 'ML'],
  },
]

export const projects: Project[] = [
  {
    title: 'Kings League — Big Data King',
    role: 'Data Scientist',
    period: 'Aug 2023 — Dec 2023',
    location: 'Remote, Barcelona, Spain',
    description: 'Computer Vision team developing neural network solutions to automate data extraction from match recordings.',
  },
  {
    title: 'Mundo Colegios',
    role: 'Founder',
    period: 'Aug 2022 — Jun 2023',
    location: 'Remote, Santiago, Chile',
    description: 'Led the technology strategy and web platform development; designed the AWS architecture for scalability.',
  },
  {
    title: 'Omniduc',
    role: 'Founder',
    period: 'Sep 2021 — Sep 2022',
    location: 'Valparaíso, Chile',
    description: 'Defined business model and strategic vision; led product development for the education sector.',
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

export const articles: Article[] = [
  {
    slug: 'the-death-of-the-1px-border',
    title: 'The Death of the 1px Border',
    excerpt: 'Why modern digital brutalism and editorial UI patterns are abandoning explicit lines in favor of tonal architecture and ambient space.',
    category: 'Design Theory',
    date: 'Oct 12, 2024',
    readTime: '8 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc9yj3dxaXsnBkjiCZZJR3XoHS2CFA27SxOHXn9TrO8wZqOwT2ykKLmSe63BNo3qZjNhukZKmBOrq85eFeQh4_wZv8bEV75SBy5OYTenBMvvgrJiQGpRyqav3WZH1tWR31P-ICCYn_lvtFfcST8_RK_sx9KxpCjRU610IKkkOuEQ-Q3SSPIuxUqZuffV8nYb6zofLfWq5CBUc5HpI7BQZ6TfVviAkPwR33w0cwAmHaHBo7QFs9ebYOzjoqxYlPfgknp1trbNUrsQ',
    featured: true,
  },
  {
    slug: 'selecting-the-perfect-neo-grotesk',
    title: 'Selecting the Perfect Neo-Grotesk for Digital Displays',
    excerpt: 'Examining the subtle nuances between Manrope, Inter, and Helvetica Neue when applied to high-density interfaces.',
    category: 'Typography',
    date: 'Oct 18, 2024',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlS3SgG78qEKzLi_mpwaBpQkWK_ObxwyKilk5M1AD2o__ei45schxajlX6t16y683N-l1GCGs3BzKvXgc8Vy5b_8J5XIfsltQeB9vnSNmlAVv_i3p9-EZW_hNdog5fiUcZ7AaxyOdAh998tUHL2Qse4jYVDxMtsnq7d9WwiUp7Az09CmJK99szV6835DRVbV_3EEIYPMiEskKrhH9Ntf-FiJPEjMYOJjY-gVUmj_AOX3QkO5NgB5v_qfmmVMeiel1TaJldS1_L7Q',
  },
  {
    slug: 'asymmetrical-grids-in-modern-portfolios',
    title: 'Asymmetrical Grids in Modern Portfolios',
    excerpt: 'Breaking the rigid 12-column structure to create visual tension and direct user focus in case study presentations.',
    category: 'Layout',
    date: 'Oct 12, 2024',
    readTime: '6 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpw_eYM5m4FMQMvZBd_ux3K1uML_T-O-ZzWlrHQlZU-J-7RjlcbCfKXG3C2Hd4MRKuMFOEe5vvqjP0frPO08INKbipg0-YJEbbT9yh0MHAMNK9jIGIgGvxkU40-YtEXYzNBifyQUcoMih7QCDKYeODB0gjm0pjJEvCWyqoswXdZh627RGssynTZU8t9w-7-IZafJ64yAqgeHwKHhP5ZUmaHTR6lleHrzasXX7cY7p56SAryA6j8hvpFV0HV9z8kzxcGAKTnHMhIw',
  },
  {
    slug: 'tonal-carving-defining-ui-without-borders',
    title: 'Tonal Carving: Defining UI without Borders',
    excerpt: 'Why we abandoned 1px borders in favor of subtle background color shifts to establish hierarchy.',
    category: 'Design Theory',
    date: 'Oct 05, 2024',
    readTime: '7 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaiAYye4CVGJG0bi-Bh4VlC3r19fSw14ins3dHi3BXI8AZYLu3cZlJBPbZ7FUhGB5_UgitoUS7cUj5_Eing0DbVVirbCx7XtnjtnqkOKinic2okQdndbwHvqTId1CYHRtg3BstZFu5CuLtse9Io6_-ePu1LEI0aAtgzsp3Jpub5_KOxlH8wigspA6PHzUb9EHOWM1KyIf4jlHRNkpDOfTQnIE0w4k9P8qXzBbYtY04lL-avuBpQsMxZRguXyUuLEj-7qDWj8pMhg',
  },
  {
    slug: 'glassmorphism-done-right',
    title: 'Glassmorphism Done Right',
    excerpt: 'How to use translucent overlays to create depth without making the interface look chaotic or dated.',
    category: 'Layout',
    date: 'Sep 15, 2024',
    readTime: '5 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQP3jiLOJ0WMwi5mHHPiLagTfBvpUJUVvJkvxtJS3XUl1HTJAs4TQlZqPZH9UHT1brls4a8qs1mezOvcm3oWMBLJ0SVWGTtoU1XBjCh4YCJtBrDcdP4-2MwFpXXENBj_VGjZJ10rSFK1AFyWEX2lEjP9eoglJj4op8Ixy3UeRZGtj2fhZINqZSJTjdf_VOuiOLkMM2hat0cRrQRvxCqM7-0HhlS3zhKXdvmMN3QcK8vUGzR17Ms-N7C4HEMZXvy9QShAVwFd-9w',
  },
  {
    slug: 'the-monochromatic-canvas',
    title: 'The Monochromatic Canvas',
    excerpt: 'Stripping away color forces a designer to rely entirely on contrast, scale, and typographic hierarchy.',
    category: 'Design Theory',
    date: 'Sep 02, 2024',
    readTime: '4 min read',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_brnL6PGhaZuzugVv5_Y_-CwEgRfXqsO7TxFRC-PzC8iPq4k5hC0bFrNVEyMAkSZZ_vH9VpP37coSlj00lIk4owk7XzmtlnlSM7AwwniVeATI6otaviGTlBk5YY4oNULp2Fcth2UeHceqgVL36WgFtn0k006Z_oItpoFaNM2lXGa3yrqrT-7CIc5LC9tfsHObPsLw0XRGSOpHvzd1I9OMubSFi8N_p43Pw3AVOuy9p6UIgwwBrlvp7CMOvFf4AkaVziTDJrroWA',
  },
]

export const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn30GalPuTtDNcI7BdZu0cn_5MWKnN-PGzPc5xAqwkAlhhLwGgfigQiOE_LXq5aQ_fT9UypbIyF6SvnLxU_l0kRm4XFRhX8ZTs5k8ra5dGPEhx8ESKbU2S37Zri3G1ik54cesm1LrYNDpHjp-q1Imbcf7t-rW5zSj6-VZODyXz7DY7cZS9lBsXua5fl1doT1Pu46H5KsLz2IJ2JstqYq4WK1ObjKjqeGWwOvwO0kskBKvnuLSUZdF06MufD0mEO5Gi-fpfV8L8JQ'

export const projectImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBtJQOFcDWsArRlwxe4zjHVshvmml_PjvxQUv70YiSIhEdxY6oN7RB0gIkNoVGPSNSmPDF67YVgbH4OaTJpiMjWJe3UrQ0rg44aIQAnf--wN2VeD08awFyIA2whmbshaRSo-Mzh2AZB6wsc6RfIpdamcj7bYd3vAhxrUXJyNxH6GZvxFvf6WUMOMX6hbafxBDtOKuH6g5RrsKnza_XbFqSDVqxU-90_ToKRG28dAHMEOK-kGgtIzdJAL97TqitTPRO-hOhd3l2CVQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFO_J-c8RiCvuhPU8lf7QUcM6TS0byVc9Li1vFV3Id-56l4dcTZudJEISdtXmDjKNv0e5w7E8uCbpRSCGLPnmPRdPAx3CA1N5mL2uJkCFQCfIYd0zzAnySlsYZktOS3_N00O8UUFcnbfC20bTt9nmgflakh--gp1owjyh_knExvyO4H9VGRBZL5-ahjp9OO3Ovgv7U_W37fpPxapI72VemO4l4Z4wmJj4jCssRglaGL8wWbQ6g23ohZTKTenJKP7K4rUeD2ZhBlw',
]
