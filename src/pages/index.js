import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./../styles/index.module.scss"
import Typical from "react-typical"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.index}>
        <div className={styles.index__upperStick}></div>
        <div className={styles.index__banner}>
          <p>
            Welcome to the <strong>Personal Internet Quarters</strong> of Dmytro
            Izotov
          </p>
        </div>
        <div className={styles.index__lowerStick}></div>
      </div>
    </Layout>
  )
}

export default IndexPage
