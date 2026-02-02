import SignalStrength from '../../assets/SignalStrength.png'
import Liveview from '../../assets/liveview.png'
import Tracking from '../../assets/tracking.gif'
import Cascade from '../../assets/cascade.gif'
import Weather from '../../assets/weather.png'
import Survey from '../../assets/survey.png'
import Document from '../../assets/Document.png'
import NetflixClone from '../../assets/netflixClone.png'

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
