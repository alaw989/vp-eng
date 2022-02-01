/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import SectionHeader from "../template-parts/components/section-header";
import "bootstrap/dist/css/bootstrap.min.css";
// import SectionFooter from "./section-footer"
import SectionHero from "../template-parts/components/section-hero";
import SectionAboutIntro from "../template-parts/components/section-about-intro"
// import SectionAboutIntro2 from "./section-about-intro-2"
// import SectionServices from "./section-services"
// import "./layout.css"
import { inViewContext, yOffsetContext } from "../contexts/site-context";

const LayoutHome = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [heroView, setHeroView] = useState();
  const [aboutIntroView, setAboutIntroView] = useState();
  const [aboutIntroView2, setAboutIntroView2] = useState();

  const [offsetY, setOffsetY] = useState(0);
  
  //   const handleScroll = () => setOffsetY(window.pageYOffset)
  //   const home = "home";

  return (
    <>
      <inViewContext.Provider
        value={{
          heroView,
          setHeroView,
          aboutIntroView,
          setAboutIntroView,
          aboutIntroView2,
          setAboutIntroView2,
        }}
      >
        {/* <div className="l-wrapper">
          <div className="l-document"> */}
        <SectionHeader siteTitle={data.site.siteMetadata.title} />
        <yOffsetContext.Provider value={{ offsetY, setOffsetY }}>
          <SectionHero />
        </yOffsetContext.Provider>
        <SectionAboutIntro />
            {/* <SectionServices />
            <SectionAboutIntro2 /> */}
        {/* </div> */}
        {children}
        {/* <div className="l-footer">
            <SectionFooter page={home}/>
          </div> */}
        {/* </div> */}
      </inViewContext.Provider>
    </>
  );
};

// LayoutHome.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default LayoutHome;
