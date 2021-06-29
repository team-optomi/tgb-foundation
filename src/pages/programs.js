import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const ProgramsPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    const sectionOneImage = getImage(queryContent.programsContent.pSectionOneMainImage.localFile.childImageSharp.gatsbyImageData)
    const sectionTwoImage = getImage(queryContent.programsContent.pSectionTwoMainImage.localFile.childImageSharp.gatsbyImageData)
    const sectionThreeImage = getImage(queryContent.programsContent.pSectionThreeMainImage.localFile.childImageSharp.gatsbyImageData)
    const sectionFourImage = getImage(queryContent.programsContent.pSectionFourMainImage.localFile.childImageSharp.gatsbyImageData)
    const sectionFiveImage = getImage(queryContent.programsContent.pSectionFiveMainImage.localFile.childImageSharp.gatsbyImageData)

    const galleryOne = queryContent.programsContent.pSectionOneImageGallery
    const galleryTwo = queryContent.programsContent.pSectionTwoGallery
    const galleryThree = queryContent.programsContent.pSectionThreeGallery
    const galleryFour = queryContent.programsContent.pSectionFourGallery
    const galleryFive = queryContent.programsContent.pSectionFiveGallery


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
                        <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                    </div>
                </div>
            </HeroSection>
            <MainSection>
                <div class="main-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="main-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.programsContent.pSectionOneContent }} />
                    </div>
                    <div class="main-image">
                        <GatsbyImage image={sectionOneImage} alt={queryContent.programsContent.pSectionOneMainImage.title} />
                    </div>   
                </div>
                <div class="gallery-row">
                {galleryOne.map(imageSrc => (
                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
                </div>
            </MainSection>
            <MainSection>
                <div class="main-row">
                    <div class="main-image">
                        <GatsbyImage image={sectionTwoImage} alt={queryContent.programsContent.pSectionTwoMainImage.title} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="main-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.programsContent.pSectionTwoContent }} />
                    </div>
                </div>
                <div class="gallery-row">
                {galleryTwo.map(imageSrc => (
                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
                </div>
            </MainSection>
            <MainSection>
                <div class="main-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="main-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.programsContent.pSectionThreeContent }} />
                    </div>
                    <div class="main-image">
                        <GatsbyImage image={sectionThreeImage} alt={queryContent.programsContent.pSectionThreeMainImage.title} />
                    </div>
                </div>
                <div class="gallery-row">
                {galleryThree.map(imageSrc => (
                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
                </div>
            </MainSection>
            <MainSection>
                <div class="main-row">
                    <div class="main-image">
                        <GatsbyImage image={sectionFourImage} alt={queryContent.programsContent.pSectionFourMainImage.title} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="main-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.programsContent.pSectionFourContent }} />
                    </div>
                </div>
                <div class="gallery-row">
                {galleryFour.map(imageSrc => (
                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
                </div>
            </MainSection>
            <MainSection>
                <div class="main-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="main-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.programsContent.pSectionFiveContent }} />
                    </div>
                    <div class="main-image">
                        <GatsbyImage image={sectionFiveImage} alt={queryContent.programsContent.pSectionFiveMainImage.title} />
                    </div>
                </div>
                <div class="gallery-row">
                {galleryFive.map(imageSrc => (
                    <GatsbyImage image={imageSrc.localFile.childImageSharp.gatsbyImageData} alt={imageSrc.title} />
                ))}
                </div>
            </MainSection>
            
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

const MainSection = styled.section`
    background-color: #fff;
    .main-row {
        display: flex;
        > div {
            &:first-child {
                width: 38%;
            }
            &:last-child {
                width: 62%;
            }
        }
        .main-image {
            .gatsby-image-wrapper {
                height: 100%;
            }
        }
        .main-content {
            padding: 40px;
            transition-delay: .6s;
            h2 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #012756;
                margin-top: -40px;
                margin-bottom: 0;
                text-align: center;
            }
            p {
                color: #012756;
                font-size: 14px;
                text-align: center;
                margin-bottom: 0;
            }
            .gatsby-image-wrapper {
                max-width: 200px !important;
                img {
                    max-width: 200px;
                    width: 100% !important;
                    height: auto !important;
                    object-fit: contain !important;
                }
            }
        }
    }
    .gallery-row {
        display: flex;
    }
    @media(max-width:1250px) {
        .main-row {
            .main-content {
                h2 {
                    font-size: 44px;
                    line-height: 1;
                    margin-top: -20px;
                }
                p {
                    br {
                        display: none;
                    }
                }
                .gatsby-image-wrapper {
                    max-width: 150px !important;
                    img {
                        max-width: 150px;
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        .main-row {
            flex-wrap: wrap;
            > div {
                &.main-content {
                    width: 100%;
                    order: 1;
                }
                &.main-image {
                    width: 100%;
                    order: 2;
                }
            }
        }
        .gallery-row {
            background-color: #000;
            flex-wrap: wrap;
            justify-content: center;
            .gatsby-image-wrapper {
                width: 50%;
            }
        }
    }
    @media(max-width:440px) {
        .main-row {
            .main-content {
                padding: 40px 20px;
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 132}) {
                content
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
                programsContent {
                    pSectionOneContent
                    pSectionOneMainImage {
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
                    pSectionOneImageGallery {
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    pSectionTwoContent
                    pSectionTwoMainImage {
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
                    pSectionTwoGallery {
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    pSectionThreeContent
                    pSectionThreeMainImage {
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
                    pSectionThreeGallery {
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    pSectionFourContent
                    pSectionFourMainImage {
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
                    pSectionFourGallery {
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                    pSectionFiveContent
                    pSectionFiveMainImage {
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
                    pSectionFiveGallery {
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `}
  render={data => <ProgramsPage data={data} {...props} />}
/>
);