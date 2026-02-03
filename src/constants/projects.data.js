import SignalStrength from '../assets/SignalStrength.png'
import Liveview from '../assets/liveview.png'
import Tracking from '../assets/tracking.gif'
import Cascade from '../assets/cascade.gif'
import Weather from '../assets/weather.png'
import Survey from '../assets/survey.png'
import Document from '../assets/Document.png'
import NetflixClone from '../assets/netflixClone.png'

import SOTIIcon from '../assets/SOTI.png'
import TDIcon from '../assets/TD.png'

import Ontario from '../assets/ontario.png'

export const projects = [
  {
    id: 1,
    title: 'Netflix Clone',
    frames: [NetflixClone],
    desc: 'A cinematic browser experience designed to mimic Netflix, built with React and AstraDB for seamless streaming.',
    stack: ['React', 'GraphQL', 'AstraDB'],
    github: 'https://github.com/yourrepo',
  },

  {
    id: 3,
    title: 'Free Weather App',
    frames: [Weather],
    desc: 'Used openweather API to get your current location weather information.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    codepen: 'https://codepen.io/bob17/full/JpgXRr',
  },
  {
    id: 4,
    title: 'Survey Form',
    frames: [Survey],
    desc: 'Used HTML, CSS, and JavaScript to build a responsive survey form with validation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    codepen: 'https://codepen.io/bob17/full/ymeeZe',
  },
  {
    id: 5,
    title: 'Documentation',
    frames: [Document],
    desc: '',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: null,
    codepen: null,
  },
  {
    id: 6,
    title: 'XSight',
    frames: [SignalStrength, Liveview, Tracking, Cascade],
    desc: 'Developed data driven dashboards and visualizations for read time device visibility',
    stack: ['Angular', 'Redux', 'C#', 'SQL'],
    github: null,
    codepen: null,
  },
]

export const Experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'SOTI Inc.',
    year: '2022 - Present',
    icon: SOTIIcon,
    desc: [
      'Implemented real-time tracking dashboards using Angular and C#, integrating WebSockets to sync live device locations between mobile and web browser with minimal latency',
      'Developed geospatial solutions using Azure Maps leveraging Snap to road, Reverse Geocoding RESTful APIs and map layers for data visualization and actionable insights',
      'Optimized front‑end performance via Angular upgrades, lazy‑loaded components, caching strategies, and reduced backend calls resulting in faster load speeds and improved scalability',
      'Led technical initiaitves including code owner reviews,  promote best practices and intern mentorship to enhance code quality during release cycles',
    ],
  },
  {
    id: 2,
    title: 'Salesforce Analyst',
    company: 'TD Bank',
    year: 'May 2021 - Dec 2021',
    icon: TDIcon,
    desc: [
      'Developed data models and ETL processes in Salesforce to improve data integrity and support enterprise reporting and analytics',
      'Conducted testing in Sandbox environments (UAT & BAT) to ensure Salesforce features aligned with business needs',
    ],
  },
  {
    id: 3,
    title: 'Application Developer',
    company: 'Ontario Public Service',
    year: 'Sept 2020 - Dec 2020',
    icon: Ontario,
    desc: [
      'Developed an internal document repository using Gatsby, React, and Node.js, enabling faster onboarding and improved internal workflows',
      'Implemented error logging in the Node.js application, increasing monitoring capabilities, and issue resolution speed',
    ],
  },
]
