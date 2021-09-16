import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Slider from 'react-slick'

import Layout from "../../components/layout-v2"
import Seo from "../../components/seo"

const LovingOurNeighbors = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    const wordGroup = getImage(queryContent.programSingleMain.psWordGroup.localFile.childImageSharp.gatsbyImageData)

    const settings = {
        dots: false,
        arrows: true,
		infinite: true,
		speed: 500,
	    slidesToShow: 3,
        slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 6000,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				}
			},
		]
    };

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
                        <div>
                            <h1>{queryContent.title}</h1>
                            <p>{queryContent.programSingleSide.psSubtitle}</p>
                        </div>
                    </div>
                </div>
            </HeroSection>
            <GiveSection>
                <div class="give-image">
                    <div class="give-background">
                        <GatsbyImage image={wordGroup} alt={queryContent.programSingleMain.psWordGroup.title} />
                    </div>
                    <div class="button-row">
                        <p>{queryContent.programSingleMain.psGiveSubheading}</p>
                        <Link to="/give/">Give</Link>
                    </div>
                </div>
                <CopySection>
                    <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                </CopySection>
            </GiveSection>
            <SliderSection>
                <div class="slider-row">
                    <Slider {...settings}>
                        {queryContent.programSingleMain.psProgramGallery.map(src => (
                        <div class="program-slide">
                            <GatsbyImage image={src.localFile.childImageSharp.gatsbyImageData} alt={src.title}  className={"program-slide-image"} />
                        </div>
                        ))}          
                    </Slider>
                </div>
            </SliderSection>
        </Layout>
    )

}

const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .hero-background {
        position: absolute;
        width: 100%;
        height: 100vh;
        .gatsby-image-wrapper {
            width: 100%;
        }
        img {
            width: 100%;
            height: 100vh;
        }
    }
    .hero-icon {
        position: absolute;
        height: 100vh;
        top: -150px;
        right: -100px;
        opacity: .3;
        .gatsby-image-wrapper {
            width: 100%;
            height: 130vh;
        }
        img {
            width: 100%;
            height: 130vh;
        }
    }
    .hero-content {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        > div {
            max-width: 1340px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            > div {
                max-width: 600px;
                position: relative;
                padding: 20px;
                margin-left: auto;
            }
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #fff;
                margin-top: 0;
                margin-bottom: 0;
                text-transform: lowercase;
                text-align: center;
            }
            p {
                font-family: "Bodoni Classic";
                color: #fff;
                font-weight: 100;
                font-size: 22px;
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

const CopySection = styled.section`
    background-color: #fff;
    padding: 50px;
    width: 60%;
    p, li {
        font-family: "Bodoni Classic";
        color: rgb(1, 39, 86);
        font-size: 24px;
        line-height: 1.2;
    }
    @media(max-width: 1090px) {
        order: 1;
        width: 100%;
    }
    @media(max-width:420px) {
        padding: 50px 20px;
    }
`

const GiveSection = styled.section`
    background-color: #828588;
    display: flex;
    .give-image {
        width: 40%;
        padding: 50px 0;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .button-row {
            position: relative;
            max-width: 350px;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            p {
                font-family: "Bodoni Classic";
                font-size: 22px;
                color: #fff;
                line-height: 1.2;
                text-align: center;
                margin-bottom: 10px;
            }
            a {
                background-color: rgb(255, 255, 255);
                padding: 10px 30px;
                border-radius: 35px;
                color: rgb(10, 39, 86);
                font-family: sans-serif;
                font-weight: bold;
                font-size: 14px;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 1px;
                display: inline-block;
            }
        }
    }
    @media(max-width: 1090px) {
        flex-wrap: wrap;
        .give-image {
            order: 2;
            width: 100%;
            .give-background {
                max-width: 800px;
            }
        }
    }
`

const SliderSection = styled.section`
    background-color: #000;
    .slider-row {
        margin-bottom: 100px;
        .program-slide {
            height: 400px;
            .program-slide-image {
                height: 100%;
            }
        }
        .slick-prev {
            top: calc(50% - 25px);
            left: 20px;
            right: auto;
            position: absolute;
            z-index: 2;
            height: 30px;
            width: 30px;
            color: transparent;
            background: transparent;
            border: none;
            border-right: 7px solid #fff;
            border-top: 7px solid #fff;
            transform: rotate(-135deg);
            opacity: .5;
            transition-duration: .3s;
            outline: 0 !important;
        }
        .slick-prev:hover {
            opacity: 1;
            cursor: pointer;
        }
        .slick-prev:before,
        .slick-prev:after {
            display: none;
        }
        .slick-next {
            top: calc(50% - 25px);
            left: auto;
            right: 20px;
            position: absolute;
            z-index: 2;
            height: 30px;
            width: 30px;
            color: transparent;
            background: transparent;
            border: none;
            border-right: 7px solid #fff;
            border-top: 7px solid #fff;
            transform: rotate(45deg);
            opacity: .5;
            transition-duration: .3s;
            outline: 0 !important;
        }
        .slick-next:hover {
            opacity: 1;
            cursor: pointer;
        }
        .slick-next:before,
        .slick-next:after {
            display: none;
        }
    }
`

export default LovingOurNeighbors

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 564}) {
            title
            content
            featuredImage {
                node {
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
            seo {
                title
                metaDesc
                opengraphImage {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1800) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
            }
            programSingleSide {
                psSubtitle
                psBackgroundIcon {
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
            }
            programSingleMain {
                psWordGroup {
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
                psGiveSubheading
                psProgramGallery {
                    title
                    localFile {
                        childImageSharp {
                            gatsbyImageData (
                                width: 900
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