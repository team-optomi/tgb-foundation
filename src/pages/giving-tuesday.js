import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const GivingTuesdayPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.givingTuesdayContent.givingTuesdayHeaderImage.localFile.childImageSharp.gatsbyImageData)
    const givingGraphic = getImage(queryContent.givingTuesdayContent.givingTuesdayMainIcon.localFile.childImageSharp.gatsbyImageData)
    const wallpaperImage = getImage(queryContent.givingTuesdayContent.givingTuesdayWallpaper.localFile.childImageSharp.gatsbyImageData)

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
                    <GatsbyImage image={bannerImage} alt={queryContent.givingTuesdayContent.givingTuesdayHeaderImage.title} />
                </div>
            </BannerSection>
            <MainSection>
                <div class="flex-row">
                    <div class="left-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.givingTuesdayContent.givingTuesdayMainContent }} />
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: queryContent.givingTuesdayContent.givingTuesdayDonorEmbed }} />
                    </div>
                    <div class="right-col">
                        <div 
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="tree-icon">
                            <GatsbyImage image={givingGraphic} alt={queryContent.givingTuesdayContent.givingTuesdayMainIcon.title} />
                        </div>
                    </div>
                </div>
            </MainSection>
            <Wallpaper>
                <h2
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >{queryContent.givingTuesdayContent.givingTuesdayBottomHeader}</h2>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="wallpaper-image">
                    <GatsbyImage image={wallpaperImage} alt={queryContent.givingTuesdayContent.givingTuesdayWallpaper.title} />
                </div>
            </Wallpaper>
        </Layout>
    )

}

const BannerSection = styled.div``

const MainSection = styled.section`
    background-color: #fff;
    padding: 50px 20px;
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        .left-col {
            width: 50%;
            h1 {
                font-family: "Stay Bright Script";
                font-size: 100px;
                font-weight: 100;
                color: #f3823e;
                text-align: center;
                text-shadow: 2px 2px 4px rgba(0,0,0,.3);
            }
            p {
                font-family: "Bodoni Classic";
                font-size: 20px;
                line-height: 1.2;
                margin-bottom: 25px;
                color: rgb(104, 69, 33);
            }
        }
        .right-col {
            width: 50%;
            position: relative;
            .gatsby-image-wrapper {
                position: absolute;
                left: -150px;
                width: 1200px;
            }
        }
    }
    @media(max-width:991px) {
        .flex-row {
            flex-wrap: wrap;
            .left-col {
                width: 100%;
                text-align: center;
            }
            .right-col {
                width: 100%;
                .gatsby-image-wrapper {
                    position: relative;
                    left: auto;
                    width: 100%;
                }
            }
        }
    }
`

const Wallpaper = styled.div`
    background-color: #fff;
    h2 {
        font-family: "Stay Bright Script";
        font-size: 72px;
        font-weight: 100;
        color: #f3823e;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0,0,0,.3);
        margin-top: 0;
        margin-bottom: 50px;
    }
`

export default GivingTuesdayPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 2181}) {
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
            givingTuesdayContent {
                givingTuesdayHeaderImage {
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
                givingTuesdayMainContent
                givingTuesdayDonorEmbed
                givingTuesdayMainIcon {
                    title
                    localFile {
                      childImageSharp {
                        gatsbyImageData (
                            width: 1200
                            placeholder: TRACED_SVG
                            formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                }
                givingTuesdayBottomHeader
                givingTuesdayWallpaper {
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
        }
    }
`