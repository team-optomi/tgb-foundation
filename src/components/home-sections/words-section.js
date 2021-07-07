import React, { useEffect }  from "react"
import styled from 'styled-components'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const WordsSection = () => {

    useEffect(() => {

        if (typeof window !== `undefined`) {
            gsap.registerPlugin(ScrollTrigger)
            gsap.core.globals('ScrollTrigger', ScrollTrigger)
        }

        let tlWords = gsap.timeline({
            paused: true,
            scrollTrigger: {
                trigger: "#words_trigger",
                start: 'top 70%',
                end: 'bottom 70%',
                id: 'start_words',
                toggleActions: "play play play pause",
                },
            })

        tlWords.to('.letter_t', { duration: 0.5, top: '0', opacity: '1' }, 0.5)
        tlWords.to('.letter_g', { duration: 0.5, top: '0', opacity: '1' }, 1)
        tlWords.to('.letter_b', { duration: 0.5, top: '0', opacity: '1' }, 1.5)
        tlWords.to('.letters_hink', { duration: 1, opacity: '1', left: '0px' }, 1)
        tlWords.to('.letters_ive', { duration: 1, opacity: '1', left: '0px' }, 1.5)
        tlWords.to('.letters_oldly', { duration: 1, opacity: '1', left: '0px' }, 2)
        tlWords.to('#word_dream', { duration: 4, opacity: '1' }, 2)
        tlWords.to('#word_share', { duration: 4, opacity: '1' }, 2.5)
        tlWords.to('#word_inspire', { duration: 4, opacity: '1' }, 3)
        tlWords.to('#word_live', { duration: 4, opacity: '1' }, 3.5)
        tlWords.to('#word_care', { duration: 4, opacity: '1' }, 4)
        tlWords.to('#word_love', { duration: 4, opacity: '1' }, 4.5)

    }, []);

    return(

        <MainSection id="words_trigger">
            
            <div id="words_line_one">
                <p id="word_dream">dream</p>
                <p id="word_share">share</p>
            </div>
            <div id="words_line_two">
                <p id="word_inspire">inspire</p>
                <p id="word_think"><span class="letter_t">T</span><span class="letters_hink">HINK</span></p>
                <p id="word_live">live</p>
            </div>
            <div id="words_line_three">
                <p id="word_give"><span class="letter_g">g</span><span class="letters_ive">ive</span></p>
            </div>
            <div id="words_line_four">
                <p id="word_care">care</p>
                <p id="word_love">love</p>
                <p id="word_boldly"><span class="letter_b">B</span><span class="letters_oldly">OLDLY</span></p>
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
            opacity: 0;
        }
        p#word_share {
            color: #a3948c;
            opacity: 0;
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
            opacity: 0;
        }
        p#word_think {
            span {
                &:first-child {
                    color: #002654;
                    opacity: 0;
                    position: relative;
                    top: 40px;
                }
                &:last-child {
                    color: #734c28;
                    opacity: 0;
                    position: relative;
                    left: -40px;
                }
            }
        }
        p#word_live {
            color: #858c99;
            opacity: 0;
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
                    opacity: 0;
                    position: relative;
                    top: 40px;
                }
                &:last-child {
                    color: #734c28;
                    opacity: 0;
                    position: relative;
                    left: -40px;
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
            opacity: 0;
        }
        p#word_love {
            color: #858c99;
            opacity: 0;
        }
        p#word_boldly {
            span {
                &:first-child {
                    color: #002654;
                    opacity: 0;
                    position: relative;
                    top: 40px;
                }
                &:last-child {
                    color: #734c28;
                    opacity: 0;
                    position: relative;
                    left: -40px;
                }
            }
        }
    }
    @media(max-width:1480px) {
        height: 445px;
        #words_line_one {
            top: -35px;
            left: calc( 50% - 430px);
            p {
                font-size: 140px;
                letter-spacing: 7px;
            }
        }
        #words_line_two {
            top: 80px;
            left: calc( 50% - 440px);
            p {
                font-size: 140px;
                letter-spacing: 7px;
            }
        }
        #words_line_three {
            top: 140px;
            left: calc( 50% - 130px);
            p {
                font-size: 140px;
                letter-spacing: 7px;
            }
        }
        #words_line_four {
            top: 260px;
            left: calc( 50% - 548px);
            p {
                font-size: 140px;
                letter-spacing: 7px;
            }
        }
    }
    @media(max-width:1080px) {
        height: 310px;
        #words_line_one {
            top: -25px;
            left: calc( 50% - 300px);
            p {
                font-size: 100px;
                letter-spacing: 5px;
                margin: 0 10px;
            }
        }
        #words_line_two {
            top: 55px;
            left: calc( 50% - 310px);
            p {
                font-size: 100px;
                letter-spacing: 5px;
                margin: 0 10px;
            }
        }
        #words_line_three {
            top: 98px;
            left: calc( 50% - 90px);
            p {
                font-size: 100px;
                letter-spacing: 5px;
                margin: 0 10px;
            }
        }
        #words_line_four {
            top: 185px;
            left: calc( 50% - 380px);
            p {
                font-size: 100px;
                letter-spacing: 5px;
                margin: 0 10px;
            }
        }
    }
    @media(max-width:767px) {
        height: 260px;
        #words_line_one {
            top: 0px;
            left: calc( 50% - 220px);
            p {
                font-size: 70px;
                letter-spacing: 4px;
            }
        }
        #words_line_two {
            top: 65px;
            left: calc( 50% - 230px);
            p {
                font-size: 70px;
                letter-spacing: 4px;
            }
        }
        #words_line_three {
            top: 93px;
            left: calc( 50% - 73px);
            p {
                font-size: 70px;
                letter-spacing: 4px;
            }
        }
        #words_line_four {
            top: 160px;
            left: calc( 50% - 280px);
            p {
                font-size: 70px;
                letter-spacing: 4px;
            }
        }
    }
    @media(max-width:560px) {
        height: 180px;
        #words_line_one {
            top: 10px;
            left: calc( 50% - 140px);
            p {
                font-size: 42px;
                letter-spacing: 3px;
            }
        }
        #words_line_two {
            top: 50px;
            left: calc( 50% - 150px);
            p {
                font-size: 42px;
                letter-spacing: 3px;
            }
        }
        #words_line_three {
            top: 68px;
            left: calc( 50% - 48px);
            p {
                font-size: 42px;
                letter-spacing: 3px;
            }
        }
        #words_line_four {
            top: 110px;
            left: calc( 50% - 190px);
            p {
                font-size: 42px;
                letter-spacing: 3px;
            }
        }
    }
`

export default WordsSection