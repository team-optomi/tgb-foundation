import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

const FormSection = () => {

    return(

        <MainSection>
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


            

        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    width: 100%;
    background-color: #8e8f91;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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
                        background-color: #8e8f91;
                        border: 2px solid #fff;
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
`

export default FormSection