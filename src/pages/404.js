import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <MainSection>
        <div>
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </MainSection>
    </Layout>
  )
}

const MainSection = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Bodoni Classic";
    font-size: 36px;
    text-align: center;
  }
  p {
    font-family: "Bodoni Classic";
    font-size: 24px;
    text-align: center;
  }
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
