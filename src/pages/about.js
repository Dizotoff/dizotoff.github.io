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
    <div className={styles.about}></div>
  </Layout>
)

export default About
