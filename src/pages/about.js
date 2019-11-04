import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./../styles/about.module.scss"
import Typical from "react-typical"
import Typography from "@material-ui/core/Typography"
const About = () => (
  <Layout>
    <SEO title="About" />

    <div className={styles.about__banner}>
      <div className={styles.about__banner__text}>
        <Typical
          steps={[
            "Hello?",
            2000,
            "Hello?",
            3000,
            "Are you there? ",
            3000,
            "",
            200,
          ]}
          wrapper="p"
        />
      </div>
    </div>
  </Layout>
)

export default About
