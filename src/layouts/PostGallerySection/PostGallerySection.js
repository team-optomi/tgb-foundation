// src/layouts/PostGallerySection/PostGallerySection.js

import React from "react"
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

const PostGallerySection = ({ bgBackgroundColor, bgPaddingTop, bgPaddingBottom, bgAddTitle, bgTitleColor, bgGalleryTitle, bgGalleryImages }) => {

    const galleryLoop = bgGalleryImages
    const galleryNum = galleryLoop.length

  return (
    <BlockContent
    style={{
        backgroundColor: `${bgBackgroundColor}`,
        paddingTop: `${bgPaddingTop}px`,
        paddingBottom: `${bgPaddingBottom}px`
    }}
    >
        <div class="flex-row">
        {bgAddTitle && (
          <>
            <h2
            style={{
                color: `${bgTitleColor}`
            }}
            >{bgGalleryTitle}</h2>
          </>
        )}
            <div class="image-row">
                {galleryLoop.map(imageSrc => (
                    <GatsbyImage style={{ width: `calc( 100% / ${galleryNum} )` }} image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
            </div>
        </div>
    </BlockContent>
  )
}

const BlockContent = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  .flex-row {
    max-width: 1000px;
    margin: 0 auto;
    h2 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 35px;
    }
    .image-row {
      display: flex;
      justify-content: center;
      align-items: center;
      > div {
        margin: 0 10px;
      }
    }
  }

`

export default PostGallerySection