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
            "I'm 23 years old developer currently residing in Helsinki, Finland. The city where I moved to get my bachelor's degree in software engineering. Subsequently, I tried founding a couple of startups.",
            "During my studies, I had a lucky chance to do an exchange semester at Mount Royal University in Canada. I have been working as web developer in Telia since I came back.",
            "My main tech stack is React & Node.js",
            "Life is good",
          ],
        },
      },
      {
        id: "resume",
        name: "Resume.txt",
        icon: "notepad_2",
        content: {
          resumeLink: "https://docs.google.com/document/",
          workExperience: [
            {
              jobTitle: "Sample",
              company: "Text",
              location: "Text",
              period: "Sample",
              accomplishments: ["Sample"],
            },
          ],
          education: [
            {
              credit: "Bachelor in Applied Physics",
              place: "Ukraine",
              gpa: "4.0 GPA",
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
              description: "Example text",
              myRole: "OG",
              techStack: "React, Node, Express",
              url: "photo-beats.com",
            },
            {
              title: "Photo-Beats",
              description: "Fun staff",
              techStack: "React",
              repo: "https://github.com/dizotoff/",
            },

            {
              title: "My Portfolio Site",
              description: "Personal website",
              techStack: "React, Netlify",
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
              name: "Javascript",
              progress: 90,
            },
          ],
          soft:
            "Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship",
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
              link: "",
            },
            {
              name: "FaGithub",
              link: "",
            },
            {
              name: "FaInstagram",
              link: "",
            },
            {
              name: "FaTwitter",
              link: "",
            },
            {
              name: "FaMedium",
              link: "",
            },
          ],
        },
      },
    ],
  };

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
