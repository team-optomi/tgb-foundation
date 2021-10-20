import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import StateSlider from "../components/state-slider"

const CitiesPage = ({ data: { queryContent } }) => {

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
            <StateSlider/>
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
        z-index: 3;
        > div {
            max-width: 1620px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 200px;
                font-weight: 100;
                line-height: 1.2;
                color: #fff;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
                opacity: .5;
            }
            p {
                font-family: "Bodoni Classic";
                color: #fff;
                font-weight: 100;
                font-size: 16px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                text-align: right;
            }
        }
    }
    @media(max-width:1070px) {
        .hero-content {
            > div {
                h1 {
                    font-size: 140px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .hero-content {
            > div {
                h1 {
                    font-size: 72px;
                }
            }
        }
    }
`

export default CitiesPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 517}) {
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