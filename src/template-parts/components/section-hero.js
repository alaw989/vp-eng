import { useStaticQuery, graphql } from "gatsby"
import React, { useState, useEffect, useContext } from "react"
import { SectionHeroStyles } from "../../styles/components/_section-hero.js"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"
import parse from "html-react-parser"
import plus from "../../images/plus-icon.png"

import { useInView } from "react-intersection-observer"
import { inViewContext, yOffsetContext } from "../../contexts/site-context"
// import FadeIn from "react-fade-in"

const SectionHero = () => {
  const data = useStaticQuery(graphql`
    query heroQuery {
      allWp {
        nodes {
          themeOptions {
            acfThemeOptions {
              homepage {
                heroSlider {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 2000
                          placeholder: BLURRED
                          formats: [AUTO, WEBP, AVIF]
                        )
                      }
                    }
                  }
                  text
                }
              }
            }
          }
        }
      }
    }
  `)

  const home_slider =
    data.allWp.nodes[0].themeOptions.acfThemeOptions.homepage.heroSlider

  const [index, setIndex] = useState(1)

  const { ref, inView, entry } = useInView({
    threshold: 0,
  })
  const view = inView ? "view-on" : "view-off"

  const { setHeroView } = useContext(inViewContext)

  // Page Y Offset State
  const { offsetY } = useContext(yOffsetContext)

  let [count, setCount] = useState(0)

  useEffect(() => {
    setHeroView(inView)
    const countUp = () => {
      setCount((count += 1))
      if (count == home_slider.length - 1) {
        count = -1
      }
    }

    setInterval(countUp, 9000)
  }, [])

  return (
    // <FadeIn transitionDuration={2000}>
    <SectionHeroStyles>
      <div className="section-hero" /* ref={ref} */>
        <div className="bgtext-container">
          {home_slider.map((slide, index) => (
            <div
              key={index}
              className={`bgtext ${index === count ? "showing" : ""}`}
            >
              <p>{parse(slide.text)}</p>
            </div>
          ))}
        </div>

        <div className="overlay"></div>
        <div className="hero-title-container">
          <div
            //   data-view={view}
            className="hero-title"
            style={{
              transform: `translate(0, -${offsetY * 0.5}px)`,
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
              <div className="progress-inner"></div>
            </div>
            <div className="slide-number">{count + 1}</div>
          </div>
        </div>

        <div className="home-carousel">
          {home_slider.map((slide, index) => {
            const image = slide.image.localFile.childImageSharp.gatsbyImageData
            const bgImage = convertToBgImage(image)

            return (
              <div
                className={`bg-container ${
                  index === count ? "slide showing" : "slide"
                }`}
                key={index}
              >
                <BackgroundImage
                  {...bgImage}
                  backgroundColor={`#040e18`}
                  className="background"
                  style={{
                    // backgroundPosition: `0px -${offsetY * 0.3}px`,
                    backgroundSize: `cover`,
                  }}
                >
                  {" "}
                </BackgroundImage>
              </div>
            )
          })}
        </div>
      </div>
    </SectionHeroStyles>
    // </FadeIn>
  )
}

export default SectionHero
