import React from "react"
import "typeface-roboto"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Entrance from "../components/entrance"
import styles from "./../styles/index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Entrance />
      {/* <Link to="/page-2/">W</Link> */}
    </Layout>
  )
}

export default IndexPage
