const state = () => {
  return {
    list: [
      {
        name: "Mars Journey",
        slug: "mars-journey",
        date: new Date('December 2017'),
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
        description: "I worked on this project for a 5-days front-end development project. Our team decided to expalin how a space trip works on this website.",
        code: "https://github.com/KamenSentai/Mars_Journey",
        demo: "https://kamensentai.github.io/Mars_Journey/dist/",
        mentions: [],
        released: true
      },
      {
        name: "Pokedex",
        slug: "pokedex",
        date: new Date('June 2018'),
        role: "Full-stack developer",
        team: [],
        tools: [
          'PHP Slim',
          'Stylus',
          'ES6 JavaScript'
        ],
        description: "For a school homework, I had to develop a Pokedex website using Slim Framework. I decided to build a Pokemon game that the player can catch pokemons and save them in a database. Only caught pokemons are unlocked in the Pokedex.",
        code: "https://github.com/KamenSentai/Pokedex",
        demo: "",
        mentions: [],
        released: true
      },
      {
        name: "Green Tips",
        slug: "green-tips",
        date: new Date('December 2018'),
        role: "JavaScript developer",
        team: [
          { name: "Théodore Morio", role: "Project manager" },
          { name: "Bryan Chung", role: "UX/UI designer" },
          { name: "Loris Marino", role: "Front-end developer" },
          { name: "Florian Durand", role: "Back-end developer" }
        ],
        tools: [
          'WordPress',
          'SCSS',
          'ES6 JavaScript'
        ],
        description: "This is a school project on WordPress about environment. Our team had the idea to develop a blog dedicated to tips for the environment. In particular, they are tweet-like post for quick tips, and standard articles for more specific tips.",
        code: "https://github.com/KamenSentai/Green-Tips",
        demo: "http://green-tips.floriandurand.com/",
        demo: "",
        mentions: [],
        released: true
      },
      {
        name: "ChatMEAN",
        slug: "chat-mean",
        date: new Date('February 2019'),
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
        description: "In class, we learned how to build a Stack MEAN boilerplate, then we had to use it to build a chat. We had the right to use other frameworks, but the project was a real opportunity to test all the four technologies of the Stack MEAN ecosystem.",
        code: "https://github.com/KamenSentai/ChatMEAN",
        mentions: [],
        released: true
      },
      {
        name: "Gaëtan Lefebvre",
        slug: "gaetan-lefebvre",
        date: new Date('March 2019'),
        role: "Front-end developer",
        team: [
          { name: "Gaëtan Lefebvre", role: "UX/UI designer" }
        ],
        tools: [
          'Nuxt.js',
          'GSAP'
        ],
        description: "Gaëtan Lefebvre is a 4-year student at HÉTIC while I am a 3-third student. He was looking for a developer for his portfolio and I accepted to help him. I started to use Vue.js, but I quickly migrated to Nuxt.js framework for SEO reasons. This portfolio is awarded with a Honorable Mention and a Mobile Excellence : https://www.awwwards.com/sites/gaetan-lefebvre-portfolio.",
        code: "https://github.com/KamenSentai/Gaetan-Lefebvre_portfolio",
        demo: "https://gaetanlefebvre.fr/",
        mentions: [
          'Awwwards Honorable Mention',
          'Awwwards Mobile Excellence'
        ],
        released: true
      },
      {
        name: "Scaneat",
        slug: "scaneat",
        date: new Date('April 2019'),
        role: "Full-stack developer",
        team: [
          { name: "Marie-Athénaïs Dussordet", role: "	Full-stack developer" },
          { name: "Arthur Girault", role: "	UX/UI design & marketing" },
          { name: "Yoel Hanoufa", role: "	UX/UI design & marketing" },
          { name: "Téo Migdal", role: "	UX/UI design & marketing" }
        ],
        tools: [
          'Swift',
          'Firebase'
        ],
        description: "At school, we had a 5-days project about mobile : we had to design a mobile application, develop it and build its business model. There was one rule : use Open Food Fact API. One member of our team has food constraints in their way of life. So, we imagined an application which helps people to easily detect which product is appropriate for a user by scanning it.",
        code: "https://github.com/KamenSentai/ScanEat",
        demo: "",
        mentions: [],
        released: true
      },
      {
        name: "Offit",
        slug: "offit",
        date: new Date('June 2019'),
        role: "Front-end developer",
        team: [
          { name: "", role: "" }
        ],
        tools: [
          'WordPress',
          'ACF',
          'Timber',
          'Vue.js'
        ],
        description: "Our third year at HÉTIC is lead by a 6-month project with a client. Victor Mertz is the founder of Offit, a BtoB coaching service, and he needs us to develop a website for his company and a webapp to manage his clients' activities.",
        code: "",
        demo: "",
        mentions: [],
        released: false
      }
    ]
  }
}

export default {
	state
}
