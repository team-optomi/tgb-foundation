import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import SEO from "../components/seo"

const VolunteerPage = ({ data: { queryContent } }) => {

    const heroImage = getImage(queryContent.featuredImage.node.localFile.childImageSharp.gatsbyImageData)

    return(
        <Layout>
            <SEO 
            title={"Volunteer page"} 
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
                <form name="TGB Volunteer" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
                    <input type="hidden" name="form-name" value="TGB Volunteer" aria-label="Input"/>
                    <div class="flex-row">
                        <div class="col-full">
                            <h2>volunteer</h2>
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
                        <div class="col-four">
                            <label  htmlFor="state">
                            <span>State*</span>
                            <select name="state" required>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                            </label> 
                        </div>
                    </div>
                </form>
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
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .col-full {
                width: 100%;
                h2 {
                    text-align: center;
                    font-family: "Stay Bright Script";
                    color: #012756;
                    font-size: 150px;
                    font-weight: 100;
                    line-height: 1.2;
                    margin-top: 0;
                }
            }
            .col-four {
                width: 25%;
                label {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    input,
                    select {
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
                    input,
                    select {
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
    @media(max-width:900px) {
        .top-row {
            > div {
                h3 {
                    margin: 0 auto;
                }
                p {
                    margin: 0 auto;
                }
            }
        }
        .bottom-row {
            > div {
                margin-right: auto;
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

export default VolunteerPage

export const pageQuery = graphql`
    query {
        queryContent: wpPage(databaseId: {eq: 297}) {
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
        }
    }
`