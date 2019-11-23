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
        <article>
          <center>
            <h1>Welcome Internet</h1>
          </center>
          <p>
            Welcome to my humble online residence where you may come and rest
            for as long as you pleased.
          </p>
          <p>
            I'm 22 years old developer currently residing in Helsinki, Finland.
            The city where I moved to get my bachelor's degree in software
            engineering. Subsequently, I tried founding a couple of startups.
          </p>
          <p>
            During my studies, I had a lucky chance to do an exchange semester
            at Mount Royal University in Canada. I have been working as web
            developer in Telia since I came back.
          </p>
          <p>
            I was born in Kamianets-Podilskyi city in Ukraine. It's a quite
            small city with mild winter and hot summer. After high school, I had
            been studying physics at Taras Shevchenko National University of
            Kyiv.
          </p>
          <p>Parties and calculus are my best skills.</p>
          <p>Life is good.</p>
          <p>❤️</p>
        </article>
      </div>
    </div>
  </Layout>
)

export default About
