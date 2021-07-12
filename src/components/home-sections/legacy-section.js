import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const LegacySection = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 7}) {
                homePageContent {
                    homeLegacySection {
                        legacySectionTitle
                        legacySectionContent
                    }
                    homeBottomFullImage  {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 2560
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const bottomImage = getImage(data.queryContent.homePageContent.homeBottomFullImage.localFile.childImageSharp.gatsbyImageData)

    return(

        <MainSection>
            <div class="flex-row">
                <h2
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                >{data.queryContent.homePageContent.homeLegacySection.legacySectionTitle}</h2>
                <div 
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeLegacySection.legacySectionContent}} />
            </div>
            <GatsbyImage image={bottomImage} alt={data.queryContent.homePageContent.homeBottomFullImage.title} />
        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    width: 100%;
    background-color: #fff;
    .flex-row {
        max-width: 1320px;
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
        div {
            transition-delay: .6s;
        }
        h2 {
            text-align: center;
            font-family: "Stay Bright Script";
            color: #8e8f91;
            font-size: 150px;
            font-weight: 100;
            line-height: 1.2;
            margin-top: 0;
            transition-delay: .6s;
        }
        p {
            font-family: "Bodoni Classic";
            font-size: 22px;
            line-height: 1.2;
            color: #8e8f91;
        }
        span.stay-bright {
            font-family: "Stay Bright Script";
            width: 100%;
            font-size: 42px;
            font-weight: 100;
            line-height: 1.2; 
            text-transform: none;
        }
        a.blue-button {
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
            display: inline-block;
        }
    }
    @media(max-width:1200px) {
        .flex-row {
            h2 {
                font-size: 90px;
            }
        }
        
    }
    @media(max-width:767px) {
        .flex-row {
            h2 {
                font-size: 44px;
            }
        }
    }
`

export default LegacySection