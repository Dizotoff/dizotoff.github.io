import React from "react"
import "typeface-roboto"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import styles from "./../styles/index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/page-2/">
        <div title="ENTER THE VOID">ENTER THE VOID</div>
      </Link>
    </Layout>
  )
}

export default IndexPage
