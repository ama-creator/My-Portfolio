import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  wordleClone,
  gpt3,
  gericht,
  i4,
  i5,
  i6,
  i7,
  i8,
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'CRYPTO',
    desc:
      'Landing Page with amazing design',
    stack: 'REACT JS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/crypto',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/crypto/',
    },
    imgUrl: wordleClone,
  },
  {
    id: 2,
    name: 'GSAP Website',
    desc: 'A Responsive website design with great UI Effect',
    stack: 'JAVASCRIPT GSAP',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/gsap',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/gsap/',
    },
    imgUrl: gericht,
  },
  {
    id: 3,
    name: 'Website with Parallax',
    desc: 'This is an amazing project with cool parallax effect',
    stack: 'HTML CSS JS',
    imgUrl: gpt3,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/parallax',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/parallax/',
    },
  },
  {
    id: 4,
    name: 'Portfolio Website',
    desc: 'Website for developer',
    stack: 'HTML SCSS JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/portfolio-free',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/portfolio-free/',
    },
    imgUrl: i4,
  },

  {
    id: 5,
    name: 'Ecommerce project',
    desc: 'Website for buyers',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/e-commerce',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/e-commerce/',
    },
    imgUrl: i5,
  },
  {
    id: 6,
    name: 'Huddle Landing Page',
    desc: 'A simple landing page website',
    stack: 'HTML, JS, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/website',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/website/',
    },
    imgUrl: i6,
  },
  {
    id: 4,
    name: 'Website',
    desc: 'A complicated project that enhanced my skills a lot',
    stack: 'HTML, SCSS, JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://ellofi.live/index.php',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ellofi.live/index.php',
    },
    imgUrl: i7,
  },
  {
    id: 2,
    name: 'Restaurant Website',
    desc: 'A Responsive restaurant website design with great UI Effect',
    stack: 'React JS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/ama-creator/YOURSocial',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://ama-creator.github.io/YOURSocial/',
    },
    imgUrl: i8,
  },
]
