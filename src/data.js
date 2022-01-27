import calculator from './img/projects-images/calculator.PNG'
import clock from './img/projects-images/clock.PNG'
import drum from './img/projects-images/drum-machine.PNG'
import manager from './img/projects-images/manager.PNG'
import teaching from './img/projects-images/teaching-portofolio.PNG'
import quotes from './img/projects-images/quote-machine.PNG'

const data = [
    {
        title: 'Project Manager',
        link: "https://lelouch-manager.web.app/",
        stacks: ['ReactJS', 'React-router', 'redux', 'tailwindcss', 'firebase'],
        image: manager,
        id: 1
    },    
    {
        title: 'teaching portfolio',
        link: "https://teching-portfolio.netlify.app/",
        stacks: ['ReactJS','React-router', 'framer motion', 'Styled-component', 'CSS'],
        image: teaching,
        id:2
    },    
    {
        title: 'quote machine',
        link: "https://redapy.github.io/random-quote-machine/",
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: quotes,
        id:3
    },
    {
        title: 'calculator',
        link: "https://redapy.github.io/calculator/",
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: calculator,
        id:4
    },
    {
        title: '25+5Clock',
        link: 'https://redapy.github.io/5-25clock/',
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: clock,
        id:5
    },
    {
        title: 'drum machine',
        link: 'https://redapy.github.io/drum-machine/',
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: drum,
        id:6
    },
]

export default data