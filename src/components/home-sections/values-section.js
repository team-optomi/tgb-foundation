import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ValuesSection = ({ data: { queryContent } }) => {

    const iconOne = getImage(queryContent.homePageContent.homeProvidingSection.hpColumnOneIcon.localFile.childImageSharp.gatsbyImageData)
    const iconTwo = getImage(queryContent.homePageContent.homeProvidingSection.hpColumnTwoIcon.localFile.childImageSharp.gatsbyImageData)
    const iconThree = getImage(queryContent.homePageContent.homeProvidingSection.hpColumnThreeIcon.localFile.childImageSharp.gatsbyImageData)
    const iconFour = getImage(queryContent.homePageContent.homeProvidingSection.hpColumnFourIcon.localFile.childImageSharp.gatsbyImageData)

    return(

        <MainSection>
            <div class="row-one">
                <div class="flex-row">
                    <h2>{queryContent.homePageContent.homeProvidingSection.homeProvidingTitle}</h2>
                    <div class="col-four">
                        <h3>{queryContent.homePageContent.homeProvidingSection.hpColumnOneTitle}</h3>
                        <GatsbyImage image={iconOne} alt={queryContent.homePageContent.homeProvidingSection.hpColumnOneIcon.title} />
                    </div>
                    <div class="col-four">
                        <h3>{queryContent.homePageContent.homeProvidingSection.hpColumnTwoTitle}</h3>
                        <GatsbyImage image={iconTwo} alt={queryContent.homePageContent.homeProvidingSection.hpColumnTwoIcon.title} />
                    </div>
                    <div class="col-four">
                        <h3>{queryContent.homePageContent.homeProvidingSection.hpColumnThreeTitle}</h3>
                        <GatsbyImage image={iconThree} alt={queryContent.homePageContent.homeProvidingSection.hpColumnThreeIcon.title} />
                    </div>
                    <div class="col-four">
                        <h3>{queryContent.homePageContent.homeProvidingSection.hpColumnFourTitle}</h3>
                        <GatsbyImage image={iconFour} alt={queryContent.homePageContent.homeProvidingSection.hpColumnFourIcon.title} />
                    </div>
                </div>
            </div>
            <div class="row-two">
                <div class="flex-row">
                    <h2>{queryContent.homePageContent.homeOurValuesSection.homeValuesTitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeOurValuesSection.homeValuesContent}} />
                </div>
            </div>
            <div class="row-three">
                <div class="flex-row">
                    <h2>{queryContent.homePageContent.homeImpactSection.homeImpactTitle}</h2>
                    <div class="col-five">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeImpactSection.hiColumnOne}} />
                    </div>
                    <div class="col-five">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeImpactSection.hiColumnTwo}} />
                    </div>
                    <div class="col-five">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeImpactSection.hiColumnThree}} />
                    </div>
                    <div class="col-five">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeImpactSection.hiColumnFour}} />
                    </div>
                    <div class="col-five">
                        <div dangerouslySetInnerHTML={{__html: queryContent.homePageContent.homeImpactSection.hiColumnFive}} />
                    </div>
                </div>
            </div>
        </MainSection>
        
    )

}

const MainSection = styled.section`
    .row-one {
        background-color: #012756;
        text-align: center;
        h2,
        h3,
        p {
            color: #8e8f91;
            margin-top: 0;
            margin-bottom: 0;
            transition-duration: .3s;
        }
        h3 {
            font-family: "Bodoni Classic";
            text-transform: uppercase;
            font-weight: 100;
            font-size: 16px;
            line-height: 1.3;
            letter-spacing: 1px;
        }
        .gatsby-image-wrapper {
            max-width: 100px;
            img {
                max-width: 100px; 
                object-fit: contain;
            }
        }
    }
    .row-two {
        background-color: #8e8f91;
        text-align: center;
        h2,
        h3,
        p {
            color: #012756;
            transition-duration: .3s;
        }
        h2 {
            margin-top: 0;
        }
        span.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 48px;
            font-weight: 100;
            line-height: 1.2; 
            display: block;
        }
    }
    .row-three {
        background-color: #012756;
        text-align: center;
        h2,
        h3,
        p {
            color: #8e8f91;
            transition-duration: .3s;
        }
        h2 {
            margin-top: 0;
        }
        p {
            font-family: "Bodoni Classic";
            text-transform: uppercase;
        }
        span.script-large {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 48px;
            font-weight: 100;
            line-height: 1.2; 
            text-transform: none;
            display: block;
        }
        span.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 28px;
            font-weight: 100;
            line-height: 1.2; 
            text-transform: none;
            display: block;
        }
    }
    .flex-row {
        max-width: 1620px;
        width: 100%;
        padding: 50px 20px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        h2 {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 90px;
            font-weight: 100;
            line-height: 1.2;
        }
    }
    .col-four {
        width: 25%;
        padding: 0 10px;
        margin-top: 20px;
        transition-duration: .3s;
    }
    .col-five {
        width: 20%;
        padding: 0 20px;
        transition-duration: .3s;
    }
    @media(max-width:1200px) {
        .col-five {
            width: 30%;
        }
    }
    @media(max-width:992px) {
        .col-four {
            width: 50%;
        }
        .col-five {
            width: 50%;
        }
        p {
            br {
                display: none;
            }
        }
    }
    @media(max-width: 530px) {
        .col-four {
            width: 100%;
        }
        .col-five {
            width: 100%;
        }
        .flex-row {
            h2 {
                font-size: 56px;
            }
        }
        .row-three {
            span.script-large {
                font-size: 36px;
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
                    homeProvidingSection {
                        homeProvidingTitle
                        hpColumnOneTitle
                        hpColumnOneIcon {
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
                        hpColumnTwoTitle
                        hpColumnTwoIcon {
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
                        hpColumnThreeTitle
                        hpColumnThreeIcon {
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
                        hpColumnFourTitle
                        hpColumnFourIcon {
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
                    }
                    homeOurValuesSection {
                        homeValuesTitle
                        homeValuesContent
                    }
                    homeImpactSection {
                        homeImpactTitle
                        hiColumnOne
                        hiColumnTwo
                        hiColumnThree
                        hiColumnFour
                        hiColumnFive
                    }
                }
            }
        }
      `}
      render={data => <ValuesSection data={data} {...props} />}
    />
  );