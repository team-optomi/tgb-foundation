import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import WordsSection from "../components/home-sections/words-section"
import ValuesSection from "../components/home-sections/values-section"
//import TogetherSection from "../components/home-sections/together-section"
import LegacySection from "../components/home-sections/legacy-section"
import FormSection from "../components/home-sections/form-section"

const IndexPage = ({ data: { queryContent } }) => {

    return(
        <Layout>
            <Seo 
            title={queryContent.seo.title} 
            description={queryContent.seo.metaDesc}
            metaImage={queryContent.seo.opengraphImage.localFile.childImageSharp.fluid}
            />
            <HomeHero />
            <WordsSection />
            <ValuesSection />
            {/* <TogetherSection /> */}
            <LegacySection />
            <FormSection />
        </Layout>
    )

}

export default IndexPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 7}) {
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