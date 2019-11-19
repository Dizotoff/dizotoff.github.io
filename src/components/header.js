import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./../styles/header.module.scss"

const Header = ({}) => (
  <div className={styles.header}>
    <Link to="/">home</Link>
    <div>
      <Link to="/blog/">blog, </Link>
      <Link to="/about/">about</Link>
    </div>
  </div>
)
export default Header
