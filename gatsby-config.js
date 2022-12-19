/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */

 module.exports = {
  siteMetadata: {
    title: `The TGB Foundation | Together Giving Back`,
    description: `An impact-driven nonprofit providing opportunity for kids to live their best lives.`,
    author: `TGB Foundation`,
    siteUrl: `https://thetgbfoundation.org`,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  plugins: [
    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://tgbfoundation.wpengine.com/graphql`,
        schema: {
          timeout: 3600000,
          requestConcurrency: 1,
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        html: {
          generateWebpImages: true,
        }
      },
    },

    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-page-transitions',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.05, // Percentage of an element's area that needs to be visible to launch animation
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JLJRDNE4KS", // Google Analytics / GA
          "AW-10983912858", // Google Ads / Adwords / AW
        ],
      },
    },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The TGB Foundation`,
        short_name: `TGB`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#012756`,
        display: `minimal-ui`,
        icon: `content/assets/tgb-favicon.png`,
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
    `gatsby-plugin-offline`,
  ],
}
