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
            "Hi, I am Dmytro and I am a Full-Stack developer",
            "I have a passion for building things and learning new technologies. I am a big fan of React and Typescript.",
            "I love finding efficient solutions to complex problems and turning abstract concepts into tangible, functional products. Coding is not just my job, but my passion, and I particularly enjoy working with React and TypeScript.",
            "Outside the realm of coding, I spend time exploring new tech trends and innovations.",
            "I have also developed a keen interest in product development. I love the entire process, from conceptualizing an idea to bringing it to life.",
            "My latest project, CareerPen, is a testament to my passion for technology and problem-solving. It's designed to simplify the job application process by generating personalized cover letters at a click.",
            "I'm excited to continue my journey, learning new things, tackling challenges, and making a difference in the tech world!",
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
              location: "Remote",
              period: "JAN 2022 - Present",
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
              title: "CareerPen",
              description:
                "An AI-powered web application and browser extension for automating and personalizing cover letter creation using LinkedIn profile data.",
              techStack: "Next.js, Firebase, Typescript",
              url: "https://www.zero-zenith.com/",
            },
            {
              title: "Zero-Zenith",
              description:
                "A project that documents the routes to the highest point of every county from the closest sea point. Users can submit their routes or existing route completion time",
              techStack: "Next.js, Firebase, Typescript",
              url: "https://www.zero-zenith.com/",
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
          email: "dizoto@proton.me",
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
