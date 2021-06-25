import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const BlogIndex = ({ data: { allPosts, pageContent }, pageContext: { nextPagePath, previousPagePath }, }) => {

  const heroImage = getImage(pageContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)
  const posts = allPosts.nodes

  return (
    <Layout>
      <Seo title="Newsroom" />

      <HeroSection>
          <div class="hero-background">
              <GatsbyImage image={heroImage} alt={pageContent.featuredImage.node.title} />
          </div>
          <div class="hero-content">
              <div>
                <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
              </div>
          </div>
      </HeroSection>

      <BlogSection>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.title

            return (
              <li key={post.uri}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div class="article-main">
                    <div class="article-image">
                      <GatsbyImage image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.featuredImage.node.title} />
                    </div>
                    <div class="article-content">
                      <header>
                        <h2>
                          <Link to={post.uri} itemProp="url">
                            <span itemProp="headline">{parse(title)}</span>
                          </Link>
                        </h2>
                        <small>{post.date}</small>
                      </header>
                      <section itemProp="description">{parse(post.excerpt)}</section>
                      <Link className={"article-link"} to={post.uri}>Read More</Link>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </BlogSection>
      
    </Layout>
  )
}

const HeroSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    .hero-background {
        position: absolute;
        width: 100%;
        height: 100vh;
        img {
            width: 100%;
            height: 100vh;
        }
    }
    .hero-content {
        position: absolute;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
        > div {
            max-width: 1620px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            > div {
                max-width: 800px;
                position: relative;
                background-color: rgb(255 255 255 / 80%);
                padding: 20px;
                margin-left: auto;
            }
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #012756;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
            }
            p {
                font-family: "Bodoni Classic";
                color: #012756;
                font-weight: 100;
                font-size: 20px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                text-align: center;
            }
            p.hashtag {
                text-align: center;
                font-size: 14px;
                color: #8e8f91;
            }
        }
    }
    @media(max-width:900px) {
        .hero-content {
            > div {
                margin-bottom: 50px;
                > div {
                    margin-right: auto; 
                }
            }
        }
    }
    @media(max-width:550px) {
        .hero-content {
            > div {
                > div {
                    h1 {
                        font-size: 44px;
                    }
                    p {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`

const BlogSection = styled.section`
    background-color: #fff;
    padding: 75px 20px;
    article {
      max-width: 1000px;
      margin: 0 auto;
      margin-bottom: 50px;
      box-shadow: 2px 2px 6px rgba(0,0,0,.5);
      .article-main {
        width: 100%;
        display: flex;
        .article-image {
          width: 50%;
          .image-placeholder {
            width: 100%;
            height: 400px;
            background-color: #aaa;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .article-content {
          width: 50%;
          padding: 35px;
          h2 {
            font-family: "Bodoni Classic";
            a {
              color: #012756;
            }
          }
          a.article-link {
            display: inline-block;
            margin-top: 20px;
            font-family: "Bodoni Classic";
            text-transform: uppercase;
            color: #012756;
            text-decoration: none;
          }
        }
      }
    }
`

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allPosts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
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
    pageContent: wpPage(databaseId: {eq: 275}) {
      content
      featuredImage {
        node {
            title
            localFile {
                childImageSharp {
                    gatsbyImageData (
                        width: 1800
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
      }
    }
  }
`
