import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeaderLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "TGB_Foundation_Logo.png" }) {
        childImageSharp {
          gatsbyImageData (
              width: 140
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const mainLogo = getImage(data.placeholderImage.childImageSharp.gatsbyImageData)

  return <GatsbyImage image={mainLogo} alt="The Todd G. Black Foundation Logo" />
}

export default HeaderLogo