export const state = () => ([
  {
    name: "Mars Journey",
    slug: "mars-journey",
    date: 'December 2017',
    role: "Lead developer",
    team: [
      { name: "Alexandre Godde", role: "Project manager & designer" },
      { name: "Julien Bretecher", role: "Leader designer" },
      { name: "Justine Di Meo", role: "UX developer" },
      { name: "Amélie Grosjean", role: "UI developer" }
    ],
    tools: [
      'Pug',
      'Stylus',
      'ES6 JavaScript'
    ],
    cover: "mars-journey.png",
    images: [
      { src: '0.png', alt: 'Welcome to Mars Journey' },
      { src: '1.png', alt: 'Take off - boarding' },
      { src: '2.png', alt: 'Take off - spaceship' },
      { src: '3.png', alt: 'On board - view' },
      { src: '4.png', alt: 'On board - inside' },
      { src: '5.png', alt: 'The journey - instructions' },
      { src: '6.png', alt: 'The journey - food' },
      { src: '7.png', alt: 'The risks - accident' },
      { src: '8.png', alt: 'The risks - gravity  ' },
      { src: '9.png', alt: 'Welcome to Mars - landing' },
      { src: '10.png', alt: 'Welcome to Mars - colonizartion' }
    ],
    description: [
      "I worked on this project with comrades for a 5-days front-end development project. Our team decided to expalin how a space trip works on this website.",
      "Alexandre led the project. He decided which data are displayed and he deisgned alongside Julien about UX and UI.",
      "As the lead developer, I mainly integrated the sketch and I built a mini staircase-like slider framework. Also, I managed the front-end boilerplate.",
      "Justine managed UX by playing 3D musics and sounds with Howler.js library and Amélie added UI experience with parallax."
    ],
    code: "https://github.com/KamenSentai/Mars_Journey",
    demo: "https://mars-journey.alain-caovantruong.fr/",
    mentions: [],
    released: true
  },
  {
    name: "Pokedex",
    slug: "pokedex",
    date: 'June 2018',
    role: "Full-stack developer",
    team: [],
    tools: [
      'PHP Slim',
      'Stylus',
      'ES6 JavaScript'
    ],
    cover: "pokedex.png",
    images: [
      { src: '0.png', alt: 'Pokedex' },
      { src: '1.png', alt: 'Map game' },
      { src: '2.png', alt: 'Catch a Pokemon' },
      { src: '3.png', alt: 'Pokemon page' },
      { src: '4.png', alt: 'Unknown Pokemon' },
      { src: '5.png', alt: 'Types of Pokemons' }
    ],
    description: [
      "For a school homework, I had to develop a Pokedex website using Slim Framework.",
      "I decided to build a Pokemon game that the player can catch pokemons and save them in a database. Only caught pokemons are unlocked in the Pokedex.",
      "Unfortunately, I couldn't find a Pokedex database providing the specific data I needed, exept one which only contains pokemons of the first generation.",
      "I intend to improve this project later by refactoring it."
    ],
    code: "https://github.com/KamenSentai/Pokedex",
    demo: "https://pokedex-alaincaovantruong.000webhostapp.com/",
    mentions: [
      { label: 'Credit CSS', url: 'https://codepen.io/Bidji/pen/MYdPwo' }
    ],
    released: true
  },
  {
    name: "Green Tips",
    slug: "green-tips",
    date: 'December 2018',
    role: "Full-stack developer",
    team: [
      { name: "Théodore Morio", role: "Project manager" },
      { name: "Bryan Chung", role: "UX/UI designer" },
      { name: "Loris Marino", role: "Front-end developer" },
      { name: "Florian Durand", role: "Back-end developer" }
    ],
    tools: [
      'WordPress',
      'ACF',
      'SCSS',
      'ES6 JavaScript'
    ],
    cover: "green-tips.png",
    images: [
      { src: '0.png', alt: 'Article' },
      { src: '1.png', alt: 'Home page' },
      { src: '2.png', alt: 'Suggestions' },
      { src: '3.png', alt: 'List of tips' },
      { src: '4.png', alt: 'List of articles' }
    ],
    description: [
      "This is a school project on WordPress about environment. Our team had the idea to develop a blog dedicated to Twitter-like tips and articles about environment.",
      "In particular, they are tweet-like post for quick tips, and standard articles for more specific tips.",
      "Théodore led the project with his ideas about which features we need. He also assisted Bryan in UX/UI design.",
      "Loris intefrated the sketches and Florian is used to develop with WordPress, so we let him all the back-end.",
      "Everytime before Florian retrieves Loris' integration, I had to reorganize with components. Then, I worked between front-end and back-end by fetching data in JavaScript. For instance, one of the features is Ajax loading : I managed, fetched and displayed data with PHP and JavaScript."
    ],
    code: "https://github.com/KamenSentai/Green-Tips",
    demo: "http://green-tips.floriandurand.com/",
    mentions: [],
    released: true
  },
  {
    name: "ChatMEAN",
    slug: "chat-mean",
    date: 'February 2019',
    role: "Back-end developer",
    team: [
      { name: "Jay-min Patel", role: "Project manager & designer" },
      { name: "Assoïe Louvart de Pontlevoye", role: "UX/UI designer" },
      { name: "Olivia Monkam", role: "UX/UI designer" },
      { name: "Loris Marino", role: "Front-end developer" }
    ],
    tools: [
      'MongoDB',
      'AngularJS',
      'Express.js',
      'Node.js'
    ],
    cover: "chat-mean.png",
    images: [
      { src: '0.png', alt: 'Home page' },
      { src: '1.png', alt: 'Sign in' },
      { src: '2.png', alt: 'Sign up' },
      { src: '3.png', alt: 'Dashboard' }
    ],
    description: [
      "In class, we built a Stack MEAN boilerplate, then we had to use it to develop a chat for a school project.",
      "The project was a real opportunity to test all the four technologies of the Stack MEAN ecosystem. The final step remaining is using Socket.io in order to make the chat live.",
      "Jay-min, Assoïe and Olivia basiclly designed all the sketches, Loris integrated them and I built the chat system."
    ],
    code: "https://github.com/KamenSentai/ChatMEAN",
    demo: "",
    mentions: [],
    released: true
  },
  {
    name: "Gaëtan Lefebvre",
    slug: "gaetan-lefebvre",
    date: 'March 2019',
    role: "Front-end developer",
    team: [
      { name: "Gaëtan Lefebvre", role: "UX/UI designer" }
    ],
    tools: [
      'Nuxt.js',
      'GSAP'
    ],
    cover: "gaetan-lefebvre.png",
    images: [
      { src: '0.png', alt: 'Home page - green version' },
      { src: '1.png', alt: 'Home page - blue version' },
      { src: '2.png', alt: 'Home page - red version' },
      { src: '3.png', alt: 'Home page - yellow version' },
      { src: '4.png', alt: 'About page - green version' },
      { src: '5.png', alt: 'About page - blue version' },
      { src: '6.png', alt: 'About page - red version' },
      { src: '7.png', alt: 'About page - yellow version' },
      { src: '8.png', alt: 'Projects page - green version' },
      { src: '9.png', alt: 'Projects page - blue version' },
      { src: '10.png', alt: 'Projects page - red version' },
      { src: '11.png', alt: 'Projects page - yellow version' }
    ],
    description: [
      "Gaëtan Lefebvre is a 4-year student at HÉTIC while I am a 3-third student. He was looking for a developer for his portfolio and I accepted to help him.",
      "I started to use Vue.js, but I quickly migrated to Nuxt.js framework for SEO reasons.",
      "It was a long project, from early January to late March, due to plenty of responsive, animations and SEO contraints.",
      "This portfolio is awarded with a Honorable Mention and a Mobile Excellence by Awwwards."
    ],
    code: "https://github.com/KamenSentai/Gaetan-Lefebvre_portfolio",
    demo: "https://gaetanlefebvre.fr/",
    mentions: [
      { label: 'Awwwards Honorable Mention', url: 'https://www.awwwards.com/sites/gaetan-lefebvre-portfolio' },
      { label: 'Awwwards Mobile Excellence', url: 'https://www.awwwards.com/sites/gaetan-lefebvre-portfolio/mobile-excellence-report' }
    ],
    released: true
  },
  {
    name: "Scaneat",
    slug: "scaneat",
    date: 'April 2019',
    role: "Full-stack developer",
    team: [
      { name: "Marie-Athénaïs Dussordet", role: "Full-stack developer" },
      { name: "Arthur Girault", role: "	UX/UI design & marketing" },
      { name: "Yoel Hanoufa", role: "	UX/UI design & marketing" },
      { name: "Téo Migdal", role: "	UX/UI design & marketing" }
    ],
    tools: [
      'Swift',
      'Firebase'
    ],
    cover: "scaneat.png",
    images: [
      { src: '0.png', alt: 'Sign in, sign up & selection' },
      { src: '1.png', alt: 'History, scanner & suggestions' }
    ],
    description: [
      "At school, we had a 5-days project about mobile : design a mobile application, develop it and build its business model. There was one rule : use Open Food Fact API.",
      "One member of our team has food constraints in their way of life. So, we imagined an application which helps people to easily detect which product is appropriate for a user by scanning it.",
      "By the end of the five days, we succeeded with the sign up and sign in feature, we managed how to scan a product code, we can fetch data from the API and interact with the databse."
    ],
    code: "https://github.com/KamenSentai/ScanEat",
    demo: "",
    mentions: [],
    released: true
  }
  // {
  //   name: "Offit",
  //   slug: "offit",
  //   date: 'June 2019',
  //   role: "Front-end developer",
  //   team: [
  //     { name: "Paul Agostini", role: "Project manager & UX/UI designer" },
  //     { name: "Victor Block", role: "UX/UI designer & graphic designer" },
  //     { name: "Yoan Halm", role: "UX/UI designer & marketing" },
  //     { name: "Charles Bassignot", role: "Back-end developer" }
  //   ],
  //   tools: [
  //     'WordPress',
  //     'ACF',
  //     'Timber',
  //     'Vue.js'
  //   ],
  //   cover: "offit.png",
  //   images: [],
  //   description [
  //     "Our third year at HÉTIC is lead by a 6-month project with a client. Victor Mertz is the founder of Offit, a BtoB coaching service, and he needs us to develop a website for his company and a webapp to manage his clients' activities."
  //   ],
  //   code: "",
  //   demo: "",
  //   mentions: [],
  //   released: false
  // }
])
