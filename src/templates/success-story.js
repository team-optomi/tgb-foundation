import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const SuccessStoryTemplate = ({ data: { story } }) => {

  return (
    <Layout>
      <Seo 
      title={story.seo.title} 
      description={story.seo.metaDesc}
      metaImage={story.seo.opengraphImage.localFile.childImageSharp.fluid}
      />
      <MainArticle
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div class="banner-image">
          <GatsbyImage image={story.successStories.sStoryTopBanner.localFile.childImageSharp.gatsbyImageData} alt={story.successStories.sStoryTopBanner.title} />
          <h1>{story.title}</h1>
        </div>
        <div class="main-content">
          <div class="content" dangerouslySetInnerHTML={{ __html: story.successStories.sStoryMainContent}}/>
          <GatsbyImage image={story.successStories.sStoryBackgroundGraphic.localFile.childImageSharp.gatsbyImageData} alt={story.successStories.sStoryBackgroundGraphic.title} />
        </div>
      </MainArticle>
    </Layout>
  )
}

const MainArticle = styled.article`
  .banner-image {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .gatsby-image-wrapper {
      position: absolute;
      height: 100vh;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1;
    }
    h1 {
      font-family: "Stay Bright Script";
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      line-height: 1.2;
      color: #fff;
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      position: relative;
      z-index: 2;
      text-shadow: 1px 1px 1px rgba(0,0,0,.5);
    }
    @media(max-width:550px) {
      h1 {
          font-size: 44px;
      }
    }
  }
  .main-content {
    position: relative;
    background-color: #fff;
    padding: 80px 20px;
    overflow: hidden;
    > .content {
      max-width: 1180px;
      width: 100%;
      margin: 0 auto;
      h2 {
        font-family: "Stay Bright Script";
        width: 100%;
        font-size: 72px;
        font-weight: 100;
        line-height: 1.2;
        color: #012756;
        margin-top: 0;
      }
      p {
          font-family: "Bodoni Classic";
          font-weight: 100;
          font-size: 20px;
          line-height: 1.3;
          a {
            color: #012756;
            font-weight: bold; 
            text-decoration: none;
          }
      }
    }
    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      right: 0;
      max-width: 700px;
      width: 100%;
    }
    @media(max-width:550px) {
      h2 {
          font-size: 44px;
      }
      p {
        font-size: 16px;
      }
      .gatsby-image-wrapper {
        top: auto;
        bottom: 0;
      }
    }
  }
`

export default SuccessStoryTemplate

export const pageQuery = graphql`
  query SuccessStoryId(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    story: wpSuccessStory(id: { eq: $id }) {
      id
      content
      title
      seo {
        title
        metaDesc
        opengraphImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      successStories {
        sStoryMainContent
        sStoryTopBanner {
          localFile {
            childImageSharp {
              gatsbyImageData (
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        sStoryBackgroundGraphic {
          localFile {
            childImageSharp {
              gatsbyImageData (
                width: 1000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
