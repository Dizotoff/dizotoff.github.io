import { Link } from "gatsby"
import React from "react"
import styles from "./../styles/header.module.scss"

const Header = ({ isDark }) => {
  let linkStyle = {}

  if (isDark) {
    linkStyle = { color: "#deeaf3", cursor: "pointer", textDecoration: "none" }
  } else {
    linkStyle = { color: "#222222", cursor: "pointer", textDecoration: "none" }
  }

  return (
    <div className={styles.header}>
      <Link style={linkStyle} to="/">
        home
      </Link>
      <div>
        <Link style={linkStyle} to="/blog/">
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
