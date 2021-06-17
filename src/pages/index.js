import React from "react"

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import WordsSection from "../components/home-sections/words-section"
import ValuesSection from "../components/home-sections/values-section"
import TogetherSection from "../components/home-sections/together-section"
import LegacySection from "../components/home-sections/legacy-section"
import FormSection from "../components/home-sections/form-section"

const IndexPage = () => {

    return(
        <Layout>
            <SEO 
            title={"Home page"} 
            description={"SEO description"}
            />
            <HomeHero />
            <WordsSection />
            <ValuesSection />
            <TogetherSection />
            <LegacySection />
            <FormSection />
        </Layout>
    )

}

export default IndexPage