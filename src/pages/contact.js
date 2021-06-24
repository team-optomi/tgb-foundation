import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const ContactPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <SEO 
            title={"Contact page"} 
            description={"SEO description"}
            />
            <HeroSection>
                <div class="hero-background">
                    <GatsbyImage image={heroImage} alt={queryContent.featuredImage.node.title} />
                </div>
                <div class="hero-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: queryContent.content }} />
                    </div>
                </div>
            </HeroSection>
            <FormSection>
                <div class="top-row">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.contactPageContent.cContactInfoOne }} />
                </div>
                <form name="TGB Email" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="TGB Email" aria-label="Input"/>
                    <div class="flex-row">
                        <div class="col-four">
                            <h2>stay connected</h2>
                        </div>
                        <div class="col-four">
                            <p class="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
                            </p>
                            <label htmlFor="email"><span>Email Address</span><input type="email" name="email" aria-label="Input" required/></label>
                        </div>
                        <div class="col-four">
                            <label htmlFor="first_name"><span>First Name</span><input type="text" name="first_name" aria-label="Input" required/></label> 
                        </div>
                        <div class="col-four">
                            <label htmlFor="last_name"><span>Last Name</span><input type="text" name="last_name" aria-label="Input" required/></label> 
                        </div>
                    </div>
                </form>
                <div class="bottom-row">
                    <div dangerouslySetInnerHTML={{ __html: queryContent.contactPageContent.cContactInfoTwo }} />
                </div>
            </FormSection>
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
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #002855;
            opacity: .8;
            z-index: 2;
        }
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
        z-index: 3;
        > div {
            max-width: 1620px;
            width: 100%;
            padding: 0 20px;
            margin: 0 auto;
            margin-bottom: 150px;
            h1 {
                font-family: "Stay Bright Script";
                width: 100%;
                font-size: 72px;
                font-weight: 100;
                line-height: 1.2;
                color: #fff;
                margin-top: 0;
                margin-bottom: 0;
                text-align: right;
            }
            p {
                font-family: "Bodoni Classic";
                color: #fff;
                font-weight: 100;
                font-size: 16px;
                line-height: 1.3;
                letter-spacing: 1px;
                margin-top: 0;
                margin-bottom: 0;
                text-align: right;
            }
        }
    }
`

const FormSection = styled.section`
    position: relative;
    width: 100%;
    background-color: #fff;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .top-row {
        max-width: 1420px;
        width: 100%;
        padding: 0 20px;
        h3 {
            font-family: "Bodoni Classic";
            color: #012756;
            font-weight: 100;
            font-size: 16px;
            line-height: 1.3;
            letter-spacing: 1px;
            margin-top: 0;
            margin-bottom: 0;
            max-width: 540px;
            text-align: center;
        }
        p {
            text-align: center;
            font-size: 14px;
            color: #8e8f91;
            max-width: 540px;
        }
    }
    .bottom-row {
        max-width: 1420px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        > div {
            margin-left: auto;
            max-width: 440px;
            width: 100%;
        }
        h3 {
            font-family: "Stay Bright Script";
            color: #012756;
            font-weight: 100;
            font-size: 32px;
            line-height: 1.3;
            letter-spacing: 1px;
            margin-top: 0;
            margin-bottom: 0;
            max-width: 440px;
            text-align: center;
        }
        p {
            text-align: center;
            font-size: 14px;
            color: #8e8f91;
            max-width: 440px;
        }
    }
    form {
        max-width: 1620px;
        width: 100%;
        p {
            &.hidden {
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                height: 0;
                width: 0;
                z-index: -1;
            }
        }
        .flex-row {
            max-width: 1620px;
            width: 100%;
            padding: 0px 20px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .col-four {
                width: 20%;
                &:first-child {
                    width: 40%;
                }
                h2 {
                    text-align: center;
                    font-family: "Stay Bright Script";
                    color: #012756;
                    font-size: 150px;
                    font-weight: 100;
                    line-height: 1.2;
                    margin-top: 0;
                }
                label {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    input {
                        order: 1;
                        padding: 10px 20px;
                        background-color: #fff;
                        border: 2px solid #012756;
                        outline: 0;
                    }
                    span {
                        order: 2;
                        font-family: "Bodoni Classic";
                        font-size: 24px;
                        margin-top: 10px;
                        color: #012756;
                    }
                }
            }
        }
    }
    @media(max-width:1600px) {
        .top-row {
            max-width: 1420px;
        }
        .bottom-row {
            max-width: 1420px;
        }
        form {
            .flex-row {
                max-width: 1420px;
                .col-four {
                    h2 {
                        font-size: 100px;
                    }
                }
            }
        }
    }
    @media(max-width:1400px) {
        .top-row {
            max-width: 1220px;
        }
        .bottom-row {
            max-width: 1220px;
        }
        form {
            .flex-row {
                max-width: 1220px;
                .col-four {
                    padding: 0 20px;
                    h2 {
                        font-size: 80px;
                    }
                    input {
                        width: 100%;
                    }
                }
            }
        }
    }
    @media(max-width:1000px) {
        form {
            .flex-row {
                flex-wrap: wrap;
                .col-four {
                    width: 30%;
                    &:first-child {
                        width: 100%;
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        form {
            .flex-row {
                .col-four {
                    width: 100%;
                    h2 {
                        font-size: 44px;
                    }
                }
            }
        }
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            queryContent: wpPage(databaseId: {eq: 191}) {
                content
                featuredImage {
                    node {
                        title
                        localFile {
                            childImageSharp {
                                gatsbyImageData (
                                    width: 2400
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
                contactPageContent {
                    cContactInfoOne
                    cContactInfoTwo
                }
            }
        }
    `}
  render={data => <ContactPage data={data} {...props} />}
/>
);