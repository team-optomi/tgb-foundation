import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const GivePage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <HeroSection>
                <div class="hero-background">
                    <GatsbyImage image={heroImage} alt={queryContent.featuredImage.node.title} />
                </div>
                <div class="hero-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                    </div>
                </div>
            </HeroSection>
            <GiveSection>
                <h2>Foundation Donations</h2>
                <div>
                    <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe title="Donorbox" src="https://donorbox.org/embed/foundation-donations-5" name="donorbox" allowpaymentrequest="" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style={{maxWidth: '425px', minWidth: '250px', maxHeight: 'none!important'}} ></iframe>
                </div>
            </GiveSection>
        </Layout>
    )

}

const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    .hero-background {
        position: absolute;
        width: 100%;
        height: 100vh;
        .gatsby-image-wrapper {
            width: 100%;
        }
        img {
            width: 100%;
            height: 100vh;
        }
    }
    .hero-content {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        > div {
            max-width: 1620px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            > div {
                max-width: 800px;
                position: relative;
                background-color: rgb(255 255 255 / 80%);
                padding: 20px;
                margin-left: auto;
            }
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #012756;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
            }
            p {
                font-family: "Bodoni Classic";
                color: #012756;
                font-weight: 100;
                font-size: 20px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
            }
            p.hashtag {
                text-align: center;
                font-size: 14px;
                color: #8e8f91;
            }
        }
    }
    @media(max-width:900px) {
        .hero-content {
            > div {
                margin-bottom: 50px;
                > div {
                    margin-right: auto; 
                }
            }
        }
    }
    @media(max-width:550px) {
        .hero-content {
            > div {
                > div {
                    h1 {
                        font-size: 44px;
                    }
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`

const GiveSection = styled.section`
    background-color: #fff;
    padding: 100px 20px 50px;
    h2 {
        font-family: "Stay Bright Script";
        font-weight: 100;
        color: #012756;
        font-size: 100px;
        text-align: center;
        padding: 0 20px;
        margin-top: 0;
        margin-bottom: 35px;
    }
    > div {
        max-width: 425px;
        width: 100%;
        margin: 0 auto;
    }
    @media(max-width:560px) {
        h2 {
          font-size: 64px;
        }
      }
`

export default GivePage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 304}) {
            content
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
        }
    }
`