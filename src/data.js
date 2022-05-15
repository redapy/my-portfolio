import calculator from './img/projects-images/calculator.PNG'
import clock from './img/projects-images/clock.PNG'
import drum from './img/projects-images/drum-machine.PNG'
import manager from './img/projects-images/manager.PNG'
import teaching from './img/projects-images/teaching-portofolio.PNG'
import quotes from './img/projects-images/quote-machine.PNG'
import movie from './img/projects-images/movie.PNG'
import recipe from './img/projects-images/recipe-app.png'
import money from './img/projects-images/finance-tracker.png'

const data = [
    {
        title: 'Project Manager',
        link: "https://lelouch-manager.web.app/",
        stacks: ['ReactJS', 'React-router', 'redux', 'tailwindcss', 'firebase'],
        image: manager,
        delay: 700,
        id: 1
    },
    {
        title: 'Finance Tracker',
        link: "https://mymoney-ce84b.web.app/signup",
        stacks: ['ReactJS', 'React-router', 'CSS', 'firebase', 'React Testing Library', 'Cypress'],
        image: money,
        delay: 750,
        id: 2
    },
    {
        title: 'Recipe App',
        link: "https://recipes-app-de234.web.app/",
        stacks: ['ReactJS', 'React-router', 'CSS', 'firebase', 'Jest', 'React Testing Library'],
        image: recipe,
        delay: 800,
        id: 3
    }, 
    {
        title: 'teaching portfolio',
        link: "https://teching-portfolio.netlify.app/",
        stacks: ['ReactJS','React-router', 'framer motion', 'Styled-component', 'CSS'],
        image: teaching,
        delay: 850,
        id:4
    },    

    {
        title: 'movies app',
        link: "https://rmovies-search.netlify.app/",
        stacks: ['ReactJS', 'Styled-component', 'CSS', 'TMDB API'],
        image: movie,
        delay: 900,
        id:5
    },    
    {
        title: 'quote machine',
        link: "https://redapy.github.io/random-quote-machine/",
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: quotes,
        delay: 950,
        id:6
    },
    {
        title: '25+5Clock',
        link: 'https://redapy.github.io/5-25clock/',
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: clock,
        delay: 1000,
        id:7
    },
    {
        title: 'drum machine',
        link: 'https://redapy.github.io/drum-machine/',
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: drum,
        delay: 1050,
        id:8
    },
    {
        title: 'dcalculator',
        link: 'https://redapy.github.io/calculator/',
        stacks: ['ReactJS', 'Styled-component', 'CSS'],
        image: calculator,
        delay: 1100,
        id:9
    },
]

export default data