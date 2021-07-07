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
        color: #000;
        text-align: center;
        padding: 0 20px;
        margin-top: 0;
        margin-bottom: 0;
    }
`

const ContentSection = styled.section`
    background-color: #fff;
    div {
        max-width: 1080px;
        width: 100%;
        margin: 0 auto;
        padding: 50px 20px;
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