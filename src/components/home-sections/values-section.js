import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const ValuesSection = () => {

    const data = useStaticQuery(graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 7}) {
                homePageContent {
                    homeProvidingSection {
                        homeProvidingTitle
                        homeProvidingIcons {
                            homeProvidingIconColTitle
                            homeProvidingIconColLink
                            homeProvidingIconColIcon {
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
                    }
                    homeOurValuesSection {
                        homeValuesTitle
                        homeValuesContent
                    }
                    fundraiserSection
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
    `)

    return(

        <MainSection>
            <div class="row-one">
                <div class="flex-row">
                    <h2
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >
                        {data.queryContent.homePageContent.homeProvidingSection.homeProvidingTitle}
                    </h2>
                    {data.queryContent.homePageContent.homeProvidingSection.homeProvidingIcons.map(icon => {
                        return(
                        <div 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                        class="col-five image-adjust">
                            <Link to={icon.homeProvidingIconColLink}>
                            <h3>{icon.homeProvidingIconColTitle}</h3>
                            <GatsbyImage image={icon.homeProvidingIconColIcon.localFile.childImageSharp.gatsbyImageData} alt={icon.homeProvidingIconColIcon.title} />
                            </Link>                    
                        </div>
                        )
                    })}
                </div>
            </div>
            <div class="row-two">
                <div class="flex-row">
                    <h2
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >{data.queryContent.homePageContent.homeOurValuesSection.homeValuesTitle}</h2>
                    <div 
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeOurValuesSection.homeValuesContent}} />
                </div>
            </div>
            <div class="fundraiser-row" dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.fundraiserSection}} />
            <div class="row-three">
                <div class="flex-row">
                    <h2
                    data-sal="fade"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    >{data.queryContent.homePageContent.homeImpactSection.homeImpactTitle}</h2>
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <div dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeImpactSection.hiColumnOne}} />
                    </div>
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <div dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeImpactSection.hiColumnTwo}} />
                    </div>
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <div dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeImpactSection.hiColumnThree}} />
                    </div>
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <div dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeImpactSection.hiColumnFour}} />
                    </div>
                    <div 
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-easing="ease"
                    class="col-five">
                        <div dangerouslySetInnerHTML={{__html: data.queryContent.homePageContent.homeImpactSection.hiColumnFive}} />
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
            transition-delay: .6s;
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
        .image-adjust {
            .gatsby-image-wrapper {
                max-width: 130px;
                img {
                    max-width: 130px; 
                    object-fit: contain;
                }
            }
        }
        a {
            text-decoration: none;
        }
        .flex-row {
            .col-five {
                width: 25%;
            }
            @media(max-width:1200px) {
                .col-five {
                    width: 30%;
                }
            }
            @media(max-width:992px) {
                .col-five {
                    width: 50%;
                }
            }
            @media(max-width:530px) {
                .col-five {
                    width: 100%;
                }
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
            transition-delay: .6s;
        }
        p {
            font-family: "Bodoni Classic";
            font-size: 22px;
            line-height: 1.2;
        }
        div {
            transition-delay: .6s;
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
    .fundraiser-row {
        background-color: #fff;
        .flex-row {
            max-width: 1420px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            .content-col {
                width: 65%;
                text-align: center;
                h2 {
                  color: #8a8f8f;  
                }
                h3 {
                    font-family: "Bodoni Classic";
                    color: #876b4a;
                    font-size: 36px;
                    text-transform: uppercase;
                    text-shadow: 2px 2px 4px rgba(0,0,0,.5);
                    letter-spacing: 5px;
                    margin-top: 0px;
                    span {
                        font-size: 48px;
                    }
                }
                p {
                    text-align: left;
                    font-family: "Bodoni Classic";
                    font-size: 20px;
                    line-height: 1.2;
                    color: #8e8f91;
                }
                p.button {
                    text-align: center;
                    a {
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
            }
            .image-col {
                width: 35%;
            }
        }
    }
    .row-three {
        background-color: #012756;
        text-align: center;
        h2,
        h3,
        p {
            color: #8e8f91;
            transition-delay: .6s;
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
            margin-bottom: -20px;
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
        .gatsby-image-wrapper {
            max-width: 75px !important;
            display: block;
            margin: 0 auto;
            margin-top: -28px;
            margin-bottom: -19px;
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
        &:nth-child(2) {
            transition-delay: .6s;
        }
        &:nth-child(3) {
            transition-delay: .9s;
        }
        &:nth-child(4) {
            transition-delay: 1.2s;
        }
        &:nth-child(5) {
            transition-delay: 1.5s;
        }
        &:nth-child(6) {
            transition-delay: 1.8s;
        }
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
            &:nth-child(2) {
                transition-delay: .6s;
            }
            &:nth-child(3) {
                transition-delay: .6s;
            }
            &:nth-child(4) {
                transition-delay: .6s;
            }
            &:nth-child(5) {
                transition-delay: .6s;
            }
            &:nth-child(6) {
                transition-delay: .6s;
            }
        }
        .flex-row {
            span.script-large {
                margin-bottom: 0;
            }
        }
        p {
            br {
                display: none;
            }
        }
        .fundraiser-row {
            .flex-row {
                .content-col {
                    width: 100%;
                }
                .image-col {
                    max-width: 500px;
                    width: 100%;
                    margin: 0 auto;
                }
            } 
        }
    }
    @media(max-width: 650px) {
        .fundraiser-row {
            .flex-row {
                .content-col {
                    h2 {
                        font-size: 42px;
                    }
                    h3 {
                        font-size: 24px;
                        letter-spacing: 3px;
                        span {
                            font-size: 32px;
                        }
                    }
                }
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

export default ValuesSection