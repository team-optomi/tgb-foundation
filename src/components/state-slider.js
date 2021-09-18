import React, { Component } from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from 'react-slick'

class StateSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
          active: false
        };
      }

    handleClick = () => {
    this.setState({ active: true });
    };

    render() {

        const { active } = this.state;
        console.log(active);

        const { data } = this.props; 

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect: true,
            centerMode: true,
            responsive: [
                {
                breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };

        return(
            <StateSliderSection className={active ? "clicked" : "not-clicked"}>
                <h2>Where are you?</h2>
                <Slider {...settings}>
                    {data.allWpCity.nodes.map(stateSrc => {
                        return(
                        <div class="state-slide" onClick={this.handleClick}>
                            <div class="state-faded">
                                <GatsbyImage image={stateSrc.cityPageContent.stateOverlay.localFile.childImageSharp.gatsbyImageData} alt={stateSrc.cityPageContent.stateOverlay.title} />
                            </div>
                            <div class="state-full">
                                <GatsbyImage image={stateSrc.cityPageContent.stateThumbnail.localFile.childImageSharp.gatsbyImageData} alt={stateSrc.cityPageContent.stateThumbnail.title} />
                            </div>
                            <div class="state-link">
                                <Link to={`/cities/${stateSrc.slug}`}>
                                    <h3>{stateSrc.cityPageContent.stateName}</h3>
                                </Link>
                            </div>
                        </div>
                        )
                    })}
                </Slider>
            </StateSliderSection>
        );

    }

}

const StateSliderSection = styled.section`
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 100px;
    h2 {
        font-family: "Stay Bright Script";
        color: rgb(0,38,84);
        font-size: 90px;
        text-align: center;
        margin-top: 0;
        margin-bottom: 50px;
        font-weight: 100;
    }
    .slick-slider {
        opacity: 0;
        visibility: hidden;
        transition-duration: .3s;
        &.slick-initialized {
            opacity: 1;
            visibility: visible;
        }
        .slick-prev {
            top: calc(50% - 20px);
            left: 25px;
            width: 40px;
            height: 40px;
            border-top: 8px solid #000;
            border-left: 8px solid #000;
            transform: rotate(-45deg);
            z-index: 10;
            &:before {
                display: none;
            }
        }
        .slick-next {
            top: calc(50% - 20px);
            right: 25px;
            width: 40px;
            height: 40px;
            border-top: 8px solid #000;
            border-right: 8px solid #000;
            transform: rotate(45deg);
            z-index: 10;
            &:before {
                display: none;
            }
        }
        .slick-slide {
            width: 20%;
            .state-slide {
                width: 100%;
                height: 300px;
                position: relative;
                .state-faded {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: .3s;
                    opacity: 1;
                    visibility: visible;
                }
                .state-full {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: .3s;
                    opacity: 0;
                    visibility: hidden;
                }
                .state-link {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition-duration: .3s;
                    opacity: 0;
                    visibility: hidden;
                    a {
                        text-decoration: none !important;
                    }
                    h3 {
                        font-family: "Stay Bright Script";
                        color: #000;
                        font-size: 60px;
                        font-weight: 100;
                        text-align: center;
                        text-decoration: none;
                        margin-bottom: 70px;
                    }
                }
            }
            &:hover {
                cursor: pointer;
                .state-slide {
                    .state-full {
                        opacity: 1;
                        visibility: visible;
                    }
                    .state-link {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
    &.clicked {
        .slick-slider {
            .slick-slide {
                .state-faded {
                    opacity: 1;
                    visibility: visible;
                }
                .state-full {
                    opacity: 0;
                    visibility: hidden;
                }
                .state-link {
                    opacity: 0;
                    visibility: hidden;
                }
                &.slick-current {
                    .state-full {
                        opacity: 1;
                        visibility: visible;
                    }
                    .state-link {
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
        }
    }
    @media(max-width:767px) {
        h2 {
            font-size: 60px;
        }
        .slick-slider {
            .slick-slide {
                .state-slide {
                    .state-link {
                        h3 {
                            font-size: 42px;
                        }
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
            allWpCity(sort: {fields: date, order: DESC}) {
                nodes {
                    title
                    slug
                    cityPageContent {
                        stateOverlay {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 600
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                        stateThumbnail {
                            title
                            localFile {
                                childImageSharp {
                                    gatsbyImageData (
                                        width: 600
                                        placeholder: BLURRED
                                        formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                        stateName
                    }
                }
            }
        }
      `}
      render={data => <StateSlider data={data} {...props} />}
    />
  );