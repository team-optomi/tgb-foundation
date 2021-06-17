import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "TGB_Foundation_Logo.png" }) {
        childImageSharp {
          fixed(width: 140, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fixed} />
}

export default HeaderLogo