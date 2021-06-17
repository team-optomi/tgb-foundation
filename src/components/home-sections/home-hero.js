import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const HomeHero = ({ data: { queryContent } }) => {

  const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
  const heroLogo = getImage(queryContent.homePageContent.homeHeroLogo.localFile.childImageSharp.gatsbyImageData)

  return(

    <HeroSection>
      <div class="hero-background">
        <GatsbyImage image={heroImage} alt={queryContent.featuredImage.node.title} />
      </div>

      <div class="hero-content">
        <div class="hero-flex">
          <div class="hero-left">
            <GatsbyImage image={heroLogo} alt={queryContent.homePageContent.homeHeroLogo.title} />
          </div>
          <div class="hero-right">
            <div dangerouslySetInnerHTML={{ __html: queryContent.homePageContent.homeHeroContent }}/>
          </div>
        </div>
      </div>
    </HeroSection>
      
  )

}

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #002855;
      opacity: .8;
      z-index: 2;
    }
    .gatsby-image-wrapper {
      height: 100vh;
      width: 100%;
    }
  }
  .hero-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 3;
    .hero-flex {
      max-width: 1820px;
      width: 100%;
      height: 100vh;
      padding: 0 20px;
      margin: 0 auto;
      display: flex;
      .hero-left {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
          max-width: 800px;
          width: 100%;
        }
      }
      .hero-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 150px;
        > div {
          text-align: right;
          h1 {
            font-family: "Stay Bright Script";
            color: #fff;
            font-size: 90px;
            font-weight: 100;
            line-height: 1.2;
          }
          p {
            font-family: "Bodoni Classic";
            color: #fff;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 28px;
            line-height: 1.3;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
          queryContent: wpPage(databaseId: {eq: 7}) {
            homePageContent {
              homeHeroContent
              homeHeroLogo {
                title
                localFile {
                  childImageSharp {
                      gatsbyImageData (
                          width: 800
                          placeholder: TRACED_SVG
                          formats: [AUTO, WEBP, AVIF]
                      )
                  }
                }
              }
            }
            featuredImage {
              node {
                title
                localFile {
                  childImageSharp {
                      gatsbyImageData (
                          width: 2400
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                      )
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <HomeHero data={data} {...props} />}
    />
  );