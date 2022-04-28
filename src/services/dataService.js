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
            "Hi, I am Dmytro and I am a full-stack developer :)",
            "I was born in a Kamianets-Podilskyi, a small town with mild winter and hot summer in the western part of Ukraine.",
            "Currently, I'm residing in Helsinki, Finland and building the future of work in blockchain startup Kleoverse.",
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
              jobTitle: "Full Stack Developer",
              company: "Kleoverse",
              location: "Metaverse",
              period: "JAN 2022 - NOW",
              accomplishments: ["Web3", "Blockchain"],
            },
            {
              jobTitle: "Full Stack Developer",
              company: "Telia",
              location: "Helsinki, Finland",
              period: "MAY 2019 - JAN 2022",
              accomplishments: ["eCommerce", "Design System", "Microservices"],
            },
          ],
          education: [
            {
              credit: "Bachelor in Software Engineering (100% degree finished)",
              place:
                "Helsinki Metropolia University of Applied Sciences, Finland",
              period: "SEPT 2016 – DEC 2020",
            },
            {
              credit: "Bachelor in Computer Science (Exchange student)",
              place: "Mount Royal University, Canada",
              period: "SEPT 2018 – DEC 2018",
            },
            {
              credit: "Bachelor in Applied Physics (50% degree finished)",
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
              title: "Zero-Zenith",
              description:
                "Hiking route to every single country's highest peak from sea level",
              techStack: "Next.js, Firebase, Typescript",
              url: "https://www.zero-zenith.com/",
            },
            {
              title: "Monqrime",
              description:
                "An ecommerce store assembled for a friend within 12 hours of work. It is fully functioning, go order some stuff!",
              techStack: "Shopify",
              url: "https://monqrime.com/",
            },
            {
              title: "My Portfolio Site",
              description: "Personal website",
              techStack: "React, Gatbsy",
              repo: "https://github.com/dizotoff/",
            },
          ],
        },
      },

      {
        id: "contact",
        name: "Contact.txt",
        icon: "inetcfg_2301",
        content: {
          emailText:
            "If you want to hire me or invite to a project, just email me on ",
          email: "dmytro.eth@proton.me",
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
              link: "https://twitter.com/dmytro_eth",
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
