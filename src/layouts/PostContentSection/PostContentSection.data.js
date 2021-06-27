// src/layouts/PostContentSection/PostContentSection.data.js

module.exports = () => {
    return `
    ... on WpPost_Postpagebuilder_PostBuilder_BuilderContentSection {
        fieldGroupName
        bcBackgroundColor
        bcPaddingBottom
        bcPaddingTop
        bcSectionContent
      }
    `
  }