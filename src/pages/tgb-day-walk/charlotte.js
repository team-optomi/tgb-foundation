import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../../components/layout-v2"
import Seo from "../../components/seo"

const GlowPageCharlotte = ({ data: { queryContent, cityContent } }) => {

    const bannerImage = getImage(queryContent.glowWalk.glowTopBanner.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.glowWalk.glowLeftImage.localFile.childImageSharp.gatsbyImageData)
    const sectionOneLarge = getImage(queryContent.glowWalk.glowLargeIcon.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <Seo 
            title={'TGB Day Run Walk - Charlotte'} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.glowWalk.glowTopBanner.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <h1>{cityContent.title}</h1>
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <div class="left-col">
                        <GatsbyImage image={sectionOneImage} alt={queryContent.glowWalk.glowLeftImage.title} />
                        <div class="content" dangerouslySetInnerHTML={{ __html: cityContent.content }} />
                    </div>
                    <div class="right-col">
                        <GatsbyImage image={sectionOneLarge} alt={queryContent.glowWalk.glowLargeIcon.title} />
                    </div>
                </div>
            </SectionOne>
            <EmbedSection>
                <div class="flex-row">
                    <div class="half-col donor-col">
                        <div  dangerouslySetInnerHTML={{ __html: cityContent.tgbDayCityTemplate.cityDonorboxEmbed }} />
                    </div>
                    <div class="half-col google-col">
                        <div  dangerouslySetInnerHTML={{ __html: cityContent.tgbDayCityTemplate.cityGoogleMapsEmbed }} />
                    </div>
                </div>
            </EmbedSection>
            <EventSection>
                <h2>Charlotte Gallery</h2>
                <div class="gallery-flex">
                    {cityContent.tgbDayCityTemplate.cityEventGallery.map(imageSrc => (
                        <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                    ))}
                </div>
            </EventSection>
        </Layout>
    );

}

const BannerSection = styled.section`
    position: relative;
    padding: 40px;
    padding-top: 80px;
    .banner-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .gatsby-image-wrapper {
            height: 100%;
            width: 100%;
            img {
                width: 100%;
                object-fit: inherit !important;
            }
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
            .purple {
                color: #d73fa1;
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
        .banner-background {
            .gatsby-image-wrapper {
                img {
                    object-fit: cover !important;
                }
            }
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
        margin-top: -160px;
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
                z-index: 10;
                h2 {
                    font-family: "Bodoni Classic";
                    color: #d73fa1;
                    font-size: 72px;
                    font-weight: 100;
                    text-align: center;
                    text-shadow: 4px 4px 10px rgba(0,0,0,.3);
                    .fancy {
                        font-family: "Stay Bright Script";
                        font-size: 100px;
                        color: #d73fa1;
                    }
                }
                h3 {
                    font-family: "Bodoni Classic";
                    color: #d73fa1;
                    font-size: 28px;
                    font-weight: 100;
                    text-align: center;
                    text-transform: uppercase;
                    .fancy {
                        font-family: "Stay Bright Script";
                        font-size: 80px;
                        color: #d73fa1;
                    }
                }
                h4 {
                    font-family: "Stay Bright Script";
                    font-size: 40px;
                    color: #d73fa1;
                    font-weight: 100;
                    text-align: center;
                    margin-top: 0px;
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
                    text-decoration: none;
                }
                a.button {
                    font-family: "Stay Bright Script";
                    font-size: 40px;
                    line-height: 1.2;
                    background-color: #FF9700;
                    color: #00234f;
                    text-decoration: none;
                    padding: 10px 70px;
                    display: inline-block;
                    margin: 0 auto;
                }
            }
        }
        .right-col {
            width: 50%;
            margin-left: -5%;
            .gatsby-image-wrapper {
                transform: scale(1.3);
                top: 0px;
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

const EmbedSection = styled.section`
    background-color: #fff;
    .flex-row {
        max-width: 970px;
        width: 100%;
        margin: 0 auto;
        padding: 50px 20px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 50px;
        .half-col {
            width: 50%;
        }
    }
    @media(max-width: 1000px) {
        .flex-row {
            flex-wrap: wrap;
            .half-col {
                max-width: 600px;
                width: 100%;
                margin: 20px auto;
            }
        }
    }
`

const EventSection = styled.section`
    background-color: #fff;
    padding-top: 50px;
    h2 {
        font-family: "Stay Bright Script";
        font-size: 72px;
        color: #d73fa1;
        font-weight: 100;
        text-align: center;
        text-shadow: 4px 4px 10px rgba(0,0,0,.3);
        margin-top: 0px;
        margin-bottom: 50px;
    }
    .gallery-flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .gatsby-image-wrapper {
            width: 33.33%;
        }
    }
    @media(max-width:991px) {
        .gallery-flex {
            justify-content: center;
            .gatsby-image-wrapper {
                width: 50%;
            }
        }
    }
    @media(max-width:520px) {
        .gallery-flex {
            .gatsby-image-wrapper {
                width: 100%;
            }
        }
    }
`

export default GlowPageCharlotte

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 1263}) {
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
            glowWalk {
                glowTopBanner {
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
                atlantaInformation
                glowLeftImage {
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
                glowLargeIcon {
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
            }
        }
        cityContent: wpPage(databaseId: {eq: 1799}) {
            title
            content
            tgbDayCityTemplate {
                cityDonorboxEmbed
                cityGoogleMapsEmbed
                cityEventGallery {
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
            }
        }
    }
`