import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const SuccessStoriesPage = ({ data: { queryContent, successStories } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    const storyMap = successStories.edges

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
                            <p>We’ve made a difference in so many ways...</p>
                        </div>
                    </div>
                </div>
            </HeroSection>
            <ContentSection>
                <div class="main-row">
                    <div class="main-content" dangerouslySetInnerHTML={{ __html: queryContent.content}} />
                </div>
                <div class="story-loop">
                    {storyMap.map(story => (
                        <div class="story-col">
                            <a href={`/success-story/${story.node.slug}`}>
                                <GatsbyImage image={story.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={story.node.featuredImage.node.title} />
                                <div class="overlay">
                                    <h2>{story.node.title}</h2>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )

}

export default SuccessStoriesPage

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

const ContentSection = styled.section`
    background-color: #fff;
    .main-row {
        max-width: 1180px;
        padding: 60px 20px;
        margin: 0 auto;
        text-align: center;
        p {
          font-family: "Bodoni Classic";
          font-weight: 100;
          font-size: 20px;
          line-height: 1.3;
        }
    }
    .story-loop {
        background-color: rgba(1, 39, 86, 1);
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        .story-col {
            position: relative;
            width: 33.33%;
            height: 500px;
            .gatsby-image-wrapper {
                height: 100%;
                img {
                    height: 100%;
                }
            }
            .overlay {
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                background-color: rgba(1, 39, 86, 0);
                transition-duration: 0.5s;
                &:hover {
                    background-color: rgba(1, 39, 86, 0.5);
                }
            }
            a {
                text-decoration: none;
                color: #fff;
                width: 100%;
                text-align: center;
                h2 {
                    font-family: "Stay Bright Script";
                    width: 100%;
                    font-size: 72px;
                    color: #fff;
                    font-weight: 100;
                    line-height: 1.2;
                    text-shadow: 1px 1px 1px rgba(0,0,0,.5);
                }
            }
        }
    }
    @media(max-width:1100px) {
        .story-loop {
            .story-col {
                width: 50%;
            }
        }
    }
    @media(max-width:767px) {
        .story-loop {
            .story-col {
                width: 100%;
            }
        }
        .main-row {
            p {
                font-size: 16px;
            }
        }
    }
`

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 2442}) {
            title
            content
            featuredImage {
                node {
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
        }
        successStories: allWpSuccessStory(sort: {fields: date, order: DESC}) {
            edges {
              node {
                title
                slug
                featuredImage {
                    node {
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
                }
              }
            }
        }
    }
`