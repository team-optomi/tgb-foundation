import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import GolfGallery  from "../components/golf-gallery"

const PickleballPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.pickleballFundraiser.pickleballTopBanner.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.pickleballFundraiser.pickleballSmallImage.localFile.childImageSharp.gatsbyImageData)
    const infoGraphic = getImage(queryContent.pickleballFundraiser.pickleballLargeIcon.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.pickleballFundraiser.pickleballTopBanner.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                data-sal-delay="600"
                class="banner-content">
                    <h1>Golf Fundraiser</h1>
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    data-sal-delay="600"
                    class="left-col">
                        <GatsbyImage image={sectionOneImage} alt={queryContent.pickleballFundraiser.pickleballSmallImage.title} />
                        <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.pickleballFundraiser.pickleballMainContent }} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    data-sal-delay="600"
                    class="right-col">
                        <GatsbyImage image={infoGraphic} alt={queryContent.pickleballFundraiser.pickleballLargeIcon.title} />
                    </div>
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                data-sal-delay="600"
                class="contact" dangerouslySetInnerHTML={{ __html: queryContent.pickleballFundraiser.pickleballContactInformation }} />
            </SectionOne>
            <SectionTwo>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                data-sal-delay="600"
                class="sponsor-opportunities">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.pickleballFundraiser.pickleballSponsorOpportunities }} />
                </div>
            </SectionTwo>
            <GolfGallery />
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
    .iframe-container {
        iframe {
            width: 100%;
        }
    }
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
                    color: #00843d;
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
                h3 {
                    font-family: "Bodoni Classic";
                    color: #00843d;
                    font-size: 48px;
                    font-weight: 100;
                    text-shadow: 4px 4px 10px rgba(0,0,0,.3);
                    .fancy {
                        font-family: "Stay Bright Script";
                        font-size: 60px;
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
                transform: scale(1.7);
                top: 120px;
                right: -200px;
            }
        }
    }
    div.contact {
        margin-top: 50px;
        .flex-row {
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 0px;
            h3 {
                font-family: "Bodoni Classic";
                color: #734c28;
                font-size: 48px;
                font-weight: 100;
                text-align: left;
                margin-top: 0px;
                margin-bottom: 35px;
                width: 100%;
                .fancy {
                    font-family: "Stay Bright Script";
                    font-size: 60px;
                    color: #734c28;
                }
            }
            .left-col {
                padding-right: 30px;
                border-right: 1px solid #00234f;
                h3 {
                    text-align: left;
                    color: #00234f;
                    margin-bottom: 8px;
                    span.blue {
                        color: #00234f;
                    }
                }
                h4 {
                    font-family: "Bodoni Classic";
                    margin-top: 0px;
                    margin-bottom: 0px;
                }
                ul {
                    margin-top: 0px;
                    list-style: none;
                    li {
                        margin-bottom: 0px;
                    }
                }
                .custom-links {
                    a {
                        display: inline-block;
                        margin-right: 20px;
                        margin-bottom: 20px;
                    }
                }
                .flag-row {
                    position: relative;
                    > div.flag-row-content {
                        margin-left: 100px;
                    }
                    .gatsby-image-wrapper {
                        position: absolute !important;
                        width: 300px !important;
                        left: -106px;
                        bottom: -79px;
                    }
                    h2 {
                        font-family: "Bodoni Classic";
                        color: #734c28;
                        font-size: 48px;
                        font-weight: 100;
                        text-align: left;
                        margin-top: 0px;
                        margin-bottom: 35px;
                        width: 100%;
                        .fancy {
                            font-family: "Stay Bright Script";
                            font-size: 60px;
                            color: #00234f;
                        }
                    }
                    a {
                        font-family: "Bodoni Classic";
                        color: #00843d;
                        font-size: 18px;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        text-decoration: none;
                    }
                }
            }
            .right-col {
                width: 45%;
                margin-left: 0px;
                padding-left: 30px;
                h3 {
                    margin-bottom: 0px;
                    letter-spacing: 5px;
                }
                h4 {
                    font-family: "Bodoni Classic";
                    margin-top: 0px;
                    margin-bottom: 0px;
                    color: #00234f;
                }
                h5 {
                    font-family: "Bodoni Classic";
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: #734c28;
                }
                p {
                    color: #00234f;
                }
                .donor-box {
                    max-width: 430px;
                    width: 100%;
                    margin: 0 auto;
                }
            }
        }
    }
    @media(max-width:991px) {
        .flex-row {
            flex-wrap: wrap;
            margin-top: 0px;
            padding-top: 20px;
            h3 {
                text-align: center !important;
            }
            .left-col {
                width: 100%;
                text-align: center;
                padding-right: 0 !important;
                border-right: none !important;
                .flag-row {
                    .gatsby-image-wrapper {
                        display: none;
                    }
                    > div.flag-row-content {
                        margin-left: 0px !important;
                        text-align: center !important;
                        h2 {
                            text-align: center;
                        }
                    }
                }
            }
            .right-col {
                width: 100% !important;
                margin-left: 0;
                padding-left: 0px !important;
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
        h2 {
            font-size: 32px !important;
            .fancy {
                font-size: 40px !important;
            }
        }
        h3 {
            font-size: 32px !important;
            .fancy {
                font-size: 40px !important;
            }
        }
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
                a {
                    font-size: 28px;
                }
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

const SectionTwo = styled.section`
    background-color: #fff;
    padding: 35px 0px;
    padding-bottom: 0px;
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
        color: #00843d;
        text-align: center;
        padding: 0 20px;
    }
    
    .sponsor-opportunities {
        max-width: 1240px;
        width: 100%;
        margin: 0 auto;
        padding: 0px 20px;
        display: flex;
        h3 {
            font-family: "Bodoni Classic";
            color: #00234f;
            font-size: 48px;
            span.fancy {
                font-family: "Stay Bright Script";
                font-size: 60px;
                font-weight: 100;
            }
        }
    }
    @media(max-width: 991px) {
        text-align: center !important;
        .buttons {
            a {
                margin-left: auto;
                text-align: center;
            }
        }
    }
    @media(max-width: 767px) {
        .buttons {
            a {
                font-size: 24px;
                width: auto;
                .fancy {
                    font-size: 32px;
                }
            }
        }
        h2 {
            font-size: 44px;
        }
        .sponsor-opportunities {
            flex-wrap: wrap;
            justify-content: center;
            > div:first-child {
                order: 2;
                width: 100%;
                text-align: center;
            }
            > div:last-child {
                order: 1;
                width: 100%;
                .flex-row {
                    flex-wrap: wrap;
                    ul {
                        width: 100%;
                        margin-top: 0px;
                        margin-bottom: 0px;
                    }
                }
            }
        }
    }
`

export default PickleballPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 3009}) {
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
            pickleballFundraiser {
                pickleballTopBanner {
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
                pickleballSmallImage {
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
                pickleballLargeIcon {
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
                pickleballMainContent
                pickleballContactInformation
                pickleballSponsorOpportunities
            }
        }
    }
`