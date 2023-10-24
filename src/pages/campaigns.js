import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const CampaignsPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    const campaignsMap = queryContent.campaignsContent.campaignMap

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
                        <div>
                            <h1>{queryContent.title}</h1>
                            <p>{queryContent.campaignsContent.campaignPageSubtitle}</p>
                        </div>
                    </div>
                </div>
            </HeroSection>
            <ContentSection>
                <div class="main-row">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.campaignsContent.campaignPageContent }} />
                    <div class="campaign-map">
                        {campaignsMap.map(campaign => (
                            <div class="campaign">
                                <Link to={campaign.campaignLink}>
                                    <GatsbyImage image={campaign.campaignMainIcon.localFile.childImageSharp.gatsbyImageData} alt={campaign.campaignMainIcon.title} />
                                    <GatsbyImage image={campaign.campaignHoverIcon.localFile.childImageSharp.gatsbyImageData} alt={campaign.campaignHoverIcon.title} />
                                    <h3>{campaign.campaignTitle}</h3>
                                    <h3>{campaign.campaignRolloverTitle}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>       
                </div>
            </ContentSection>
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

const ContentSection = styled.section`
    background-color: #fff;
    padding: 20px;
    .main-row {
        h2 {
            font-family: "Bodoni Classic";
            font-size: 120px;
            line-height: 1.2;
            color: rgb(1, 39, 86);
            text-align: center;
            span.fancy {
                font-family: "Stay Bright Script";
                font-weight: 100;
                line-height: 1.2;
            }
        }
        .campaign-map {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .campaign {
                width: 33.33%;
                display: flex;
                justify-content: center;
                align-items: center;
                a {
                    max-width: 400px;
                    width: 100%;
                    height: 400px;
                    display: block;
                    position: relative;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    > div.gatsby-image-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transition-duration: .3s;
                        &:first-child {
                            opacity: 0.5;
                        }
                        &:nth-child(2) {
                            opacity: 0;
                        }
                    }
                    h3 {
                        font-family: "Stay Bright Script";
                        font-size: 60px;
                        font-weight: 100;
                        line-height: 1.2;
                        text-align: center;
                        transition-duration: .3s;
                        opacity: .5;
                        margin: 0;
                        position: absolute;
                        z-index: 1;
                        &:nth-last-child(2) {
                            opacity: 0.5;
                        }
                        &:last-child {
                            opacity: 0;
                        }
                    }
                }
                &:hover {
                    a {
                        > div.gatsby-image-wrapper {
                            &:first-child {
                                opacity: 0;
                            }
                            &:nth-child(2) {
                                opacity: 1;
                            }
                        }
                        h3 {
                            &:nth-last-child(2) {
                                opacity: 0;
                            }
                            &:last-child {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }
    @media(max-width:1000px) {
        .main-row {
            h2 {
                font-size: 80px;
            }
            .campaign-map {
                flex-wrap: wrap;
                .campaign {
                    width: 50%;
                }
            }
        }
    }
    @media(max-width:767px) {
        .main-row {
            h2 {
                font-size: 50px;
            }
            .campaign-map {
                flex-wrap: wrap;
                .campaign {
                    width: 100%;
                    a {
                        > div.gatsby-image-wrapper {
                            &:first-child {
                                opacity: 0;
                            }
                            &:nth-child(2) {
                                opacity: 1;
                            }
                        }
                        h3 {
                            opacity: 1;
                        }
                    }
                    &:first-child {
                        order: 5;
                    }
                }
            }
        }
    }
`

export default CampaignsPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 1144}) {
            title
            content
            featuredImage {
                node {
                    title
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
            }
            campaignsContent {
                campaignPageSubtitle
                campaignPageContent
                campaignMap {
                    campaignMainIcon {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 600
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    campaignHoverIcon {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 600
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    campaignTitle
                    campaignRolloverTitle
                    campaignLink
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