import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const TGBashPage = ({ data: { queryContent } }) => {

    const sectionOneImage = getImage(queryContent.tgbash.bashLeftImage.localFile.childImageSharp.gatsbyImageData)
    const sectionOneLarge = getImage(queryContent.tgbash.bashLargeIcon.localFile.childImageSharp.gatsbyImageData)

    const partnerMap = queryContent.tgbash.bashHospitalPartners

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <h1>TGBash Fundraiser</h1>
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <div class="left-col">
                        <GatsbyImage image={sectionOneImage} alt={queryContent.tgbash.bashLeftImage.title} />
                        <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.tgbash.bashMainContent }} />
                    </div>
                    <div class="right-col">
                        <GatsbyImage image={sectionOneLarge} alt={queryContent.tgbash.bashLargeIcon.title} />
                    </div>
                </div>
            </SectionOne>
            <SectionFive>
                <div class="flex-row">
                    <h2>Hospital Partners Include:</h2>
                    <div class="partner-map">
                        {partnerMap.map(partner => (
                            <div class="partner">
                                <GatsbyImage image={partner.bashPartnerImage.localFile.childImageSharp.gatsbyImageData} alt={partner.bashPartnerImage.title} />
                                <h3>{partner.bashPartnerLocation}</h3>
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
            .orange {
                color: #fc9500;
            }
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
        .left-col {
            width: 55%;
            .gatsby-image-wrapper {
                max-width: 450px;
                width: 100%;
                border: 2px solid #000;
                background-color: #fff;
            }
            .content {
                position: relative;
                width: 100%;
                margin-top: 50px;
                padding: 0 25px;
                h2 {
                    font-family: "Bodoni Classic";
                    color: #fc9500;
                    font-size: 72px;
                    font-weight: 100;
                    text-align: center;
                    text-shadow: 4px 4px 10px rgba(0,0,0,.3);
                    .fancy {
                        font-family: "Stay Bright Script";
                        font-size: 100px;
                        color: #fc9500;
                    }
                }
                p {
                    font-family: "Bodoni Classic";
                    font-size: 20px;
                    line-height: 1.2;
                    margin-bottom: 25px;
                    color: #684521;
                    &.fancy {
                        font-family: "Stay Bright Script";
                        font-size: 44px;
                        font-weight: 100;
                        color: #00234f;
                        text-align: center;
                    }
                }
                a {
                    font-family: "Stay Bright Script";
                    font-size: 32px;
                    line-height: 1.2;
                    background-color: #000;
                    color: #fc9500;
                    text-decoration: none;
                    padding: 10px 35px;
                    display: inline-block;
                    margin: 0 auto;
                }
            }
        }
        .right-col {
            width: 55%;
            margin-left: -10%;
            .gatsby-image-wrapper {
                transform: scale(2);
                top: 120px;
                right: 0px;
            }
        }
    }
    @media(max-width:1000px) {
        .flex-row {
            flex-wrap: wrap;
            margin-top: 0px;
            padding-top: 20px;
            .left-col {
                width: 100%;
                text-align: center;
            }
            .right-col {
                width: 100%;
                margin-left: 0;
                text-align: center;
                .gatsby-image-wrapper {
                    transform: scale(1);
                    top: auto;
                    right: auto;
                    max-width: 350px;
                }
            }
        }
        .contact {
            padding-top: 20px;
            p.large {
                text-align: center;
            }
            p.medium {
                text-align: center;
            }
            p {
                text-align: center;
            }
            p.small {
                text-align: center;
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .left-col {
                .content {
                    h2 {
                        font-size: 44px;
                        .fancy {
                            font-size: 60px;
                        }
                    }
                }
            }
        }
        div.contact {
            p.large {
                font-size: 32px;
            }
            p.medium {
                font-size: 28px;
            }
            p {
                font-size: 20px;
            }
            p.small {
                font-size: 20px;
            }
        }
    }
`

const SectionFive = styled.section`
    background-color: #fff;
    .flex-row {
        max-width: 1040px;
        width: 100%;
        margin: 0px auto;
        padding: 60px 20px;
        h2 {
            font-family: "Bodoni Classic";
            text-align: center;
            margin-top: 0px;
            color: #5c007d;
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

export default TGBashPage

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
            tgbash {
                bashMainContent
                bashLeftImage {
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
                bashLargeIcon {
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
                bashHospitalPartners {
                    bashPartnerLocation
                    bashPartnerImage {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 400
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    }
`