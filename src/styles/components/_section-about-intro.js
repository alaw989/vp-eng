import styled from "styled-components";
import { device } from "../mixins";
import { colors } from "../variables";

export const SectionAboutIntroStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  transition: all 1.5s;
  ${(props) =>
    props.dark ? "background-color:" + colors.primary + ";" : colors.lightgray}
  &[data-hero-view="not-in-view"] {
    background-color: ${colors.primary};
    .section-about-intro {
      .content-container {
        .section-heading {
          color: #edebee;
          transition: all 1.5s;
        }
      }
    }
  }
  &[data-hero-view="not-in-view"] {
    background-color: ${colors.primary};
    .section-about-intro {
      .content-container {
        .section-heading {
          color: #edebee;
          transition: all 1.5s;
        }
      }
    }
  }
  &[data-hero-view2="true"] {
    background-color: ${colors.white};
    .section-about-intro {
      .content-container {
        .section-heading {
          color: ${colors.primary};
          transition: all 1.5s;
        }
      }
    }
  }
  &[data-hero-view2="false"] {
    background-color: ${colors.primary};
    .section-about-intro {
      .content-container {
        .section-heading {
          color: ${colors.white};
          transition: all 1.5s;
        }
      }
    }
  }
  .section-about-intro {
    display: flex;
    height: 100vh;
    ${(props) => (props.dark ? "height: 100vh;" : "height: auto;")}
    font-family: 'Roboto Condensed';
    font-weight: 400;
    font-style: normal;
    opacity: 0;
    transition: 0.5s all;
    height: 100%;
    color: ${colors.primary};
    &[data-view="view-on"] {
      opacity: 1 !important;
      color: ${colors.primary};
    }
    &[data-view2="view-on"] {
      color: ${colors.white};
      opacity: 1;
    }
    @media ${device.lg} {
      flex-direction: row;
    }
    .content-container {
      @media ${device.lg} {
        padding: 0;
        padding-right: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: 0.5s all;
      }
      .supheading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${device.lg} {
          justify-content: flex-start;
        }

        .supheading {
          text-align: center;
          text-transform: uppercase;
          color: #48b2e6;
        }
      }
      .section-heading {
        position: relative;
        max-width: 850px;
        margin-top: 0.1em;
        margin-bottom: 0.675em;
        font-size: 2.5rem;
        line-height: 1em;
        font-weight: 700;
        text-align: center;
        transition: all 1.5s;
        display: flex;
        flex: 1;
        align-items: center;
        flex-direction: column; 
        @media ${device.md} {
          font-size: 3.5rem;
        }
        @media ${device.lg} {
          text-align: left;
          margin-right: 10px; 
          flex-direction: row; 
        }

        p {
          margin-bottom: 0;
     
          @media ${device.lg} {
            margin-right: 10px; 
          }
         
        }
        }

        .separator {
          width: 100px;
          height: 2px;
          background-color: ${colors.lightblue};
          margin-top: 18px;

          @media ${device.lg} {
            width: 100%;
            right: 0;
            left: unset;
            bottom: 50%;
            transform: translateY(-50%);
            flex: 1;
           margin-top: 0; 
          }
        }
        @keyframes move-text {
          0% {
            bottom: -0.2em;
            opacity: 1;
          }
          50% {
            bottom: 0.2em;
          }
          100% {
            bottom: 0;
            opacity: 1;
          }
        }
        span {
          position: relative;
          opacity: 0;
          animation: move-text 0.75s forwards;
          font-size: 3.73333vw;
          @media ${device.md} {
            font-size: 1.02489vw;
          }
        }
      }
      .section-content {
        position: relative;
        width: 100%;
        max-width: 915px;
        margin-bottom: 0.75em;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.5em;
        color: #3d3d3d;
        text-align: center;
        padding: 0 8vw;
        p {
          color: ${colors.white};
        }
        @media ${device.lg} {
          text-align: left;
          padding: 0;
          font-size: 1rem;
        }
      }
    }
    .intro-image {
      height: 100%;
      position: relative;
      overflow: hidden;
      height: 300px;
      z-index: -1;
      filter: drop-shadow(-17px 30px 16px rgba(46, 46, 40, 0.5));
      img {
        clip-path: polygon(0 7%, 100% 0%, 100% 93%, 0% 100%);
      }
      @media ${device.md} {
        height: 500px;
      }
      @media ${device.lg} {
        width: 650px;
        height: 650px;
        left: 0;
      }
      svg.upper-angle {
        position: absolute;
        z-index: 1;
        transform: rotate(180deg);
        width: 140%;
        top: -1px;
        left: -1px;
      }
      svg.lower-angle {
        position: absolute;
        z-index: 1;
        bottom: -1px;
        width: 175%;
        right: 0;
      }
    }
  }
  .intro-bg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    height: 100%;
    @media ${device.lg} {
    }
  }
`;
