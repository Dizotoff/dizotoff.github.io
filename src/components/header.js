import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./../styles/header.module.scss"

const Header = ({ isDark }) => {
  let linkStyle = {}

  if (isDark) {
    linkStyle = { color: "#deeaf3" }
  } else {
    linkStyle = { color: "#c5484d" }
  }

  return (
    <div className={styles.header}>
      <Link style={linkStyle} to="/">
        home
      </Link>
      <div>
        <Link style={linkStyle} to="/">
          blog,{" "}
        </Link>
        <Link style={linkStyle} to="/about/">
          about
        </Link>
      </div>
    </div>
  )
}
export default Header
