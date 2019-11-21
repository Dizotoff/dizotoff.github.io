import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./../styles/index.module.scss"
import Typical from "react-typical"
import { Link } from "gatsby"
import Header from "../components/header"
import Div100vh from "react-div-100vh"
const IndexPage = () => {
  return (
    <Div100vh>
      <div className={styles.index}>
        <SEO title="Dmytro Izotov" />
        <Header isDark></Header>
        <div className={styles.index__upperStick}></div>
        <div className={styles.index__banner}>
          <p style={{ fontWeight: "300" }}>
            Welcome to the{" "}
            <strong style={{ fontWeight: "600" }}>
              Personal Internet Habitat
            </strong>{" "}
            of Dmytro Izotov
          </p>
        </div>
        <div className={styles.index__lowerStick}></div>
      </div>
    </Div100vh>
  )
}

export default IndexPage
