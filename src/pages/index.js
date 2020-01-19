import React from "react"
import SEO from "../components/seo"
import styles from "./../styles/index.module.scss"
import Header from "../components/header"
const IndexPage = () => {
  return (
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
  )
}

export default IndexPage
