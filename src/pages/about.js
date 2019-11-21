import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./../styles/about.module.scss"

const About = () => (
  <Layout>
    <SEO title="About" />

    <div className={styles.about}>
      <Header></Header>
      <div className={styles.about__content}>
        <h1>Welcome Internet</h1>
        <p>
          Welcome to my humble online residence where you may come and rest for
          no reason.
        </p>
        <p>
          I'm 22 years old developer currently residing in Helsinki, Finland.
          The city where I moved to get my bachelor's degree in software
          engineering. During my studies, I had a lucky chance to do an exchange
          semester at Mount Royal University in Canada.
        </p>
        <p>
          Currently, I'm working in Telia company where I develop web
          interfaces. I specialize in front end development with an emphasis on
          UX design and accessibility.
        </p>
        <p>
          I was born in Kamianets-Podilskyi city in Ukraine. It's a quite small
          city with mild winter and hot summer. After high school, I had been
          studying physics for two years at Taras Shevchenko National University
          of Kyiv.
        </p>
        <p>In my spare time I like to do different fun things with numbers.</p>
        <p>Life is good.</p>
      </div>
    </div>
  </Layout>
)

export default About
