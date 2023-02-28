import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

import downloadFile from "../downloads/QR_code_sheet.pdf"

const ShamrockedPage = ({ data: { queryContent } }) => {

    const bannerImage = getImage(queryContent.shamrocked.shamBannerBackground.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.shamrocked.shamSectionOneImage.localFile.childImageSharp.gatsbyImageData)

    // const partnerMap = queryContent.shamrocked.shamHospitalPartners
    const shamMap = queryContent.shamrocked.shamSectionSevenGallery

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <BannerSection>
                <div class="banner-background">
                    <GatsbyImage image={bannerImage} alt={queryContent.shamrocked.shamBannerBackground.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="banner-content">
                    <h1 dangerouslySetInnerHTML={{ __html: queryContent.title }} />
                    {/* <p>coming back next March</p> */}
                </div>
            </BannerSection>
            <SectionOne>
                <div class="flex-row">
                    <GatsbyImage image={sectionOneImage} alt={queryContent.shamrocked.shamSectionOneImage.title} />
                    <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.shamrocked.shamSectionOneContent }} />
                </div>
            </SectionOne>
            <SectionTwo>
                <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.shamrocked.shamSectionTwoContent }} />
            </SectionTwo>
            {/* <SectionFive>
                <div class="flex-row">
                    <h2>Hospital Partners Include:</h2>
                    <div class="partner-map">
                        {partnerMap.map(partner => (
                            <div class="partner">
                                <GatsbyImage image={partner.shamPartnerImage.localFile.childImageSharp.gatsbyImageData} alt={partner.shamPartnerImage.title} />
                                <h3>{partner.shamPartnerLocation}</h3>
                            </div>
                        ))}
                    </div>    
                </div>
            </SectionFive> */}
            <SectionSix>
                <div class="flex-row">
                    <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.shamrocked.shamSectionSixContent }} />
                    <div class="button-row">
                        <Link to={"/shamrocked-donate/"}>Donate Today<br/><span>Receive an NFT</span></Link>
                        <a href={downloadFile} download>QR Code Sheet</a>
                    </div>
                </div>
            </SectionSix>
            <SectionSeven>
                <div class="gallery-map">
                    {shamMap.map(imgSrc => (
                        <div class="gallery-image">
                            <GatsbyImage image={imgSrc.localFile.childImageSharp.gatsbyImageData} alt={imgSrc.title} />
                        </div>
                    ))}
                </div>
            </SectionSeven>
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
        p {
            text-align: right;
            font-family: "Bodoni Classic";
            color: #fff;
            font-size: 20px;
            line-height: 1.2;
            padding-right: 300px;
        }
    }
    @media(max-width:1000px) {
        .banner-content {
            h1 {
                font-size: 60px;
                text-align: center;
            }
            p {
                text-align: center;
                padding-right: 0px;
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

const SectionThree = styled.section`
    background-color: #fff;
    .gatsby-image-wrapper {
        width: 100%;
    }
`

const SectionFour = styled.section`
    background-color: #fff;
    padding: 60px 20px;
    text-align: center;
    h2 {
        font-family: "Stay Bright Script";
        color: rgb(0, 127, 61);
        font-size: 90px;
        font-weight: 100;
        line-height: 1.2;
    }
    .gatsby-image-wrapper {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
    }
    .mobile-image {
        display: none;
    }
    @media(max-width:767px) {
        h2 {
            display: none;
        }
        .main-image {
            display: none;
        }
        .mobile-image {
            display: block;
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

const SectionSix = styled.section`
    background-color: #fff;
    padding: 60px 20px;
    .donate-box {
        max-width: 800px;
        width: 100%;
        padding: 40px 80px;
        border: 2px solid rgb(0, 127, 61);
        margin: 0 auto;
        text-align: center;
        p {
            font-family: "Bodoni Classic";
            text-align: center;
            font-size: 36px;
            font-weight: bold;
            line-height: 1.2;
            span {
                font-size: 120px;
                color: #d4a949;
            }
        }
    }
    .button-row {
        width: 100%;
        padding: 50px 20px 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        a {
            font-family: "Bodoni Classic";
            color: rgb(0, 0, 0);
            background-color: rgb(0, 255, 0);
            display: block;
            width: 250px;
            padding: 15px 35px 10px;
            text-align: center;
            text-decoration: none;
            font-size: 20px;
            line-height: 0.5;
            text-transform: uppercase;
            margin: 10px;
            span {
                font-size: 9px;
            }
        }
    }
    @media(max-width:767px) {
        .donate-box {
            padding: 40px 20px;
            p {
                span {
                    font-size: 80px;
                }
            }
        }
    }
`

const SectionSeven = styled.section`
    background-color: #fff;
    .gallery-map {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        .gallery-image {
            width: 100%;
            height: 100%;
            .gatsby-image-wrapper {
                height: 100%;
            }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4) {
                width: 33.33%;
                height: 70vh;
            }
            &:nth-child(6),
            &:nth-child(7) {
                width: 50%;
                height: 70vh;
            }
        }
    }
    @media(max-width:1300px) {
        .gallery-map {
            .gallery-image {
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    height: 400px;
                }
                &:nth-child(6),
                &:nth-child(7) {
                    height: 400px;
                }
            }
        }
    }
    @media(max-width:1000px) {
        .gallery-map {
            .gallery-image {
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    height: 300px;
                }
            }
        }
    }
    @media(max-width:767px) {
        .gallery-map {
            .gallery-image {
                &:nth-child(2),
                &:nth-child(3),
                &:nth-child(4) {
                    width: 100%;
                    height: auto;
                }
                &:nth-child(6),
                &:nth-child(7) {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
`

export default ShamrockedPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 1104}) {
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
            shamrocked {
                shamBannerBackground {
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
                shamSectionOneContent
                shamSectionOneImage {
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
                shamSectionTwoContent
                shamSectionThreeImage {
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
                shamSectionFourImage {
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
                shamSectionFourMobile {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 700
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
                shamHospitalPartners {
                  shamPartnerImage {
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
                  shamPartnerLocation
                }
                shamSectionSixContent
                shamSectionSevenGallery  {
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
    }
`