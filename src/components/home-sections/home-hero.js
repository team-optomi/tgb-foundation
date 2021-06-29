import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const HomeHero = () => {

  const data = useStaticQuery(graphql`
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
                      placeholder: BLURRED
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
  `)

  const heroImage = getImage(data.queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
  const heroLogo = getImage(data.queryContent.homePageContent.homeHeroLogo.localFile.childImageSharp.gatsbyImageData)

  return(

    <HeroSection>
      <div 
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-easing="ease"
      class="hero-background">
        <GatsbyImage image={heroImage} alt={data.queryContent.featuredImage.node.title} />
      </div>

      <div class="hero-content">
        <div class="hero-flex">
          <div 
          data-sal="slide-right"
          data-sal-duration="1000"
          data-sal-easing="ease"
          class="hero-left">
            <GatsbyImage image={heroLogo} alt={data.queryContent.homePageContent.homeHeroLogo.title} />
          </div>
          <div 
          data-sal="slide-left"
          data-sal-duration="1000"
          data-sal-easing="ease"
          class="hero-right">
            <div dangerouslySetInnerHTML={{ __html: data.queryContent.homePageContent.homeHeroContent }}/>
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
        transition-delay: 1s;
        .gatsby-image-wrapper {
          max-width: 800px;
          width: 100%;
          margin-left: -200px;
          margin-top: 50px;
        }
      }
      .hero-right {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 50px;
        transition-delay: 1.5s;
        > div {
          text-align: right;
          h1 {
            font-family: "Stay Bright Script";
            color: #fff;
            font-size: 90px;
            font-weight: 100;
            line-height: 1.2;
            transition-duration: .3s;
          }
          p {
            font-family: "Bodoni Classic";
            color: #fff;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 20px;
            line-height: 1.3;
            letter-spacing: 1px;
            transition-duration: .3s;
          }
        }
      }
    }
  }
  @media(max-width:1200px) {
    .hero-content {
      .hero-flex {
        .hero-right {
          > div {
            h1 {
              font-size: 72px;
            }
            p {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  @media(max-width:992px) {
    .hero-content {
      .hero-flex {
        flex-wrap: wrap;
        .hero-left {
          width: 100%;
          .gatsby-image-wrapper {
            margin-top: 20vh;
            margin-left: 0;
            max-width: 400px;
            width: 100%;
          }
        }
        .hero-right {
          width: 100%;
          align-items: flex-start;
          > div {
            text-align: center;
          }
        }
      }
    }
  }
  @media(max-width: 560px) {
    .hero-content {
      .hero-flex {
        .hero-right {
          > div {
            h1 {
              font-size: 44px;
              margin-top: 0;
            }
            p {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`

export default HomeHero