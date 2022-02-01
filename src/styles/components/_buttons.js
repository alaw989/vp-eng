import styled, {css} from "styled-components"
import { device } from "../mixins"
import { colors } from "../variables"

export const PrimaryButton = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => (props.light ? colors.secondary : colors.white)};
  position: relative;
  padding: 25px 80px 25px 80px;
  background-color: ${colors.secondary};
  max-width: 200px;
  font-family: "Roboto Condensed";
  transition: 0.5s opacity;
  transition-delay: ${props => (props.fadein ? 1400 + 'ms' : '0s')};
  opacity: ${props => (props.light ? 1 : 0)};
  z-index: 1;
  margin: 0 auto; 
  ${props => props.fadein && css`
    opacity: 1
    `};
  @media ${device.lg} {
    margin: 0;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: ${props => (props.light ? colors.white : colors.white)};
    transition: 0.5s all;
    z-index: 2;
    cursor: pointer;
    border: none;
    text-decoration: none;
    .overlay {
      width: 100%;
      height: 100%;
      cursor: pointer;
      background-color: ${colors.secondary};
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.5s all;
      z-index: 2;
    }
    .button-text {
      position: relative;
      z-index: 3;
      transition: 0.5s all;
      text-transform: uppercase;
      font-size: 14px;
      color: ${colors.white};
      text-decoration: none;
    }
    &:hover {
      .overlay {
        top: -50px;
      }
      .button-text {
        color: ${colors.secondary};
        text-decoration: none;
      }
    }
  }
`