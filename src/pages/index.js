import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./../styles/index.module.scss"
import Typical from "react-typical"
import { Link } from "gatsby"
import Header from "../components/header"
const IndexPage = () => {
  return (
    <div className={styles.index}>
      <Header isDark></Header>
      <div className={styles.index__upperStick}></div>
      <div className={styles.index__banner}>
        <p>
          Welcome to the <strong>Personal Internet Habitat</strong> of Dmytro
          Izotov
        </p>
      </div>
      <div className={styles.index__lowerStick}></div>
    </div>
  )
}

export default IndexPage
