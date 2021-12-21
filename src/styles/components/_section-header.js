import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionHeaderStyles = styled.div`
  font-family: Roboto Condensed, sans-serif;
  z-index: 2;
  width: 100%;
  
  .nav-container {
    z-index: 2;
    position: fixed;
    width: 100%;
    background-color: blue;

    &[data-hero-view="not-in-view"] {
      .logo {
        mix-blend-mode: difference;
        .top {
          /* color: ${colors.primary}; */
        }
        .icon {

        }
      }
    }
    a {
      text-decoration: none;
      .logo {
        display: flex;
        color: ${colors.white};
        top: 45px;
        left: 85px;
        z-index: 10;

        .gatsby-image-wrapper {
          height: 105px;
          width: 200px;
        }

        .top {
          font-size: 3rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .icon {
            width: 30px;
            display: flex; 
            img {
              width: 100%; 
            }

            svg {
              position: relative;
            }
          }
        }
        .bottom {
          font-size: 3rem;
          font-weight: 400;
        }
      }
    }

    .menu-container {
      top: 45px;
      right: 85px;
      z-index: 10;
      width: 50px;
      height: 50px;
    }
  }

  /* z-index: 1;
  width: 100%;
  opacity: 0.95;
  position: relative;
  .section-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    font-family: "Roboto Condensed", sans-serif;
    height: 135px;
   box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%); 
    position: fixed;
    width: 100%;

    .nav-container {
      display: flex;
      justify-content: space-between;
    }

    .logo {
      position: absolute; 
      mix-blend-mode: overlay;
      color: white;
      a {
        font-size: 3rem;
      }
      /* a {
        display: flex;
        justify-content: center;
      }
      .gatsby-image-wrapper {
        height: 105px;
        width: 200px;
      } 

      .top {
        font-size: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
   
        .icon {
          width: 30px;

          svg {
            position: relative;
          }
        }
      }
      .bottom {
        font-size: 3rem;
        font-weight: 400;
      }
    }
    .navigation-menu {
      display: flex;
      justify-content: center;
      height: 100%;
      flex: 2;
      ul {
        display: flex;
        margin: 0;
        height: 100%;
        align-items: center;
        justify-content: center;

        li {
          display: flex;
          list-style-type: none;
          margin-bottom: 0;
          margin-left: 5px;
          margin-right: 5px;
          height: 100%;
          a {
            position: relative;
            color: ${colors.primary};
            text-decoration: none;
            text-transform: uppercase;
            margin-right: 5px;
            margin-bottom: 0;
            font-weight: 700;
            transition: 0.5s all;
            font-size: 16px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 35px 0;
            &:after {
              content: "";
              position: absolute;
              background-color: red;
              width: 0;
              height: 3px;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              transition: 0.5s all;
            }

            &:hover::after {
              width: 100%;
            }
            &:hover {
              color: red;
            }
            &:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
    .right-container {
      /* position: relative;
      height: 100%;
      display: flex;
      justify-content: flex-end;

      a.phone-container {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        flex: 1;
        text-decoration: none;
        max-width: 75px;
        @media ${device.lg} {
          width: 195px;
          max-width: 195px;
        }
        .phone {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          background-color: transparent;
          color: ${colors.secondary};
          font-size: 1.7em;
          svg {
            @media ${device.lg} {
              display: none;
            }
          }
          .number {
            font-size: 1.6rem;
            font-weight: 700;
            display: none;

            @media ${device.lg} {
              display: block;
            }
          }
        }
      }
      .menu-container {
        position: relative;
        flex: 1;
        background-color: ${colors.secondary};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        max-width: 75px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.5s all;
        border-left: 1px solid ${colors.secondary};
        overflow: hidden;

        &:hover {
          .overlay-shift {
            @media ${device.lg} {
              bottom: 0;
            }
          }
          .contact-text {
            color: ${colors.secondary};
          }
        }
        @media ${device.lg} {
          width: 165px;
          max-width: 165px;
        }
        .overlay-shift {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${colors.white};
          bottom: -95px;
          z-index: 1;
          transition: 0.5s all;
        }
        .contact-text {
          position: absolute;
          text-transform: uppercase;
          color: ${colors.white};
          height: 100%;
          font-size: 14px;
          z-index: 2;
          transition: 0.5s all;
          display: none;
          @media ${device.lg} {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        /* a {
          position: absolute;
          height: 100%;
          width: 100%;
          text-decoration: none;
          background-color: transparent;
        } 
      }
    }
    .bm-menu-wrap {
      top: 0;
    }
  } */
`