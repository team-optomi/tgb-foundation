// src/layouts/PostHeroImage/PostHeroImage.data.js

module.exports = () => {
    return `
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
    `
  }