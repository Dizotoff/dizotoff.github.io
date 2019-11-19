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
      <div className={styles.index__upperStick}></div>
      <div className={styles.index__banner}>
        <Typical
          steps={[
            "",
            200,
            "Welcome to the Personal Internet Quarters of Dmytro Izotov",
            1500,
          ]}
          wrapper="h1"
        />
      </div>
      <div className={styles.index__lowerStick}></div>
    </Layout>
  )
}

export default IndexPage
