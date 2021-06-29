import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            sectionOne: wpFooterSection(databaseId: {eq: 79}) {
                content
            }
            middleSection: wpFooterSection(databaseId: {eq: 77}) {
                content
            }
            sectionThree: wpFooterSection(databaseId: {eq: 75}) {
                content
            }
        }
    `)

    return(
        <FooterMain>
            <div class="footer-flex">
                <div class="section-one" dangerouslySetInnerHTML={{ __html: data.sectionOne.content }} />
                <div class="middle-section" dangerouslySetInnerHTML={{ __html: data.middleSection.content }} />
                <div class="section-three" dangerouslySetInnerHTML={{ __html: data.sectionThree.content }} />
            </div>
        </FooterMain>
    )

}

const FooterMain = styled.footer`
    background-color: #000;
    width: 100%;
    .footer-flex {
        max-width: 1620px;
        width: 100%;
        padding: 0px 20px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .section-one {
            width: 25%;
            transition-duration: .3s;
            .footer-logo {
                max-width: 200px;
                width: 100%;
            }
            .footer-socials {
                max-width: 200px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition-duration: .3s;
                a {
                    width: 25px;
                    margin: 0 10px;
                }
                .gatsby-image-wrapper {
                    max-width: 25px !important;
                    img {
                        max-width: 25px;
                        object-fit: contain !important;
                    }
                }
            }
        }
        .middle-section {
            width: 50%;
            text-align: center;
            margin-top: 200px;
            transition-duration: .3s;
            p.stay-bright {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 60px;
                color: #8e8f91;
                font-weight: 100;
                line-height: 1.2;
                text-transform: none;
                margin-bottom: 10px;
                transition-duration: .3s;
            }
            p.footer-sub {
                color: #8e8f91;
                font-size: 12px;
                margin-bottom: 0;
                a {
                    color: #8e8f91;
                    text-decoration: none;
                }
            }
        }
        .section-three {
            width: 25%;
            transition-duration: .3s;
            h3 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 42px;
                color: #8e8f91;
                font-weight: 100;
                line-height: 1.2;
                text-transform: none;
                margin: 0;
            }
            ul {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                transition-duration: .3s;
                li {
                    width: 50%;
                    font-size: 18px;
                    margin-bottom: 0px;
                    a {
                        font-family: "Bodoni Regular";
                        color: #8e8f91;
                        text-decoration: none;
                    }
                }
            }
        }
    }
    @media(max-width:1000px) {
        .footer-flex {
            flex-wrap: wrap;
            .section-one {
                order: 1;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                .footer-logo {
                    margin: 20px auto;
                }
                .footer-socials {
                    max-width: 100%;
                }
            }
            .middle-section {
                order: 3;
                width: 100%;
                margin-top: 35px;
            }
            .section-three {
                order: 2;
                width: 100%;
                margin-top: 35px;
                h3 {
                    text-align: center;
                }
                ul {
                    max-width: 230px;
                    margin: 0 auto;
                }
            }
        }
    }
    @media(max-width:560px) {
        .footer-flex {
            .middle-section {
                p.stay-bright {
                    font-size: 32px;
                }
            }
        }
    }
`

export default Footer