// src/layouts/PostHeroImage/PostHeroImage.js

import React from "react"
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostHeroImage = ({ builderHeroImage, includeTitle, builderHeroTitle }) => {

    const heroImage = getImage(builderHeroImage.localFile.childImageSharp.gatsbyImageData)

  return (
    <BlockContent>
      <div class="hero-image">
        <GatsbyImage image={heroImage} alt={builderHeroImage.title} />
      </div>
      {includeTitle && (
          <>
            <div class="hero-title">
                <h1>{builderHeroTitle}</h1>
            </div>
          </>
        )}
    </BlockContent>
  )
}

const BlockContent = styled.section`
  position: relative;
  .hero-image {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
    .gatsby-image-wrapper {
      height: 100vh;
    }
  }
  .hero-title {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    h1 {
      color: #fff;
    }
  }
`

export default PostHeroImage