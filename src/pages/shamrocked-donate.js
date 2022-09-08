import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const ShamrockedDonatePage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.shamrockedDonatePage.shamrockedTopBanner.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.shamrockedDonatePage.shamrockedTopBanner.title} />
                </div>
            </BannerSection>
            <SectionOne>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="flex-row">
                    <div class="section-one-copy" dangerouslySetInnerHTML={{ __html: queryContent.shamrockedDonatePage.shamrockedDonateEmbed }} />
                </div>
            </SectionOne>
        </Layout>
    );

}

const BannerSection = styled.section`
    position: relative;
    padding: 120px;
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
`

const SectionOne = styled.section`
    position: relative;
    background-color: #fff;
    padding-bottom: 80px;
    .flex-row {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        padding-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        .section-one-copy {
            max-width: 423px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            h1 {
                font-family: "Stay Bright Script";
                color: #007f3d;
                margin: 0;
                font-size: 54px;
                font-weight: 100;
                line-height: 1.1;
                margin-bottom: 30px;
                text-align: center;
                width: 100%;
            }
            p {
                width: 100%;
            }
        }
    }
`

export default ShamrockedDonatePage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 937}) {
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
            shamrockedDonatePage {
                shamrockedTopBanner {
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
                shamrockedDonateEmbed
            }
        }
    }
`