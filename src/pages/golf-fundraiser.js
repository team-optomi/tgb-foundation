import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const GolfPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.golfFundraiser.golfTopBanner.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.golfFundraiser.golfSmallImage.localFile.childImageSharp.gatsbyImageData)
    const infoGraphic = getImage(queryContent.golfFundraiser.golfLargeIcon.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.golfFundraiser.golfTopBanner.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <h1>Golf Fundraiser</h1>
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <div class="left-col">
                        <GatsbyImage image={sectionOneImage} alt={queryContent.golfFundraiser.golfSmallImage.title} />
                        <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.golfFundraiser.golfMainContent }} />
                    </div>
                    <div class="right-col">
                        <GatsbyImage image={infoGraphic} alt={queryContent.golfFundraiser.golfLargeIcon.title} />
                    </div>
                </div>
                <div class="contact" dangerouslySetInnerHTML={{ __html: queryContent.golfFundraiser.golfContactInformation }} />
            </SectionOne>
            <SectionTwo>
                <div class="buttons">
                    <a href="#"><span class="fancy">register as</span> a foursome</a>
                    <a href="#"><span class="fancy">register as</span> a corporate sponsor</a>
                </div>
                <h2>Corporate Sponsorship Opportunities</h2>
                <div class="sponsor-opportunities">
                    <GatsbyImage image={infoGraphic} alt={queryContent.golfFundraiser.golfLargeIcon.title} />
                    <div class="list" dangerouslySetInnerHTML={{ __html: queryContent.golfFundraiser.golfSponsorOpportunities }} />
                </div>
            </SectionTwo>
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
        .left-col {
            width: 55%;
            .gatsby-image-wrapper {
                max-width: 450px;
                width: 100%;
            }
            .content {
                position: relative;
                width: 100%;
                margin-top: 50px;
                padding: 0 25px;
                h2 {
                    font-family: "Bodoni Classic";
                    color: #4ccf19;
                    font-size: 72px;
                    font-weight: 100;
                    text-align: center;
                    text-shadow: 4px 4px 10px rgba(0,0,0,.3);
                    .fancy {
                        font-family: "Stay Bright Script";
                        font-size: 100px;
                        color: #00234f;
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
            }
        }
        .right-col {
            width: 55%;
            margin-left: -10%;
            .gatsby-image-wrapper {
                transform: scale(2);
                top: 120px;
                right: -200px;
            }
        }
    }
    div.contact {
        padding: 70px 20px 0px;
        text-align: right;
        p.large {
            font-family: "Bodoni Classic";
            font-size: 72px;
            color: #684521;
            letter-spacing: 10px;
            margin-bottom: 0px;
        }
        p.medium {
            font-family: "Bodoni Classic";
            font-size: 44px;
            color: #00234f;
            letter-spacing: 2px;
            line-height: 1.1;
            padding-right: 10px;
            margin-bottom: 0px;
        }
        p {
            margin-bottom: 0px;
        }
        a {
            font-family: "Bodoni Classic";
            font-weight: 700;
            color: #684521;
            text-decoration: none;
            font-size: 28px;
            margin-bottom: 0px;
            padding-right: 10px;
        }
        p.small {
            font-family: "Bodoni Classic";
            font-size: 24px;
            color: #00234f;
            margin-bottom: 0px;
            line-height: 1.1;
            padding-right: 10px;
        }
    }
`

const SectionTwo = styled.section`
    background-color: #fff;
    padding: 35px 0px;
    .buttons {
        max-width: 1240px;
        width: 100%;
        margin: 0 auto;
        padding: 0px 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        a {
            font-family: "Bodoni Classic";
            font-size: 32px;
            color: #00234f;
            background-color: #87de66;
            padding: 5px 20px;
            text-decoration: none;
            margin-right: auto;
            margin-bottom: 20px;
            display; block;
            width: 440px;
            .fancy {
                font-family: "Stay Bright Script";
                font-size: 44px;
            }
        }
    }
    h2 {
        font-family: "Stay Bright Script";
        font-size: 72px;
        font-weight: 100;
        color: #00234f;
        text-align: center;
        padding: 0 20px;
    }
    .sponsor-opportunities {
        max-width: 1240px;
        width: 100%;
        margin: 0 auto;
        padding: 0px 20px;
        display: flex;
        .gatsby-image-wrapper {
            max-width: 300px;
            max-height: 350px;
            width: 100%;
        }
        .list {
            width: calc(100% - 300px);
        }
        .flex-row {
            display: flex;
            padding: 20px 50px;
            ul {
                list-style: none;
                width: 50%;
                li {
                    font-family: "Bodoni Classic";
                    font-size: 20px;
                    font-weight: 700;
                    color: #000;
                }
            }
        }
    }
`

export default GolfPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 1211}) {
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
            golfFundraiser {
                golfTopBanner {
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
                golfSmallImage {
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
                golfLargeIcon {
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
                golfMainContent
                golfContactInformation
                golfSponsorOpportunities
            }
        }
    }
`