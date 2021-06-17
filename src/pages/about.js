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
                <div class="hero-background">
                    <GatsbyImage image={heroImage} alt={queryContent.featuredImage.node.title} />
                </div>
                <div class="hero-content">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                </div>
                <div class="hero-sub">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.aboutHeroSub}} />
                </div>
            </HeroSection>
            <SectionOne>
                <div class="section-background">
                    <GatsbyImage image={sectionOne} alt={queryContent.aboutPageContent.aboutSectionOneBackground.title} />
                </div>
                <div class="section-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.aboutSectionOneContent}} />
                    </div>
                </div>
            </SectionOne>
            <StewardsSection>
                <h2>foundation stewards</h2>
                <hr/>
                <div class="flex-row">
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionOneContent}} />
                    </div>
                    <div class="section-background">
                        <GatsbyImage image={stewardOne} alt={queryContent.aboutPageContent.foundationStewards.fSectionOneImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div class="section-background">
                        <GatsbyImage image={stewardTwo} alt={queryContent.aboutPageContent.foundationStewards.fSectionTwoImage.title} />
                    </div>
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionTwoContent}} />
                    </div>
                </div>
                <div class="flex-row">
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionThreeContent}} />
                    </div>
                    <div class="section-background">
                        <GatsbyImage image={stewardThree} alt={queryContent.aboutPageContent.foundationStewards.fSectionThreeImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div class="section-background">
                        <GatsbyImage image={stewardFour} alt={queryContent.aboutPageContent.foundationStewards.fSectionFourImage.title} />
                    </div>
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionFourContent}} />
                    </div>
                </div>
                <div class="flex-row">
                    <div class="section-content">
                        <div dangerouslySetInnerHTML={{ __html: queryContent.aboutPageContent.foundationStewards.fSectionFiveContent}} />
                    </div>
                    <div class="section-background">
                        <GatsbyImage image={stewardFive} alt={queryContent.aboutPageContent.foundationStewards.fSectionFiveImage.title} />
                    </div>
                </div>
                <div class="flex-row">
                    <div class="section-background">
                        <GatsbyImage image={stewardSix} alt={queryContent.aboutPageContent.foundationStewards.fSectionSixImage.title} />
                    </div>
                    <div class="section-content">
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
        }
        p {
            text-align: right;
            font-size: 13px;
            color: #8e8f91;
        }
        p.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 24px;
            font-weight: 100;
            line-height: 1.2;
            color: #8e8f91;
            text-align: center;
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
        }
    }
    .hero-sub {
        width: 100%;
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
            }
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