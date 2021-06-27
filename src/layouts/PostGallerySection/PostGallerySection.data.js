// src/layouts/PostGallerySection/PostGallerySection.data.js

module.exports = () => {
    return `
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
    `
  }