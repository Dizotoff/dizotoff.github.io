/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import styles from "./../styles/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.page_wrapper}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
