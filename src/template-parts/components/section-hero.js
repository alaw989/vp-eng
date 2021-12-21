import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect, useContext, useRef } from "react"
import { SectionHeroStyles } from "../../styles/components/_section-hero.js"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import parse from "html-react-parser"
import plus from "../../images/plus-icon.png"
// import { useInView } from "react-intersection-observer"
// import { inViewContext, yOffsetContext } from "../Contexts/siteContext"
// import FadeIn from "react-fade-in"

const SectionHero = ({}) => {
//   const data = useStaticQuery(graphql`
//     query slideQuery {
//       allWordpressAcfOptions {
//         nodes {
//           options {
//             homepage {
//               hero_image {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 3080, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//               hero_slider {
//                 image {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 3080, quality: 100) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//                 text
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const affix = data.allWordpressAcfOptions.nodes[0].options.homepage
  // const slide = affix.hero_image.localFile.childImageSharp.fluid
//   const home_slider = affix.hero_slider

  const [active, setActive] = useState("active")
  const [index, setIndex] = useState(1)

  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    useCSS: true,
    beforeChange: (oldIndex, newIndex) => {
      active == "active" ? setActive("active2") : setActive("active")
      setIndex(newIndex + 1)
    },
  }

//   const { ref, inView, entry } = useInView({
//     threshold: 0,
//   })
//   const view = inView ? "view-on" : "view-off"

//   const { setHeroView } = useContext(inViewContext)
//   setHeroView(inView)

  // Page Y Offset State
//   const { offsetY } = useContext(yOffsetContext)

  return (
    // <FadeIn transitionDuration={2000}>
      <SectionHeroStyles>
        <div className="section-hero" /* ref={ref} */>
          <div className="hero-title-container">
            <div
            //   data-view={view}
              className="hero-title"
              style={{
                // transform: `translate(0, -${offsetY * 0.5}px)`,
                transition: `.5s all`,
              }}
            >
              <div className="top">
                <div className="v">V</div>
                <div className="icon">
                  <img src={plus} alt="plus-icon" />
                </div>
                <div className="P">P</div>
              </div>
              <div className="bottom">Associates</div>
            </div>

            <div
              className="progress-container"
              style={{
                // transform: `translate(0, -${offsetY * 0.5}px)`,
                transition: `.5s all`,
              }}
            >
              <div className="progress-bar">
                <div className="progress-inner" data-active={active}></div>
              </div>
              <div className="slide-number">{index}</div>
            </div>
          </div>

          <Slider {...settings}>
            {/* {home_slider.map((slide, index) => (
              <div className="slider-container" key={index}>
                <BackgroundImage
                  fluid={slide.image.localFile.childImageSharp.fluid}
                  backgroundColor={`#040e18`}
                  className="bgSlide"
                  style={{
                    backgroundPosition: `0px -${offsetY * 0.3}px`,
                    backgroundSize: `cover`,
                  }}
                >
                  {" "}
                </BackgroundImage>
                <div className="bgText">{parse(slide.text)}</div>
                <div className="overlay"></div>
              </div>
            ))} */}
          </Slider>
        </div>
      </SectionHeroStyles>
    // </FadeIn>
  )
}

export default SectionHero