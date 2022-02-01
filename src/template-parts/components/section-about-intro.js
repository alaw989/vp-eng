import { useStaticQuery, graphql } from "gatsby";
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SectionAboutIntroStyles } from "../../styles/components/_section-about-intro.js";
// import BackgroundImage from "gatsby-background-image"
// import Img from "gatsby-image"
import parse from "html-react-parser";
import { PrimaryButton } from "../../styles/components/_buttons.js";
import { Link } from "gatsby";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import { inViewContext } from "../../contexts/site-context";

const SectionAboutIntro = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      allWp {
        nodes {
          themeOptions {
            acfThemeOptions {
              aboutIntroSection {
                paragraph
                heading
                buttonLink {
                  url
                  title
                  target
                }
              }
            }
          }
        }
      }
    }
  `);

  const aboutIntroSection =
    data.allWp.nodes[0].themeOptions.acfThemeOptions.aboutIntroSection;

  const heading = aboutIntroSection.heading;
  const paragraph = aboutIntroSection.paragraph;
  const button = aboutIntroSection.buttonLink.url;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const view = inView ? "view-on" : "view-off";

  const { heroView, setAboutIntroView, aboutIntroView } =
    useContext(inViewContext);
  setAboutIntroView(inView);

  const heroShown = heroView ? "in-view" : "not-in-view";

  return (
    <SectionAboutIntroStyles data-hero-view={heroShown}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10}>
            <div className="section-about-intro" data-view={view}>
              <div className="content-container">
                
                <div className="section-heading view" ref={ref}>
                  <p>{heading}</p>
                  <div className="separator"></div>
                </div>{" "}
                <div className="section-content">{parse(paragraph)}</div>
                <PrimaryButton light>
                  <Link to={button}>
                    <div className="overlay"></div>
                    <div className="button-text">All Our Projects</div>
                  </Link>
                </PrimaryButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionAboutIntroStyles>
  );
};

export default SectionAboutIntro;
