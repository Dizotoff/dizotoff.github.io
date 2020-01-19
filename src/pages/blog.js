import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import SEO from "../components/seo"
import Header from "../components/header"
import styles from "../styles/blog.module.scss"
class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <SEO title="All posts" />

        <div className={styles.blog}>
          <Header></Header>
          <div className={styles.blog__content}>
            <Bio />
            <p></p>
            <p></p>
          </div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <p>
                    <Link
                      style={{
                        boxShadow: `none`,
                        color: "#009899",
                        fontWeight: "400",
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </p>
                </header>
              </article>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
