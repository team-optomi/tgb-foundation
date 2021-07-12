// src/layouts/PostContentSection/PostContentSection.js

import React from "react"
import styled from 'styled-components'

const PostContentSection = ({ bcBackgroundColor, bcPaddingTop, bcPaddingBottom, bcSectionContent }) => {

  return (
    <BlockContent
    style={{
        backgroundColor: `${bcBackgroundColor}`,
        paddingTop: `${bcPaddingTop}px`,
        paddingBottom: `${bcPaddingBottom}px`
    }}
    >
        <div dangerouslySetInnerHTML={{ __html: bcSectionContent}} />
    </BlockContent>
  )
}

const BlockContent = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  > div {
    max-width: 1000px;
    margin: 0 auto;
    p, li {
      font-family: "Antique Roman";
      font-size: 28px;
      line-height: 1.2;
    }
  }
`

export default PostContentSection