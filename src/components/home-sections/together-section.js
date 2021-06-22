import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const TogetherSection = ({ data: { queryContent } }) => {

    const imageLeft = getImage(queryContent.homePageContent.homeTogetherSection.htLeftColumnBackground.localFile.childImageSharp.gatsbyImageData)
    const imageRight = getImage(queryContent.homePageContent.homeTogetherSection.htRightColumnBackground.localFile.childImageSharp.gatsbyImageData)

    return(

        <MainSection>
            <h2>{queryContent.homePageContent.homeTogetherSection.homeTogetherTitle}</h2>
            <div class="box-row">
                <div class="left-col">
                    <GatsbyImage image={imageLeft} alt={queryContent.homePageContent.homeTogetherSection.htLeftColumnBackground.title} />
                    <div class="left-col-content" dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeTogetherSection.htLeftColumnContent}} />
                </div>
                <div class="right-col">
                    <div class="top-row">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeTogetherSection.htRightColumnTop}} />
                    </div>
                    <div class="bottom-row">
                        <GatsbyImage image={imageRight} alt={queryContent.homePageContent.homeTogetherSection.htRightColumnBackground.title} />
                        <div class="right-col-content" dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeTogetherSection.htRightColumnContent}} />
                    </div>
                </div>
            </div>
        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 50px 20px;
    h2 {
        padding: 0 20px;
        text-align: center;
        font-family: "Stay Bright Script";
        color: #8e8f91;
        font-size: 150px;
        font-weight: 100;
        line-height: 1.2;
        transition-duration: .3s;
    }
    .box-row {
        max-width: 1320px;
        width: 100%;
        margin: 0 auto;
        background-color: #012756;
        display: flex;
        a.white-button {
            background-color: #fff;
            padding: 10px 30px;
            border-radius: 35px;
            color: #0a2756;
            font-family: sans-serif;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            display: inline-block;
        }
        .left-col {
            position: relative;
            transition-duration: .3s;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #012756;
                opacity: .8;
                z-index: 2;
            }
            .gatsby-image-wrapper {
                z-index: 1;
                height: 100%;
            }
            .left-col-content {
                position: absolute;
                left: 0;
                top: 50%;
                width: 100%;
                z-index: 3;
                text-align: center;
                padding: 0 10px;
                p {
                    color: #8e8f91;
                    margin-bottom: 10px;
                }
            }
        }
        .right-col {
            transition-duration: .3s;
            .top-row {
                padding: 30px 10px;
                padding-top: 0;
                text-align: center;
                h3 {
                    font-family: "Stay Bright Script";
                    color: #8e8f91;
                    font-size: 90px;
                    font-weight: 100;
                    line-height: 1.2;
                    margin-top: 0;
                }
                p {
                    color: #8e8f91;
                    margin-bottom: 10px;
                }
            }
            .bottom-row {
                position: relative;
                &:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #012756;
                    opacity: .8;
                    z-index: 2;
                }
                .gatsby-image-wrapper {
                    z-index: 1;
                }
                .right-col-content {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    width: 100%;
                    z-index: 3;
                    text-align: center;
                    padding: 0 10px;
                    p {
                        color: #8e8f91;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    @media(max-width:1200px) {
        h2 {
            font-size: 90px;
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 44px;
        }
        .box-row {
            flex-wrap: wrap;
            .left-col {
                width: 100%;
            }
            .right-col {
                width: 100%;
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 7}) {
                homePageContent {
                    homeTogetherSection {
                        homeTogetherTitle
                        htLeftColumnContent
                        htLeftColumnBackground {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 928
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                        htRightColumnTop
                        htRightColumnContent
                        htRightColumnBackground {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 968
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
      render={data => <TogetherSection data={data} {...props} />}
    />
  );