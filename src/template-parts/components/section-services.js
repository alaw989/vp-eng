import { useStaticQuery, graphql } from "gatsby";
import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SectionServicesStyles } from "../../styles/components/_section-services.js";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { PrimaryButton } from "../../styles/components/_buttons.js";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import parse from "html-react-parser";
import { convertToBgImage } from "gbimage-bridge";

const Services = ({ setServicesView }) => {
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
                    description
                  }
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
  console.log(fields);


  const services_title = fields.title ? fields.title : "Quality Services";

  const servicesData = [];
  fields.servicesRepeater.forEach((item, index) => {
    console.log(item.serviceTitle);
    for (const prop in item.servicesImage) {
      if (item.service_image.hasOwnProperty(prop)) {
        servicesData.push({
          images: item.serviceImage[prop].childImageSharp.fluid,
          titles: item.serviceTitle,
          subtitles: item.subtitle,
          links: item.serviceLink,
          description: item.description,
        });
      }
    }
  });
  console.log(servicesData);

  //   // Mapping through data to build new useable object
  //   const servicesData = []
  //   services.services_repeater.map((item, index) => {
  //     for (const prop in item.service_image) {
  //       if (item.service_image.hasOwnProperty(prop)) {
  //         servicesData.push({
  //           images: item.service_image[prop].childImageSharp.fluid,
  //           titles: item.service_title,
  //           subtitles: item.subtitle,
  //           links: item.service_link,
  //           description: item.description,
  //         })
  //       }
  //     }

  //     return null
  //   })

  // Slick settings
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { inView } = useInView({
    /* Optional options */
    threshold: 0,
  })

  // const view = inView ? "view-on" : "view-off"

  // setServicesView(view)

  const customSlider = useRef();

  const [textColor, setTextColor] = useState("");

  const handleChangeTextColor = (index) => {
    console.log(index);
    setTextColor(index);
  };

  return (
    <SectionServicesStyles>
      <div className="section-services">
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={11}>
              <div className="section-title-container">
                <div className="tagline" />
                <h2 className="section-title">{parse(services_title)}</h2>
                <div className="tagline" />
              </div>
              <div className="services-selector">
                {fields.servicesRepeater.map((item, index) => (
                  <div
                    className={
                      textColor == index
                        ? "services-link-container color-change"
                        : "services-link-container"
                    }
                    onClick={() => {
                      handleChangeTextColor(index);
                    }}
                  >
                    <div
                      className={
                        textColor == index
                          ? "services-icon show"
                          : "services-icon"
                      }
                    >
                      {" "}
                      <FontAwesomeIcon icon={faCoffee} />
                    </div>

                    <div
                      className="services-link"
                      data-id={index}
                      onClick={() => {
                        customSlider.current.slickGoTo(index);
                      }}
                    >
                      {item.serviceTitle}
                    </div>
                  </div>
                ))}
              </div>
              <Slider {...settings} ref={customSlider}>
                {fields.servicesRepeater.map((item, index) => {
                  const image =
                    item.serviceImage.localFile.childImageSharp.gatsbyImageData;
                  const bgImage = convertToBgImage(image);
                  console.log(bgImage);
                  return (
                    <div className="services-information">
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
                        <div className="services-subheading">{item.title}</div>
                        <div className="services-heading">
                          {parse(item.subtitle)}
                        </div>
                        <div className="services-description">
                          {/* {parse(item.description)} */}
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
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </SectionServicesStyles>
  );
};

export default Services;
