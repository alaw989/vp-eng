import {Link, useStaticQuery, graphql} from "gatsby";
import React, {useContext} from "react";
import Mmenu from "./Mmenu";
import {SectionHeaderStyles} from "../../styles/components/_section-header.js";
import plus from "../../images/plus-icon.png";
import {useInView} from "react-intersection-observer"
import {Container, Row, Col} from "react-bootstrap";
import {inViewContext} from "../../contexts/site-context"

const SectionHeader = (props) => {

    const {heroView, aboutIntroView} = useContext(inViewContext)

    console.log("hero in view", heroView)
    // console.log("about intro 1 in view", aboutIntroView)

    const heroShown = heroView ? "in-view" : "not-in-view"
    const aboutShown = aboutIntroView ? "in-view" : "not-in-view"

    return (
        <SectionHeaderStyles>
            <div
                className="nav-container"
                data-about-view={aboutShown}
                data-hero-view={heroShown}
            >
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col xs={10} className="py-2">
                            <Row>
                                <Col xs={6}>
                                    <div className="logo-container">
                                        <Link to="/">
                                            <div className="logo">
                                                {" "}
                                                <div className="top">
                                                    <div className="V">V</div>
                                                    <div className="icon">
                                                        <img src={plus} alt="plus-icon"/>
                                                    </div>
                                                    <div className="P">P</div>
                                                </div>
                                            </div>
                                            {" "}
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="menu-container">
                                        <Mmenu/>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </SectionHeaderStyles>
    );
};

export default SectionHeader;
