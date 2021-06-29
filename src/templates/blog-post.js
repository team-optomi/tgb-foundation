import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout-v2"
import Seo from "../components/seo"
import PostPageBuilder from "../components/post-page-builder"

const BlogPostTemplate = ({ data: { post } }) => {

  const layouts = post.postPageBuilder.postBuilder

  return (
    <Layout>
      <Seo 
      title={post.seo.title} 
      description={post.seo.metaDesc}
      metaImage={post.seo.opengraphImage.localFile.childImageSharp.fluid}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        {   
          layouts.map((layout, index) => {
              return <PostPageBuilder key={index} layoutData={layout} />
          })
        }
      </article>
      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
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
      postPageBuilder {
        fieldGroupName
        postBuilder {
          __typename
          ... on WpPost_Postpagebuilder_PostBuilder_BuilderFullWidthImage {
            fieldGroupName
            includeTitle
            builderHeroTitle
            builderHeroImage {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ... on WpPost_Postpagebuilder_PostBuilder_BuilderContentSection {
            fieldGroupName
            bcBackgroundColor
            bcPaddingBottom
            bcPaddingTop
            bcSectionContent
          }
          ... on WpPost_Postpagebuilder_PostBuilder_BuilderGallerySection {
            fieldGroupName
            bgAddTitle
            bgBackgroundColor
            bgGalleryTitle
            bgPaddingBottom
            bgPaddingTop
            bgTitleColor
            bgGalleryImages {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`
