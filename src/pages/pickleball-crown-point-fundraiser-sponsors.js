import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const PickleballFundraiserSponsers = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <Main>
             <div class="content" dangerouslySetInnerHTML={{ __html: queryContent.content }} />
            </Main>
        </Layout>
    )
   
}

const Main = styled.main`
    background-color: #fff;
    padding: 50px 20px;
    .top-section {
        max-width: 900px;
        margin: 0 auto;
        h1 {
            font-family: "Stay Bright Script";
            font-size: 100px;
            color: #00234f;
            text-align: center;
            font-weight: 100;
            margin-top: 0;
        }
        p {
            font-style: italic;
            font-size: 14px;
            text-align: center;
        }
    }
    .middle-section {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 35px;
        display: flex;
        .left-col {
            width: 50%;
            padding-right: 20px;
        }
        .right-col {
            width: 50%;
            padding-left: 20px;
        }
        h2 {
            font-family: "Bodoni Classic";
            color: #734c28;
            font-size: 28px;
            font-weight: 100;
            text-align: left;
            margin-top: 0px;
            margin-bottom: 10px
        }
        ul {
            margin-left: 35px;
            li {
                margin-bottom: 0px;
            }
        }
        ul.theme-list {
            display: flex;
            flex-wrap: wrap;
            list-style: disc;
            li {
                width: 33.33%;
            }
        }
    }
    .donor-box {
        max-width: 400px;
        margin: 0 auto;
        margin-top: 50px;
        min-height: 1200px;
    }
    .button {
        text-align: center;
        a {
            background-color: rgb(1, 39, 86);
            padding: 10px 30px;
            border-radius: 35px;
            color: rgb(255, 255, 255);
            font-family: sans-serif;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            letter-spacing: 1px;
            display: inline-block;
        }
    }
    @media(max-width:991px) {
        .middle-section {
            flex-wrap: wrap;
            .left-col {
                width: 100%;
                padding-right: 0;
            }
            .right-col {
                width: 100%;
                padding-left: 0;
            }
        }
    }
    @media(max-width:600px) {
        .top-section {
            h1 {
                font-size: 60px;
            }
        }
        .middle-section {
            ul {
                margin-left: 5px;
            }
            ul.theme-list {
                margin-left: 35px;
                li {
                    width: 100%;
                }
            }
        }
    }
`

export default PickleballFundraiserSponsers

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 3436}) {
            title
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
            content
        }
    }
`