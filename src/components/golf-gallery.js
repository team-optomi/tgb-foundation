import React, { Component } from "react"
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"

class GolfGallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
          active: false,
          activeImage: -1
        };
      }

    handleClick(index) {
        let num = index;
        this.setState({ 
            active: true,
            activeImage: num 
        });
    };

    closeLightbox = () => {
        this.setState({ 
            active: false,
            activeImage: -1
        });
    };

    render() {

        const { active } = this.state;
        const { data } = this.props; 

        return(
            <GolfGallerySection className={active ? "lightbox-active" : ""}>
                <div
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
                data-sal-delay="600"
                >
                    {data.wpPage.golfFundraiser.golfGallery.map((golfSrc, i) => {
                        return(
                        <GalleryImage id={"GalleryImage_" + i} onClick={() => this.handleClick(i)}>
                            <GatsbyImage image={golfSrc.localFile.childImageSharp.gatsbyImageData} alt={golfSrc.title} />
                        </GalleryImage>
                        )
                    })}
                    <div class="main-lightbox">
                        <button class="close-lightbox" onClick={this.closeLightbox}/>
                        {data.wpPage.golfFundraiser.golfGallery.map((golfSrc, i) => {
                            return(
                            <LightboxImage id={"LightboxImage_" + i} className= {i === this.state.activeImage ? "active-image" : "inactive-image"}>
                                <GatsbyImage image={golfSrc.localFile.childImageSharp.gatsbyImageData} alt={golfSrc.title} />
                            </LightboxImage>
                            )
                        })}
                    </div>
                </div>
            </GolfGallerySection>
        )
    }
}

const GolfGallerySection = styled.section`
    > div {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        background-color: #000;
        transition-duration: .3s;
        .main-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: -1;
            overflow-y: scroll;
            background-color: rgba(0,0,0,.0);
            transition-duration: .3s;
            visibility: hidden;
            opacity: 0;
            display: flex;
            justify-content: center;
            padding: 100px;
        }
        button.close-lightbox {
            position: absolute;
            top: 30px;
            right: 30px;
            visibility: hidden;
            opacity: 0;
            height: 40px;
            width: 40px;
            background-color: transparent;
            border: none;
            transition-duration: .3s;
            &:hover {
                cursor: pointer;
            }
            &:before {
                content: '';
                position: absolute;
                top: 15px;
                right: 0;
                width: 45px;
                height: 5px;
                background-color: #fff;
                transform: rotate(45deg);
            }
            &:after {
                content: '';
                position: absolute;
                top: 15px;
                right: 0;
                width: 45px;
                height: 5px;
                background-color: #fff;
                transform: rotate(-45deg);
            }
        }
    }
    &.lightbox-active {
        > div { 
            .main-lightbox {
                z-index: 1001;
                background-color: rgba(0,0,0,.7);
                visibility: visible;
                opacity: 1;
            }
            button.close-lightbox {
                visibility: visible;
                opacity: .6;
                z-index: 1010;
                &:hover {
                    opacity: .9;
                }
            }
        }
    }
    @media(max-width:767px) {
        > div {
            .main-lightbox {
                padding: 100px 20px;
            }
        }
    }
`

const GalleryImage = styled.div`
    width: 33.33%;
    transition-duration: .3s;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #002855;
        opacity: 0;
        transition-duration: .3s;
    }
    &:hover {
        cursor: pointer;
        &:after {
            opacity: .8;
        }
    }
    @media(max-width:767px) {
        width: 50%;
    }
    @media(max-width:500px) {
        width: 100%;
    }
`

const LightboxImage = styled.div`
    display: none;
    visibility: hidden;
    opacity: 0;
    height: 0;
    width: 0;
    z-index: -1;
    transition-duration: .3s;
    &.active-image {
        display: block;
        height: 100vh;
        width: 1000px;
        z-index: 1010;
        visibility: visible;
        opacity: 1;
    }
`

export default props => (
    <StaticQuery
      query={graphql`
        query {
            wpPage(databaseId: {eq: 1211}) {
                golfFundraiser {
                    golfGallery {
                        title
                        localFile {
                          childImageSharp {
                            gatsbyImageData (
                                width: 1000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                          }
                        }
                    }
                }
            }
        }
      `}
      render={data => <GolfGallery data={data} {...props} />}
    />
  );