import ReactJsIcon from './../assets/icons/reactjs.svg'
import Html5Icon from './../assets/icons/html5.svg'
import Css3Icon from './../assets/icons/css3.svg'
import JSIcon from './../assets/icons/js2.svg'
import NodeJSIcon from './../assets/icons/nodejs.svg'
import GitIcon from './../assets/icons/git.svg'
import ExpressJSIcon from './../assets/icons/expressjs.svg'
import githubIcon from './../assets/icons/github-brands.svg'
import linkedinIcon from './../assets/icons/linkedin-brands.svg'
import MongoDBIcon from './../assets/icons/mongodb-ar21.svg'

export const LINKS = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'About Me',
        href: '#About',
    },
    {
        name: 'Projects',
        href: '#Projects',
    },
    {
        name: 'Contact',
        href: '#Contact',
    },
];

export const ABOUT_ME = {
    description:
        "I'm a Full Stack developer with a background in administration and accounting. Passionate about technology and videogames that enjoy combining my skills in both worlds to help companies get the best digital product.Currently focused on finding new challenges, keep learning and updating my knowledge.",
    skills: [
        {
            name: 'HTML5',
            icon: Html5Icon,
        },
        {
            name: 'CSS3',
            icon: Css3Icon,
        },
        {
            name: 'JavaScript',
            icon: JSIcon,
        },
        {
            name: 'ReactJS',
            icon: ReactJsIcon,
        },
        {
            name: 'NodeJS',
            icon: NodeJSIcon,
        },
        {
            name: 'ExpressJS',
            icon: ExpressJSIcon,
        },
        {
            name: 'Git',
            icon: GitIcon,
        },
        {
            name: 'MongoDB',
            icon: MongoDBIcon,
        },
    ],
};

export const SOCIAL_LINKS = [

    {
        name: 'Github',
        href: 'https://github.com/HugoHap',
        icon: githubIcon,
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/hugo-alvarez-pazo/',
        icon: linkedinIcon,
    },
];

export const PROJECTS = [
    {
        id: 1,
        title: "All on Board",
        description: "Final bootcamp project developing a Single Page Application for a boardgame community",
        technologies: ['ReactJS', 'CSS', 'NodeJS', 'MongoDB', 'HTML', 'ExpressJS', 'Google Maps', 'Git'],
        image: '',
        site: 'https://all-onboard.netlify.app/',
        area: ['Front-end', 'Back-end']
    },
    {
        id: 2,
        title: 'The Match Point',
        description: 'Website for book and join padel matches',
        technologies: ['ReactJS', 'CSS', 'MongoDB', 'HBS', 'HTML', 'Google Maps', 'JWT', 'Git'],
        image: '',
        site: 'https://the-match-point-app.herokuapp.com/',
        area: ['Front-end', 'Back-end']
    },
    {
        id: 3,
        title: 'PANG',
        description:
            'Redesign of the old arcade game "Pang"',
        technologies: ['Canvas', 'HTML', 'CSS', 'Javascript'],
        image: '',
        site: 'https://clinipet-web.herokuapp.com/',
        area: ['Front-end']
    },
];

// module.exports = { LINKS, ABOUT_ME, SOCIAL_LINKS, PROJECTS };