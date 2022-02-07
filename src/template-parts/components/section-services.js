import { useStaticQuery, graphql } from "gatsby";
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SectionServicesStyles } from "../../styles/components/_section-services.js";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../../styles/components/_buttons.js";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import parse from "html-react-parser";
import { convertToBgImage } from "gbimage-bridge";
import { inViewContext } from "../../contexts/site-context";

const Services = () => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      allWp {
        nodes {
          themeOptions {
            acfThemeOptions {
              servicesSection {
                servicesRepeater {
                  serviceTitle
                  subtitle
                  serviceLink {
                    url
                    title
                    target
                  }
                  serviceImage {
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
                  description
                }
                subtitle
                title
              }
            }
          }
        }
      }
    }
  `);

  const fields =
    data.allWp.nodes[0].themeOptions.acfThemeOptions.servicesSection;

  const services_title = fields.title ? fields.title : "Quality Services";

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log('inview', inView)

  const { setServicesView } = useContext(inViewContext);

  const [currentIndex, setcurrentIndex] = useState(0);
  
  const handleTransition = (index) => {
    setcurrentIndex(index);
  };

  return (
    <SectionServicesStyles>
      <div className="section-services" ref={ref}>
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={11}>
              <div className="section-title-container">
                <div className="tagline" />
                <h2 className="section-title">{parse(services_title)}</h2>
                <div className="tagline" />
              </div>

              <div className="services">
                <div className="services-selector">
                  {fields.servicesRepeater.map((item, index) => (
                    <div
                      className={
                        currentIndex === index
                          ? "services-link-container color-change"
                          : "services-link-container"
                      }
                      onClick={() => {
                        handleTransition(index);
                      }}
            
                      role="button"
                      tabIndex={index}
                    >
                      <div
                        className={
                          currentIndex === index
                            ? "services-icon show"
                            : "services-icon"
                        }
                      >
                        {" "}
                        <FontAwesomeIcon icon={faCoffee} />
                      </div>

                      <div className="services-link" data-id={index}>
                        {item.serviceTitle}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="services-container">
                  {fields.servicesRepeater.map((item, index) => {
                    const image =
                      item.serviceImage.localFile.childImageSharp
                        .gatsbyImageData;
                    const bgImage = convertToBgImage(image);
                    return (
                      <div
                        className={`services-information ${
                          currentIndex === index ? "show" : ""
                        }`}
                      >
                        <BackgroundImage
                          {...bgImage}
                          backgroundColor={`#040e18`}
                          className="services-image"
                          style={{
                            backgroundSize: `cover`,
                          }}
                        >
                          {" "}
                        </BackgroundImage>

                        <div className="services-content">
                          <div className="services-subheading">
                            {item.title}
                          </div>
                          <div className="services-heading">
                            {parse(item.subtitle)}
                          </div>
                          <div className="services-description">
                            {parse(item.description)}
                          </div>
                          <PrimaryButton light>
                            <Link to={item.serviceLink.url}>
                              <div className="overlay"></div>
                              <div className="button-text">Contact Us</div>
                            </Link>
                          </PrimaryButton>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionServicesStyles>
  );
};

export default Services;
