import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout-v2"
import Seo from "../components/seo"

const ThankYouPage = () => {

    return(
        <Layout>
            <Seo 
            title={"Thank You | The TGB Foundation"} 
            />
            <TitleSection>
                <h1>Thank You</h1>
                <p>Your information has been submitted, a representative will contact you soon.</p>
            </TitleSection>
        </Layout>
    )

}

const TitleSection = styled.header`
    padding-top: 100px;
    background-color: #fff;
    min-height: 100vh;
    h1 {
        font-family: "Stay Bright Script";
        font-weight: 100;
        color: #012756;
        font-size: 100px;
        text-align: center;
        padding: 0 20px;
        margin-top: 0;
        margin-bottom: 0;
    }
    p {
        text-align: center;
        padding: 0 20px;
    }
    @media(max-width:560px) {
      h1 {
        font-size: 64px;
      }
    }
`

export default ThankYouPage