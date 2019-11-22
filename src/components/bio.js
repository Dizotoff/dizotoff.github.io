import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "../styles/bio.module.scss"
import mypic from "../../content/assets/profile-pic.jpg"
const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            src
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, linkedin } = data.site.siteMetadata
  return (
    <div className={styles.bio}>
      <img
        alt={"Dmytro Izotov"}
        className={styles.bio__image}
        src={mypic}
      ></img>
      <p></p>
      <p className={styles.bio__description}>
        Written by <strong>{author}</strong> who lives and works in Helsinki
        building cool things. You should add him at{" "}
        <a href={linkedin}>Linkedin</a>
      </p>
    </div>
  )
}

export default Bio
