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
            "I am a Full Stack Developer with over 5 years of experience. With a B.Eng in Computer Software Engineering, I have developed and scaled full-stack applications, integrated AI and blockchain technologies, and optimized system performance at both startups and enterprises like Kleoverse and Telia.",
            "In my free time, I engage in side projects, creating micro startups that enhance my technical and entrepreneurial skills. My expertise includes TypeScript, Node.js, React, Next.js, and much more, enabling me to deliver innovative and efficient software solutions."
          ],
        },
      },
      {
        id: "resume",
        name: "Resume.txt",
        icon: "notepad_2",
        content: {
          resumeLink: "http://dmytroizotov.com",
          workExperience: [
            {
              jobTitle: "Full Stack Developer",
              company: "Kleoverse",
              location: "Helsinki, Finland",
              period: "Aug 2023 – Present",
              accomplishments: [
                "Developed a full-stack AI-powered application.",
                "Integrated OpenAI API for natural language processing to interpret user requests and process data.",
                "Implemented event orchestration for efficient asynchronous workflow management.",
                "Optimized API calls with queueing and throttling to maintain high system performance."
              ],
            },
            {
              jobTitle: "Full Stack Developer",
              company: "Kleoverse",
              location: "Remote",
              period: "Jan 2022 – Aug 2023",
              accomplishments: [
                "Developed a full-stack blockchain application.",
                "Scaled the project from 1,000 to 100,000 registered users.",
                "Integrated cloud applications with blockchain.",
                "Developed project CI/CD pipelines, implemented authentication, database architecture (PostgreSQL), logging, analytics, API layer, and various third-party integrations."
              ],
            },
            {
              jobTitle: "Full Stack Developer",
              company: "Telia",
              location: "Helsinki, Finland",
              period: "Jun 2020 – Jan 2022",
              accomplishments: [
                "Designed, developed, and tested software enhancements with other engineers and QA.",
                "Participated in developing a new API server, which sped up product catalog loading.",
                "Participated in the implementation of a subscription model product."
              ],
            },
            {
              jobTitle: "Frontend Developer",
              company: "Telia",
              location: "Helsinki, Finland",
              period: "Nov 2019 – Jun 2020",
              accomplishments: [
                "Implemented the project from concept to production version.",
                "Developed a design system components usage analytics system.",
                "Ensured smooth implementation of content that was cross-platform/browser compatible and responsive on mobile devices."
              ],
            },
            {
              jobTitle: "Web Developer Intern",
              company: "Telia",
              location: "Helsinki, Finland",
              period: "May 2019 – Nov 2019",
              accomplishments: [
                "Led and shipped the Design System package tree-shaking feature.",
                "Helped move the library to TypeScript.",
                "Learned and implemented many web accessibility features (a11y)."
              ],
            }
          ],
          education: [
            {
              credit: "B.Eng in Computer Software Engineering",
              place: "Metropolia University of Applied Sciences",
              period: "Aug 2016 - Feb 2021",
              location: "Helsinki, Finland"
            },
            {
              credit: "B.Sc in Computer Science",
              place: "Mount Royal University",
              period: "Aug 2018 - Dec 2018",
              location: "Calgary, Canada"
            },
            {
              credit: "B.Sc in Applied Physics",
              place: "Taras Shevchenko National University of Kyiv",
              period: "Aug 2014 - Jun 2016",
              location: "Kyiv, Ukraine"
            }
          ],
        },
      },
      {
        id: "projects",
        name: "Sideprojects.txt",
        icon: "flying_through_space_100",
        content: {
          projects: [
            {
              title: "CareerPen",
              description:
                "An AI-powered web application and browser extension for automating and personalizing cover letter creation using LinkedIn profile data.",
              techStack: "Next.js, Supabase, Typescript",
              url: "https://careerpen.org/",
            },
            {
              title: "Zero-Zenith",
              description:
                "A project that documents the routes to the highest point of every county from the closest sea point. Users can submit their routes or existing route completion time",
              techStack: "Next.js, Supabase, Typescript",
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
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
