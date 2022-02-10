import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const CharmPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.BuyACharmContent.charmBannerImage.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.BuyACharmContent.charmSectionOneImage.localFile.childImageSharp.gatsbyImageData)
    const sectionTwoImage = getImage(queryContent.BuyACharmContent.charmSectionTwoImage.localFile.childImageSharp.gatsbyImageData)
    const sectionThreeImage = getImage(queryContent.BuyACharmContent.charmSectionThreeImage.localFile.childImageSharp.gatsbyImageData)

    const partnerMap = queryContent.BuyACharmContent.hospitalPartners

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.BuyACharmContent.charmBannerImage.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <Link to={"/shamrocked-donate/"}>Donate Today<br/><span>For your lucky charm yard sign</span></Link>
                    <div dangerouslySetInnerHTML={{ __html: queryContent.BuyACharmContent.charmBannerCopy }} />
                </div>
            </BannerSection>
            <SectionOne>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="flex-row">
                    <GatsbyImage image={sectionOneImage} alt={queryContent.BuyACharmContent.charmSectionOneImage.title} />
                    <div class="section-one-copy" dangerouslySetInnerHTML={{ __html: queryContent.BuyACharmContent.charmSectionOneCopy }} />
                </div>
            </SectionOne>
            <SectionTwo>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="flex-row">
                    <GatsbyImage image={sectionTwoImage} alt={queryContent.BuyACharmContent.charmSectionTwoImage.title} />
                    <div class="section-two-copy" dangerouslySetInnerHTML={{ __html: queryContent.BuyACharmContent.charmSectionTwoCopy }} />
                </div>
            </SectionTwo>
            <SectionThree>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="flex-row">
                    <div class="left-col">
                        <div class="section-three-copy" dangerouslySetInnerHTML={{ __html: queryContent.BuyACharmContent.charmSectionThreeCopy }} />
                        <GatsbyImage image={sectionThreeImage} alt={queryContent.BuyACharmContent.charmSectionThreeImage.title} />
                    </div>
                    <div class="right-col">
                        <h2>Hospital Partners Include</h2>
                        <div class="partner-map">
                        {partnerMap.map(partner => (
                            <a href={partner.hospitalPartnerLink}>
                                <GatsbyImage image={partner.hospitalPartnerImage.localFile.childImageSharp.gatsbyImageData} alt={partner.hospitalPartnerImage.title} />
                                <h3>{partner.hospitalPartnerLocation}</h3>
                            </a>
                        ))}
                        </div>
                    </div>
                    <div class="bottom-row">
                        <Link to={"/shamrocked-donate/"}>Donate Today<br/><span>For your lucky charm yard sign</span></Link>
                        <div class="video-embed" dangerouslySetInnerHTML={{ __html: queryContent.BuyACharmContent.shamrockedVideoEmbed }} />
                    </div>
                </div>
            </SectionThree>
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
        a {
            font-family: "Bodoni Classic";
            color: #000;
            background-color: #00ff00;
            display: block;
            width: 250px;
            padding: 10px 35px;
            padding-top: 15px;
            text-align: center;
            text-decoration: none;
            font-size: 24px;
            line-height: .5;
            text-transform: uppercase;
            margin-bottom: 25px;
            span {
                font-size: 9px;
            }
        }
        p {
            font-family: "Bodoni Classic";
            font-size: 20px;
            line-height: 1.2;
            color: #fff;
            margin-bottom: 25px;
        }
    }
    @media(max-width:767px) {
        padding: 120px 20px;
        a {
            margin: 0 auto;
            margin-bottom: 25px;
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
        display: flex;
        align-items: center;
        justify-content: space-between;
        .gatsby-image-wrapper {
            max-width: 350px;
            width: 100%;
            height: auto;
            margin-top: -60px;
        }
        .section-one-copy {
            max-width: 450px;
            width: 100%;
            border: 1px solid #007f3d;
            padding: 30px;
            text-align: center;
            position: relative;
            h1 {
                font-family: "Bodoni Classic";
                margin: 0;
                font-size: 32px;
                text-transform: uppercase;
                line-height: 1.1;
                margin-bottom: 0px;
                span.large {
                    font-size: 52px;
                }
            }
            p.small {
                font-family: "Bodoni Classic";
                margin: 0;
                font-size: 12px;
                text-transform: uppercase;
                line-height: 1.4;
                margin-bottom: 15px;
            }
            h3 {
                font-family: "Bodoni Classic";
                color: #007f3d;
                font-size: 15px;
                font-weight: 100;
                line-height: 1.2;
                margin: 0;
            }
            &:before {
                content: '';
                position: absolute;
                top: 56px;
                left: -230px;
                width: 265px;
                height: 2px;
                background-color: #007f3d;
            }
        }
    }
    @media(max-width:1140px) {
        .flex-row {
            max-width: 700px;
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                margin-left: auto;
                margin-right: auto;
            }
            .section-one-copy {
                margin: 30px auto;
                margin-bottom: 0px;
                &:before {
                    display: none;
                }
            }
        }
    }
    @media(min-width:460px) {
        .flex-row {
            .section-one-copy {
                h3 {
                    br {
                        display: none;
                    }
                }
            }
        }
    }
`

const SectionTwo = styled.section`
    position: relative;
    background-color: #fff;
    padding-bottom: 80px;
    .flex-row {
        width: 100%;
        display: flex;
        align-content: center;
        .gatsby-image-wrapper {
            width: 50%;
            height: auto;
        }
        .section-two-copy {
            width: 50%;
            padding-left: 50px;
            h2 {
                font-family: "Bodoni Classic";
                color: #007f3d;
                margin: 0;
                font-size: 28px;
                font-weight: 100;
                text-transform: uppercase;
                line-height: 1.2;
                margin-bottom: 30px;
            }
            p {
                font-family: "Bodoni Classic";
                color: #007f3d;
                margin: 0;
                font-size: 18px;
                font-weight: 100;
                line-height: 1.4;
                margin-bottom: 40px;
            }
            ul {
                list-style-position: inside;
            }
            li {
                font-family: "Bodoni Classic";
                color: #007f3d;
                margin: 0;
                font-size: 18px;
                font-weight: 100;
                line-height: 1.4;
                margin-bottom: 5px;
            }
            h3 {
                font-family: "Bodoni Classic";
                color: #007f3d;
                margin: 0;
                font-size: 24px;
                font-weight: 100;
                text-transform: uppercase;
                line-height: 1.2;
                margin-bottom: 0px;
            }
        }
    }
    @media(max-width:1000px) {
        .flex-row {
            flex-wrap: wrap;
            .gatsby-image-wrapper {
                width: 100%;
            }
            .section-two-copy {
                max-width: 600px;
                width: 100%;
                margin: 0 auto;
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 35px;
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .section-two-copy {
                h3 {
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
    }
`

const SectionThree = styled.section`
    position: relative;
    background-color: #fff;
    padding-bottom: 80px;
    .flex-row {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .left-col {
            max-width: 600px;
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .section-three-copy {
                text-align: center;
                border: 1px solid #00ff00;
                padding: 10px;
                margin-right: 30px;
                h2 {
                    font-family: "Bodoni Classic";
                    margin: 0;
                    font-size: 24px;
                    font-weight: 100;
                    line-height: 1.2;
                    margin-bottom: 30px;
                    .green {
                        color: #007f3d;
                    }
                }
                ul {
                    list-style: none;
                    li {
                        font-family: "Bodoni Classic";
                        margin: 0;
                        font-size: 20px;
                        font-weight: 100;
                        line-height: 1.2;
                    }
                }
            }
            .gatsby-image-wrapper {
                max-width: 350px;
                width: 100%;
                height: auto;
            }
        }
        .right-col {
            width: 50%;
            padding-left: 50px;
            h2 {
                font-family: "Bodoni Classic";
                font-size: 26px;
                font-weight: 100;
                color: #007f3d;
                text-transform: uppercase;
                text-align: center;
                margin-bottom: 0px;
            }
            .partner-map {
                max-width: 360px;
                width: 100%;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                a {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    height: 70px;
                    width: 50%;
                    padding: 0 20px;
                    text-decoration: none;
                    text-align: center;
                    margin-bottom: 5px;
                }
                h3 {
                    font-family: "Bodoni Classic";
                    font-size: 12px;
                    margin: 0;
                    margin-top: 5px;
                    text-transform: uppercase;
                    color: #007f3d;
                }
                .gatsby-image-wrapper {
                    img {
                        object-fit: contain !important;
                    }
                }
            }
        }
        .bottom-row {
            width: 100%;
            padding: 70px 20px;
            padding-bottom: 0px;
            display: flex;
            justify-content: center;
            a {
                font-family: "Bodoni Classic";
                color: #000;
                background-color: #00ff00;
                display: block;
                width: 250px;
                padding: 10px 35px;
                padding-top: 15px;
                text-align: center;
                text-decoration: none;
                font-size: 24px;
                line-height: .5;
                text-transform: uppercase;
                margin-bottom: 0px;
                span {
                    font-size: 9px;
                }
            }
        }
    }
    @media(max-width:1140px) {
        .flex-row {
            max-width: 700px;
            .left-col {
                width: 100%;
            }
            .right-col {
                width: 100%;
                padding-left: 0px;
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            .left-col {
                padding: 0 20px;
                justify-content: center;
                flex-wrap: wrap;
                .section-three-copy {
                    max-width: 250px;
                    width: 100%;
                    margin: 0 auto;
                    margin-bottom: 25px;
                }
            }
        }
    }
`

export default CharmPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 902}) {
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
            BuyACharmContent {
                charmBannerImage {
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
                charmBannerCopy
                charmSectionOneImage {
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
                charmSectionOneCopy
                charmSectionTwoImage {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 1200
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                charmSectionTwoCopy
                charmSectionThreeImage {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 800
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                charmSectionThreeCopy
                hospitalPartners {
                    hospitalPartnerImage {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 200
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    hospitalPartnerLocation
                    hospitalPartnerLink
                }
                shamrockedVideoEmbed
            }
        }
    }
`