import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const AboutPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
    const sectionOne = getImage(queryContent.aboutPageContent.aboutSectionOneBackground.localFile.childImageSharp.gatsbyImageData)
    const stewardOne = getImage(queryContent.aboutPageContent.foundationStewards.fSectionOneImage.localFile.childImageSharp.gatsbyImageData)
    const stewardTwo = getImage(queryContent.aboutPageContent.foundationStewards.fSectionTwoImage.localFile.childImageSharp.gatsbyImageData)
    const stewardThree = getImage(queryContent.aboutPageContent.foundationStewards.fSectionThreeImage.localFile.childImageSharp.gatsbyImageData)
    const stewardFour = getImage(queryContent.aboutPageContent.foundationStewards.fSectionFourImage.localFile.childImageSharp.gatsbyImageData)
    const stewardFive = getImage(queryContent.aboutPageContent.foundationStewards.fSectionFiveImage.localFile.childImageSharp.gatsbyImageData)
    const stewardSix = getImage(queryContent.aboutPageContent.foundationStewards.fSectionSixImage.localFile.childImageSharp.gatsbyImageData)
  
    return(
  
        <Layout>
            <SEO 
            title={"About page"} 
            description={"SEO description"}
            />
            <HeroSection>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="hero-background">
                    <GatsbyImage image={heroImage} alt={queryContent.featuredImage.node.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="hero-content">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="hero-sub">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.aboutHeroSub}} />
                </div>
            </HeroSection>
            <SectionOne>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="section-background">
                    <GatsbyImage image={sectionOne} alt={queryContent.aboutPageContent.aboutSectionOneBackground.title} />
                </div>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                class="section-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.aboutSectionOneContent}} />
                    </div>
                </div>
            </SectionOne>
            <StewardsSection>
                <h2
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >foundation stewards</h2>
                <hr
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                />
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionOneContent}} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardOne} alt={queryContent.aboutPageContent.foundationStewards.fSectionOneImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardTwo} alt={queryContent.aboutPageContent.foundationStewards.fSectionTwoImage.title} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionTwoContent}} />
                    </div>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionThreeContent}} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardThree} alt={queryContent.aboutPageContent.foundationStewards.fSectionThreeImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardFour} alt={queryContent.aboutPageContent.foundationStewards.fSectionFourImage.title} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionFourContent}} />
                    </div>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionFiveContent}} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardFive} alt={queryContent.aboutPageContent.foundationStewards.fSectionFiveImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div 
                    data-sal="slide-right"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-background">
                        <GatsbyImage image={stewardSix} alt={queryContent.aboutPageContent.foundationStewards.fSectionSixImage.title} />
                    </div>
                    <div 
                    data-sal="slide-left"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionSixContent}} />
                    </div>
                </div>
            </StewardsSection>
        </Layout>
        
    )
  
}

const HeroSection = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .hero-background {
        width: 60%;
        height: 100vh;
        transition-delay: .6s;
        .gatsby-image-wrapper {
            height: 100vh;
            img {
                width: 100%;
                height: 100vh;
            }
        }
    }
    .hero-content {
        width: 40%;
        height: 100vh;
        background-color: #fff;
        transition-delay: .9s;
        > div {
            padding: 0 20px;
        }
        .gatsby-image-wrapper {
            max-width: 350px !important;
            width: 100% !important;
            margin: 0 auto;
            display: block;
        }
        img {
            max-width: 350px;
            width: 100%;
            object-fit: contain !important;
            margin: 0 auto;
        }
        h1 {
            font-family: "Bodoni Classic";
            color: #012756;
            text-transform: uppercase;
            font-weight: 100;
            font-size: 20px;
            line-height: 1.3;
            letter-spacing: 1px;
            text-align: center;
            margin-top: 0;
            margin-bottom:0;
            transition-duration: .3s;
        }
        p {
            text-align: right;
            font-size: 13px;
            color: #8e8f91;
            transition-duration: .3s;
            a {
                color: #8e8f91;
                text-decoration: none;
                &:hover {
                    color: #012756;
                }
            }
        }
        p.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 24px;
            font-weight: 100;
            line-height: 1.2;
            color: #8e8f91;
            text-align: center;
            transition-duration: .3s;
        }
        h3.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 72px;
            font-weight: 100;
            color: #012756;
            text-align: right;
            margin-top: 0;
            margin-top: 0;
            transition-duration: .3s;
        }
    }
    .hero-sub {
        width: 100%;
        transition-delay: .6s;
        background-color: #fff;
        padding: 35px 20px;
        > div {
            max-width: 1580px;
            width: 100%;
            margin: 0 auto;
            h2 {
                font-family: "Bodoni Classic";
                color: #012756;
                text-transform: uppercase;
                font-weight: 100;
                font-size: 20px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom:0;
                transition-duration: .3s;
            }
            h3 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 32px;
                font-weight: 100;
                line-height: 1.2;
                color: #8e8f91;
                margin-top: 0;
                margin-bottom:0;
                transition-duration: .3s;
            }
        }
    }
    @media(max-width:1700px) {
        .hero-content {
            .gatsby-image-wrapper {
                max-width: 250px !important;
            }
            img {
                max-width: 250px;
            }
            h1 {
                font-size: 16px;
            }
            p {
                font-size: 12px;
                margin-bottom: 15px;
            }
            p.stay-bright {
                font-size: 20px;
            }
        }
    }
    @media(max-width:1400px) {
        .hero-background {
            height: auto;
            min-height: 100vh;
            .gatsby-image-wrapper {
                height: 100%;
                > div {
                    height: 100%;
                }
                img {
                    height: 100%
                }
            }
        }
        .hero-content {
            height: auto;
            min-height: 100vh;
            h1 {
                font-size: 12px;
            }
            p.stay-bright {
                font-size: 16px;
            }
        }
    }
    @media(max-width:900px) {
        .hero-sub {
            > div {
                text-align: center;
            }
        }
    }
    @media(max-width:768px) {
        .hero-content {
            padding-top: 80px;
        }
    }
    @media(max-width:750px) {
        .hero-background {
            width: 100%;
            order: 2;
        }
        .hero-content {
            width: 100%;
            order: 1;
            p {
                text-align: center;
            }
        }
        .hero-sub {
            order: 3;
        }
    }
`

const SectionOne = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    .section-background {
        position: absolute;
        width: 100%;
        height: 100vh;
        transition-delay: .6s;
        img {
            width: 100%;
            height: 100vh;
        }
    }
    .section-content {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        transition-delay: .9s;
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
            }
            h2 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #8e8f91;
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
    @media(max-width:600px) {
        .section-content {
            > div {
                h2 {
                    font-size: 36px;
                }
            }
        }
    }
`

const StewardsSection = styled.section`
    width: 100%;
    background-color: #fff;
    padding-top: 100px;
    h2 {
        font-family: "Stay Bright Script";
        width: 100%;
        font-size: 72px;
        font-weight: 100;
        line-height: 1.2;
        color: #012756;
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
        padding: 0 20px;
    }
    hr {
        max-width: 840px;
        padding: 0 20px;
        margin: 50px auto;
        background-color: #012756;
        height: 2px;
        margin-top: 20px;
    }
    .flex-row {
        width: 100%;
        display: flex;
        &:nth-child(even) {
            .section-content {
                text-align: right;
            }
        }
        > div {
            width: 50%;
            transition-delay: .6s;
        }
        .section-content {
            padding: 150px 100px;
            h3 {
                font-family: "Bodoni Classic";
                color: #012756;
                font-weight: 100;
                font-size: 20px;
                line-height: 1.3;
                margin-top: 0;
                margin-bottom: 0;
            }
            h4 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 44px;
                font-weight: 100;
                line-height: 1.2;
                color: #012756;
                margin-top: 0;
                margin-bottom: 0;
            }
            p {
                span.stay-bright {
                    font-family: "Stay Bright Script";
                    width: 100%;
                    font-size: 36px;
                    font-weight: 100;
                    line-height: 1.2;
                    color: #012756;
                    padding: 0 5px;
                }
            }
        }
    }
    @media(max-width:1200px) {
        .flex-row {
            .section-content {
                padding: 75px;
            }
            .section-background {
                .gatsby-image-wrapper {
                    height: 100%;
                }
            }
        }
    }
    @media(max-width:767px) {
        .flex-row {
            flex-wrap: wrap;
            > div {
                width: 100%;
            }
            .section-content {
                order: 1;
                text-align: center !important;
            }
            .section-background {
                order: 2;
            }
        }
    }
    @media(max-width:600px) {
        h2 {
            font-size: 36px;
        }
        .flex-row {
            .section-content {
                padding: 40px 20px;
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
          queryContent: wpPage(databaseId: {eq: 92}) {
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
            aboutPageContent {
              aboutHeroSub
              aboutSectionOneContent
              aboutSectionOneBackground {
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
              foundationStewards {
                fSectionOneContent
                fSectionOneImage {
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
                fSectionTwoContent
                fSectionTwoImage {
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
                fSectionThreeContent
                fSectionThreeImage {
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
                fSectionFourContent
                fSectionFourImage {
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
                fSectionFiveContent
                fSectionFiveImage {
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
                fSectionSixContent
                fSectionSixImage {
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
            }
          }
        }
      `}
      render={data => <AboutPage data={data} {...props} />}
    />
  );