import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

const WordsSection = () => {

    return(

        <MainSection>
            
            <div id="words_line_one">
                <p id="word_dream">dream</p>
                <p id="word_share">share</p>
            </div>
            <div id="words_line_two">
                <p id="word_inspire">inspire</p>
                <p id="word_think"><span>T</span><span>HINK</span></p>
                <p id="word_live">live</p>
            </div>
            <div id="words_line_three">
                <p id="word_give"><span>g</span><span>ive</span></p>
            </div>
            <div id="words_line_four">
                <p id="word_care">care</p>
                <p id="word_love">love</p>
                <p id="word_boldly"><span>B</span><span>OLDLY</span></p>
            </div>

        </MainSection>
        
    )

}

const MainSection = styled.section`
    position: relative;
    width: 100%;
    height: 610px;
    background-color: #fff;
    p {
        font-family: "Antique Roman";
    }
    #words_line_one {
        position: absolute;
        top: -45px;
        left: calc( 50% - 600px);
        display: flex;
        justify-content: center;
        p {
            font-size: 200px;
            letter-spacing: 10px;
            margin: 0 20px;
        }
        p#word_dream {
            color: #858c99;
        }
        p#word_share {
            color: #a3948c;
        }
    }
    #words_line_two {
        position: absolute;
        top: 120px;
        left: calc( 50% - 618px);
        display: flex;
        justify-content: center;
        p {
            font-size: 200px;
            letter-spacing: 10px;
            margin: 0 20px;
        }
        p#word_inspire {
            color: #a3948c;
        }
        p#word_think {
            span {
                &:first-child {
                    color: #002654;
                }
                &:last-child {
                    color: #734c28;
                }
            }
        }
        p#word_live {
            color: #858c99;
        }
    }
    #words_line_three {
        position: absolute;
        top: 206px;
        left: calc( 50% - 190px);
        display: flex;
        justify-content: center;
        p {
            font-size: 200px;
            letter-spacing: 10px;
            margin: 0 20px;
        }
        p#word_give {
            span {
                &:first-child {
                    color: #002654;
                }
                &:last-child {
                    color: #734c28;
                }
            }
        }
    }
    #words_line_four {
        position: absolute;
        top: 370px;
        left: calc( 50% - 758px);
        display: flex;
        justify-content: center;
        p {
            font-size: 200px;
            letter-spacing: 10px;
            margin: 0 20px;
        }
        p#word_care {
            color: #a3948c;
        }
        p#word_love {
            color: #858c99;
        }
        p#word_boldly {
            span {
                &:first-child {
                    color: #002654;
                }
                &:last-child {
                    color: #734c28;
                }
            }
        }
    }
`

export default WordsSection