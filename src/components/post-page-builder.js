// src/components/post-page-builder.js

import React from "react"
import PostHeroImage from "../layouts/PostHeroImage"
import PostContentSection from "../layouts/PostContentSection"
import PostGallerySection from "../layouts/PostGallerySection"

const PostPageBuilder = ({ layoutData }) => {

    const layoutType = layoutData.fieldGroupName

  /**
   * Default component
   */
  const Default = () => <div>In AllLayouts the mapping of this component is missing: {layoutType}</div>

  /**
   * Mapping the fieldGroupName(s) to our components
   */
  const layouts = {
    Post_Postpagebuilder_PostBuilder_BuilderFullWidthImage: PostHeroImage,
    Post_Postpagebuilder_PostBuilder_BuilderContentSection: PostContentSection,
    Post_Postpagebuilder_PostBuilder_BuilderGallerySection: PostGallerySection,
    page_default: Default
  }

  /**
   * If layout type is not existing in our mapping, it shows our Default instead.
   */
  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['page_default']

  return (
    <ComponentTag {...layoutData} />
  )
}

export default PostPageBuilder