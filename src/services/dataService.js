export default class DataService {
  _data = {
    projectRepo: "https://github.com/dizotoff/",
    react95Repo: "https://github.com/React95/React95",
    items: [
      {
        id: "about",
        name: "About.txt",
        icon: "info_bubble",
        content: {
          paragraphs: [
            "Hi, I am Dmytro :)",
            "I was born in a Kamianets-Podilskyi, a small town with mild winter and hot summer in the western part of Ukraine.",
            "Currently, I'm a developer residing in Helsinki, Finland. The city where I moved to get my bachelor's degree in software engineering. I've been working as a full-time web developer since the midpoint of my studies and successfully finished my degree",
            "During my studies, I had a lucky chance to do an exchange semester at Mount Royal University in Canada.",
            "My main tech stack is React & Node.js. Nowdays, I do full-stack developing for Telia",
            "",
            "Life is good ♥",
          ],
        },
      },
      {
        id: "resume",
        name: "Resume.txt",
        icon: "notepad_2",
        content: {
          resumeLink: "/",
          workExperience: [
            {
              jobTitle: "Web Developer",
              company: "Telia",
              location: "Helsinki, Finland",
              period: "MAY 2019 - NOW",
              accomplishments: ["eCommerce microservices", "Design System"],
            },
          ],
          education: [
            {
              credit: "Bachelor in Software Engineering",
              place:
                "Helsinki Metropolia University of Applied Sciences, Finland",
              period: "SEPT 2016 – DEC 2020",
            },
            {
              credit: "Bachelor in Computer Science (Exchange Student)",
              place: "Mount Royal University, Canada",
              period: "SEPT 2018 – DEC 2018",
            },
            {
              credit: "Bachelor in Applied Physics",
              place: "Taras Shevchenko National University of Kyiv, Ukraine",
              period: "SEPT 2014 – AUG 2016",
            },
          ],
        },
      },
      {
        id: "projects",
        name: "Projects.txt",
        icon: "flying_through_space_100",
        content: {
          projects: [
            {
              title: "WarmChat",
              description:
                "Mobile friendly web chat where users can exchange using only warm messages",
              techStack: "React, Node, Express",
              url: "https://pacific-castle-71280.herokuapp.com",
            },
            {
              title: "Photo-Beats",
              description: "Real-time audio reactive visuals in the browser",
              techStack: "React, Gatsby",
              repo: "https://github.com/Dizotoff/Photo-Beats",
              url: "https://photo-beats.com/",
            },
  {
              title: "Monqrime",
              description: "An ecommerce store assembled for a friend within 12 hours of work. It is fully functioning, go order some stuff!",
              techStack: "Shopify",
              url: "https://monqrime.com/",
            },
            {
              title: "My Portfolio Site",
              description: "Personal website",
              techStack: "React,",
              repo: "https://github.com/dizotoff/",
            },
          ],
        },
      },
      {
        id: "skills",
        name: "Skills.txt",
        icon: "progman_11",
        content: {
          hard: [
            {
              name: "Node.js",
              progress: 100,
            },
            {
              name: "React",
              progress: 100,
            },
            {
              name: "Scrum",
              progress: 100,
            },
            {
              name: "Javascript",
              progress: 90,
            },
            {
              name: "GraphQL",
              progress: 80,
            },
            {
              name: "Jest",
              progress: 80,
            },
             
          ],
          soft: "Teamwork, Leadership, Analytical thinking",
        },
      },
      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText:
            "If you want to hire me or invite to a project, just email me on ",
          email: "izotov.dima@gmail.com",
          socialText: "Or you can reach me out through social media:",
          social: [
            {
              name: "FaLinkedin",
              link: "https://www.linkedin.com/in/dizotoff/",
            },
            {
              name: "FaGithub",
              link: "https://github.com/Dizotoff",
            },

            {
              name: "FaTwitter",
              link: "https://twitter.com/dizotoff",
            },
          ],
        },
      },
    ],
  }

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }))
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id)
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    }
  }
}
