import styled from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const SectionHeroStyles = styled.div`
  position: relative;
  height: 100vh;

  .bg-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  .section-hero {
    height: 100vh;
    position: relative;
    font-family: "Roboto Condensed", sans-serif;
    z-index: -1;

    @media ${device.lg} {
      height: 100vh;
    }

    svg {
      height: 100%;
      .cls-1 {
        fill: ${props => (props.dark ? colors.primary : colors.white)};
      }
    }

    @keyframes fadeIn {
        0% {
          visibility: hidden;
        }
        100% {
          visibility: visible;
        }
      }

    .hero-title-container {
      position: absolute;
      height: 300px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 40%;
      transition: 2s all;

      .hero-title {
        font-family: Roboto Condensed, sans-serif;
        position: absolute;
        z-index: 1;
        color: ${colors.white};
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        line-height: 4rem;
        text-transform: uppercase;
        font-weight: 700;
        mix-blend-mode: overlay;
        transition: 1s all;

        @media ${device.md} {
          line-height: 5rem;
        }

        .top {
          font-size: 7rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          transition: 1s all;

          @media ${device.md} {
            font-size: 12rem;
            margin-bottom: 15px;
          }

          .icon {
            width: 70px;
            @media ${device.md} {
              width: 100px;
            }

            svg {
              position: relative;
            }
          }
        }
        .bottom {
          font-size: 2rem;
          font-weight: 400;
          @media ${device.md} {
            font-size: 4rem;
          }
        }

        &[data-view="view-on"] {
          opacity: 1;
        }
      }

      @keyframes progress {
        0% {
          height: 0;
        }
        100% {
          height: 100%;
        }
      }

      .progress-container {
        width: 2px;
        height: 150px;
        position: absolute;
        right: 85px;
        top: 45px;
        background-color: ${colors.white};
        z-index: 1;
        display: flex;
        flex-direction: column;

        .progress-bar {
          @keyframes progress {
            0% {
              height: 0;
            }

            25% {
              height: 25%;
            }
            50% {
              height: 50%;
            }
            100% {
              height: 100%;
            }
          }
          @keyframes progress2 {
            0% {
              height: 0;
            }

            25% {
              height: 25%;
            }
            50% {
              height: 50%;
            }
            100% {
              height: 100%;
            }
          }

          .progress-inner {
            position: absolute;
            top: 0;
            background-color: ${colors.primary};
            width: 100%;
            transition: 9s all;
            height: 0;
            animation: progress 9s;
            &[data-active="active"] {
              animation: progress 9s;
              animation-timing-function: linear;
            }
            &[data-active="active2"] {
              animation: progress2 9s;
              animation-timing-function: linear;
            }
          }
        }
        .slide-number {
          position: absolute;
          bottom: -36px;
          left: -3px;
          color: ${colors.white};
          font-size: 1rem;
        }
      }
    }

    .slick-slide {
      height: 100vh;

      @media ${device.lg} {
        height: 100vh;
      }

      @keyframes scale {
        0% {
          transform: scale(1.4);
        }

        50% {
          transform: scale(1.3);
        }

        100% {
          transform: scale(1.2);
        }
      }

      @keyframes unscale {
        0% {
          transform: scale(1.2);
        }

        50% {
          transform: scale(1.1);
        }

        100% {
          transform: scale(1);
        }
      }

      &.slick-active {
        .slider-container {
          .bgSlide {
            animation: scale 9s;
            animation-timing-function: linear;
            transition: 9s all;
          }
        }
      }

      .slider-container {
        .bgSlide {
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
          height: 100vh;
          animation: unscale 9s;
          animation-timing-function: linear;
          transition: 9s all;
          transform: scale(1.2);
          @media ${device.lg} {
            height: 100vh;
          }
          &:after {
            /* transform: translateY(${props => props.offsetY}px); */
            transition: 0.5s all;
            background-attachment: fixed;
          }
        }

        .bgText {
          color: ${colors.white};
          position: absolute;
          z-index: 99;
          top: 95%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1rem;
          font-weight: 400;
          text-align: center;
          line-height: 1rem;
          transition: all 1s ease;
          @media ${device.lg} {
            font-size: 1.2rem;
            line-height: 3rem;
          }
          span {
            /* color: #fff;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #fff;
          @media ${device.lg} {
            -webkit-text-stroke-width: 3px; */
          }
        }
      }
    }

    .hero-text {
      position: absolute;
      color: white;
      z-index: 1;
      font-family: "Roboto Condensed", sans-serif;
      text-transform: uppercase;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-size: 50px;
      font-weight: 700;
      letter-spacing: 4px;
      line-height: 1em;
      @media ${device.lg} {
        font-size: 75px;
        text-align: left;
        left: 387px;
        max-width: 600px;
      }
    }

    svg {
      position: absolute;
      width: 100%;
      bottom: -1px;
      left: 0;
      z-index: 1;
    }

    .slick-slider.slick-initialized {
      overflow: hidden;
      height: 100vh;
      @media ${device.lg} {
        height: 100vh;
      }
    }

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(38, 67, 102, 0.4);
    }
  }
`