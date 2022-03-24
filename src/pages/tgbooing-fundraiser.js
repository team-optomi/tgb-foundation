import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const TGBooingPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.tgbooingContent.booingBanner.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.tgbooingContent.booingFirstSectionImage.localFile.childImageSharp.gatsbyImageData)
    const infoGraphic = getImage(queryContent.tgbooingContent.booingInfoGraphic.localFile.childImageSharp.gatsbyImageData)

    const partnerMap = queryContent.tgbooingContent.booingPartners

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.tgbooingContent.booingBanner.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <h1 TGBooing Fundraiser />
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <GatsbyImage image={sectionOneImage} alt={queryContent.tgbooingContent.booingFirstSectionImage.title} />
                    <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.tgbooingContent.booingFirstSectionContent }} />
                </div>
            </SectionOne>
            <SectionTwo>
                <GatsbyImage image={infoGraphic} alt={queryContent.tgbooingContent.booingInfoGraphic.title} />
            </SectionTwo>
            <SectionFive>
                <div class="flex-row">
                    <h2>Hospital Partners Include:</h2>
                    <div class="partner-map">
                        {partnerMap.map(partner => (
                            <div class="partner">
                                <GatsbyImage image={partner.booingPartnerImage.localFile.childImageSharp.gatsbyImageData} alt={partner.booingPartnerImage.title} />
                                <h3>{partner.booingPartnerLocation}</h3>
                            </div>
                        ))}
                    </div>    
                </div>
            </SectionFive>
        </Layout>
    );

}

const BannerSection = styled.section`
    position: relative;
    padding: 80px;
    padding-top: 120px;
    .banner-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
            height: 100%;
        }
    }
    .banner-content {
        position: relative;
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        z-index: 1;
        h1 {
            font-family: "Stay Bright Script";
            color: rgb(255, 255, 255);
            font-size: 90px;
            font-weight: 100;
            line-height: 1.2;
            transition-duration: 0.3s;
            text-align: right;
        }
    }
    @media(max-width:1000px) {
        .banner-content {
            h1 {
                font-size: 60px;
                text-align: center;
            }
        }
    }
    @media(max-width:767px) {
        padding: 120px 20px;
        h1 {
            font-size: 44px;
            text-align: center;
        }
    }
`

const SectionOne = styled.section`
    background-color: #fff;
    .flex-row {
        max-width: 1240px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        margin-top: -100px;
        display: flex;
        justify-content: center;
        align-items: center;
        .gatsby-image-wrapper {
            max-width: 40%;
            width: 100%;
            margin-right: 10%;
        }
        .content {
            position: relative;
            max-width: 50%;
            width: 100%;
            margin-top: 150px;
            p {
                font-family: "Bodoni Classic";
                font-size: 20px;
                line-height: 1.2;
                margin-bottom: 25px;
                &:last-child {
                    text-align: center;
                }
            }
            a {
                font-family: "Bodoni Classic";
                color: rgb(0, 0, 0);
                background-color: rgb(0, 255, 0);
                display: inline-block;
                width: 250px;
                padding: 15px 35px 10px;
                text-align: center;
                text-decoration: none;
                font-size: 20px;
                line-height: 0.5;
                text-transform: uppercase;
                margin: 10px;
                span.small {
                    font-size: 9px;
                }
            }
            &:before {
                content: "";
                position: absolute;
                top: 59px;
                left: -175px;
                width: 165px;
                height: 2px;
                background-color: rgb(0, 127, 61);
            }
        }
    }
    @media(max-width:1000px) {
        .flex-row {
            flex-wrap: wrap;
            margin-top: 0px;
            padding-top: 20px;
            .gatsby-image-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
            .content {
                max-width: 700px;
                width: 100%;
                margin-top: 50px;
                margin-left: auto;
                margin-right: auto;
                &:before {
                    display: none;
                }
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .gatsby-image-wrapper {
                max-width: 400px;
                width: 100%;
            }
        }
    }
`

const SectionTwo = styled.section`
    background-color: #fff;
    padding: 35px 0px;
    .flex-row {
        max-width: 1240px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-col {
            width: 45%;
            border-right: 3px solid rgb(0, 127, 61);
            padding-right: 50px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            p {
                font-family: "Bodoni Classic";
                color: rgb(0, 127, 61);
                font-size: 40px;
                text-align: center;
                line-height: 1;
                span {
                    font-family: "Stay Bright Script";
                }
                &:nth-child(2) {
                    margin-left: 20px;
                    margin-right: 20px;
                }
            }
        }
        .right-col {
            width: 55%;
            p {
                font-family: "Bodoni Classic";
                font-size: 20px;
                font-weight: bold;
                width: 100%;
                text-align: center;
                span {
                    font-size: 24px;
                    color: rgb(0, 127, 61);
                }
            }
            ul {
                font-family: "Bodoni Classic";
                font-size: 18px;
                font-weight: bold;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                li {
                    margin-left: 30px;
                }
            }
        }
    }
    @media(max-width:1000px) {
        .flex-row {
            flex-wrap: wrap;
            .left-col {
                padding-right: 0;
                width: 100%;
                border-right: none;
            }
            .right-col {
                width: 100%;
            }
        }
    }
`

const SectionFive = styled.section`
    background-color: #fff;
    .flex-row {
        max-width: 1040px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        h2 {
            font-family: "Bodoni Classic";
            text-align: center;
            margin-top: 0px;
            color: rgb(0, 127, 61);
            font-size: 32px;
            text-transform: uppercase;
        }
        .partner-map {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            .partner {
                width: 25%;
                text-align: center;
                padding: 0 25px;
                display: flex;
                flex-direction: column;
                h3 {
                    font-family: "Bodoni Classic";
                    text-align: center;
                    margin-top: 10px;
                    color: rgb(0, 127, 61);
                    font-size: 20px;
                    text-transform: uppercase;
                }
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            h2 {
                font-size: 24px;
            }
            .partner-map {
                .partner {
                    width: 50%;
                    h3 {
                        font-size: 14px;
                    }
                }
            }
        }
    }
`

export default TGBooingPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 1173}) {
            title
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
            tgbooingContent {
                booingBanner {
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
                booingFirstSectionImage {
                    title
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
                booingLargeImage {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 1800
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                booingFirstSectionContent
                booingInfoGraphic {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 1800
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                booingPartners {
                    booingPartnerImage {
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
                    booingPartnerLocation
                }
            }
        }
    }
`