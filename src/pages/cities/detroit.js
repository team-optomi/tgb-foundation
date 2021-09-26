import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Slider from 'react-slick'

import Layout from "../../components/layout-v2"
import Seo from "../../components/seo"

const DetroitPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    const stateImage = getImage(queryContent.cityPageContent.stateThumbnail.localFile.childImageSharp.gatsbyImageData)
    const bagImage = getImage(queryContent.cityPageContent.bagImage.localFile.childImageSharp.gatsbyImageData)
    const heartImage = getImage(queryContent.cityPageContent.cityHeartIcon.localFile.childImageSharp.gatsbyImageData)


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
                        <h1>{queryContent.title}</h1>
                        <p>{queryContent.cityPageContent.citySubtitle}</p>
                    </div>
                </div>
            </HeroSection>
            <MainSection>
                <div class="flex-row">
                    <div class="half-col padding">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                    </div>
                    <div class="half-col image">
                        <GatsbyImage image={stateImage} alt={queryContent.cityPageContent.stateThumbnail.title} />
                    </div>
                    <div class="full-col padding">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.cityPageContent.cityQuoteSection }} />
                    </div>
                    <div class="half-col padding">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.cityPageContent.cityVolunteerOpportunities }} />
                        <div dangerouslySetInnerHTML={{ __html: queryContent.cityPageContent.cityUpcomingProjects }} />
                    </div>
                    <div class="half-col padding">
                        <GatsbyImage image={bagImage} alt={queryContent.cityPageContent.bagImage.title} />
                    </div>
                    <div class="med-col padding">
                        <div class="med-col-copy" dangerouslySetInnerHTML={{ __html: queryContent.cityPageContent.cityRelatedSearches }} />
                        <GatsbyImage class="heart-icon" image={heartImage} alt={queryContent.cityPageContent.cityHeartIcon.title} />
                    </div>
                </div>
            </MainSection>
            <FooterSection>
                <div class="form-row">
                    <form name="Brewton Email" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                        <input type="hidden" name="form-name" value="Brewton Email" aria-label="Input"/>
                        <div class="flex-row">
                            <div class="col-full">
                                <h2>Give Back With Us!</h2>
                            </div>
                            <div class="col-three">
                                <p class="hidden">
                                    <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                                </p>
                                <label htmlFor="email"><span>Email Address</span><input type="email" name="email" aria-label="Input" required/></label>
                            </div>
                            <div class="col-three">
                                <label htmlFor="first_name"><span>First Name</span><input type="text" name="first_name" aria-label="Input" required/></label> 
                            </div>
                            <div class="col-three">
                                <label htmlFor="last_name"><span>Last Name</span><input type="text" name="last_name" aria-label="Input" required/></label> 
                            </div>
                            <div class="col-full">
                                <button type="submit" name="submit" class={"submit"} aria-label="Send">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="slider-row">
                    <Slider {...settings}>
                        {queryContent.cityPageContent.cityImageGallery.map(src => (
                        <div class="city-slide">
                            <GatsbyImage image={src.localFile.childImageSharp.gatsbyImageData} alt={src.title}  className={"city-slide-image"} />
                        </div>
                        ))}          
                    </Slider>
                </div>
            </FooterSection>
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
        .gatsby-image-wrapper {
            width: 100%;
        }
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
        z-index: 3;
        > div {
            max-width: 1620px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 600px;
                font-weight: 100;
                line-height: 1.2;
                color: #fff;
                margin-top: 0;
                margin-bottom: -150px;
                text-align: right;
                opacity: .3;
                position: relative;
                right: -100px;
            }
            p {
                font-family: "Bodoni Classic";
                color: #fff;
                font-weight: 100;
                font-size: 24px;
                text-transform: uppercase;
                position: relative;
                right: 300px;
                line-height: 1.3;
                letter-spacing: 2px;
                margin-top: 0;
                margin-bottom: 0;
                text-align: right;
            }
        }
    }
    @media(max-width:1070px) {
        .hero-content {
            > div {
                h1 {
                    font-size: 240px;
                    margin-bottom: 0;
                    right: auto;
                    text-align: center;
                }
                p {
                    right: auto;
                    text-align: center;
                }
            }
        }
    }
    @media(max-width:767px) {
        .hero-content {
            > div {
                h1 {
                    font-size: 72px;
                }
            }
        }
    }
`

const MainSection = styled.section`
    background-color: #fff;
    overflow: hidden;
    .flex-row {
        max-width: 1340px;
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .half-col {
            width: 50%;
        }
        .full-col {
            width: 100%;
            text-align: center;
        }
        .med-col {
            width: 100%;
            padding-bottom: 100px !important;
            .med-col-copy {
                width: 70%;
                margin-left: auto;
            }
            .heart-icon {
                position: absolute;
                left: -100px;
                top: -10px;
                max-width: 800px;
            }
        }
        .padding {
            padding-top: 50px;
            padding-bottom: 50px;
            position: relative;
            z-index: 2;
        }
        .image {
            position: relative;
            z-index: 1;
            right: -50px;
            top: -50px;
            .gatsby-image-wrapper {
                transform: scale(1.4);
            }
        }
        p {
            font-family: "Bodoni Classic";
            color: rgb(1, 39, 86);
            font-size: 20px;
            line-height: 1.2;
        }
    }
    @media(max-width:1070px) {
        .flex-row {
            .half-col {
                width: 100%;
                text-align: center;
                &:first-child {
                    text-align: left;
                }
            }
            .med-col {
                text-align: center;
                width: 100%;
                padding-bottom: 0 !important;
                .med-col-copy {
                    width: 100%;
                }
                .heart-icon {
                    display: none;
                }
            }
        }
        .padding {
            padding-bottom: 0 !important;
        }
        .image {
            right: auto !important;
            top: auto !important;
            padding-top: 50px;
            .gatsby-image-wrapper {
                transform: scale(1) !important;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
                display: block;
            }
        }
    }
`

const FooterSection = styled.section`
    background-color: #fff;
    .form-row {
        position: relative;
        width: 100%;
        background-color: #fff;
        padding-top: 50px;
        padding-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        .top-row {
            max-width: 1420px;
            width: 100%;
            padding: 0 20px;
            h3 {
                font-family: "Bodoni Classic";
                color: #012756;
                font-weight: 100;
                font-size: 16px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                max-width: 540px;
                text-align: center;
            }
            p {
                text-align: center;
                font-size: 14px;
                color: #8e8f91;
                max-width: 540px;
            }
        }
        .bottom-row {
            max-width: 1420px;
            width: 100%;
            padding: 0 20px;
            display: flex;
            > div {
                margin-left: auto;
                max-width: 440px;
                width: 100%;
            }
            h3 {
                font-family: "Stay Bright Script";
                color: #012756;
                font-weight: 100;
                font-size: 32px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                max-width: 440px;
                text-align: center;
            }
            p {
                text-align: center;
                font-size: 14px;
                color: #8e8f91;
                max-width: 440px;
            }
        }
        form {
            max-width: 1620px;
            width: 100%;
            p {
                &.hidden {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 0;
                    width: 0;
                    z-index: -1;
                }
            }
            .flex-row {
                max-width: 1340px;
                width: 100%;
                padding: 0px 20px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                .col-full {
                    width: 100%;
                    h2 {
                        text-align: center;
                        font-family: "Stay Bright Script";
                        color: #012756;
                        font-size: 100px;
                        font-weight: 100;
                        line-height: 1.2;
                        margin-top: 0;
                    }
                    button {
                        background-color: #012756;
                        padding: 10px 30px;
                        border-radius: 35px;
                        color: #fff;
                        font-family: sans-serif;
                        font-size: 14px;
                        font-weight: bold;
                        text-transform: uppercase;
                        text-decoration: none;
                        letter-spacing: 1px;
                        display: block;
                        margin: 35px auto;
                        border: none;
                        &:hover {
                            cursor: pointer;
                        }
                    }
                }
                .col-three {
                    width: 33.33%;
                    padding: 20px;
                    h2 {
                        text-align: center;
                        font-family: "Stay Bright Script";
                        color: #012756;
                        font-size: 150px;
                        font-weight: 100;
                        line-height: 1.2;
                        margin-top: 0;
                    }
                    label {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        input {
                            width: 100%;
                            order: 1;
                            padding: 10px 20px;
                            background-color: #fff;
                            border: 2px solid #012756;
                            outline: 0;
                        }
                        span {
                            order: 2;
                            font-family: "Bodoni Classic";
                            font-size: 24px;
                            margin-top: 10px;
                            color: #012756;
                        }
                    }
                }
            }
        }
        @media(max-width:1600px) {
            .top-row {
                max-width: 1420px;
            }
            .bottom-row {
                max-width: 1420px;
            }
            form {
                .flex-row {
                    max-width: 1420px;
                    .col-four {
                        h2 {
                            font-size: 100px;
                        }
                    }
                }
            }
        }
        @media(max-width:1400px) {
            .top-row {
                max-width: 1220px;
            }
            .bottom-row {
                max-width: 1220px;
            }
            form {
                .flex-row {
                    max-width: 1220px;
                    .col-three {
                        padding: 0 20px;
                        h2 {
                            font-size: 80px;
                        }
                        input {
                            width: 100%;
                        }
                    }
                }
            }
        }
        @media(max-width:1000px) {
            form {
                .flex-row {
                    flex-wrap: wrap;
                    justify-content: center;
                    .col-full {
                        h2 {
                            font-size: 100px;
                        }
                    }
                    .col-three {
                        width: 30%;
                        margin-bottom: 20px;
                    }
                }
            }
        }
        @media(max-width:900px) {
            .top-row {
                > div {
                    h3 {
                        margin: 0 auto;
                    }
                    p {
                        margin: 0 auto;
                    }
                }
            }
            .bottom-row {
                > div {
                    margin-right: auto;
                }
            }
        }
        @media(max-width:767px) {
            form {
                .flex-row {
                    .col-full {
                        h2 {
                            font-size: 72px;
                        }
                    }
                    .col-three {
                        width: 100%;
                    }
                }
            }
        }
    }
    .slider-row {
        margin-bottom: 100px;
        .city-slide {
            height: 400px;
            .city-slide-image {
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

export default DetroitPage

export const pageQuery = graphql`
    query {
        queryContent: wpCity(databaseId: {eq: 503}) {
            title
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
            cityPageContent {
                citySubtitle
                cityQuoteSection
                cityVolunteerOpportunities
                cityUpcomingProjects
                cityRelatedSearches
                stateThumbnail {
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
                bagImage {
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
                cityHeartIcon {
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
                cityImageGallery {
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