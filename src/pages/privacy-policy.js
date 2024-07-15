import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const PrivacyPolicyPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <TitleSection>
                <h1>Privacy Policy</h1>
            </TitleSection>
            <ContentSection>
                <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
            </ContentSection>
        </Layout>
    )

}

const TitleSection = styled.header`
    padding-top: 100px;
    background-color: #fff;
    h1 {
        font-family: "Stay Bright Script";
        font-weight: 100;
        color: #012756;
        font-size: 100px;
        text-align: center;
        padding: 0 20px;
        margin-top: 0;
        margin-bottom: 0;
    }
    @media(max-width:560px) {
      h1 {
        font-size: 64px;
      }
    }
`

const ContentSection = styled.section`
    background-color: #fff;
    div {
        max-width: 1080px;
        width: 100%;
        margin: 0 auto;
        padding: 50px 20px;
        h2 {
          font-family: "Bodoni Classic";
          color: #012756;
          font-weight: 100;
          font-size: 24px;
          line-height: 1.3;
        }
        h3 {
          font-family: "Bodoni Classic";
          color: #012756;
          font-weight: 100;
          font-size: 24px;
          line-height: 1.3;
        }
        p {
          font-family: "Bodoni Classic";
          font-size: 20px;
          line-height: 1.2;
        }
    }
`

export default PrivacyPolicyPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 3}) {
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
    }
`