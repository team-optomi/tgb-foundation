import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Footer = ({ data: { sectionOne, middleSection, sectionThree} }) => {

    return(
        <FooterMain>
            <div class="footer-flex">
                <div class="section-one" dangerouslySetInnerHTML={{ __html: sectionOne.content }} />
                <div class="middle-section" dangerouslySetInnerHTML={{ __html: middleSection.content }} />
                <div class="section-three" dangerouslySetInnerHTML={{ __html: sectionThree.content }} />
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
                .gatsby-image-wrapper {
                    max-width: 35px !important;
                    margin-right: 10px;
                    margin-left: 10px;
                    img {
                        max-width: 35px;
                        object-fit: contain !important;
                    }
                }
            }
        }
        .middle-section {
            width: 50%;
            text-align: center;
            margin-top: 200px;
            p.stay-bright {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 60px;
                color: #8e8f91;
                font-weight: 100;
                line-height: 1.2;
                text-transform: none;
                margin-bottom: 10px;
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
`

export default props => (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => <Footer data={data} {...props} />}
    />
  );