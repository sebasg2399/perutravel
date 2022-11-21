import { fonts } from "~/assets/fonts";
import { CardProps } from "~/models/Card.interface";
import styled from "@emotion/styled";

export const CardContainer = styled.div<CardProps>`
  color: white;
  position: relative;
  flex-direction: column;
  font-family: ${fonts.Inter};
  cursor: ${props=>props.isLink ? `pointer`: `auto`};

  ${(props) => {
    switch (props.size) {
      case "default":
        return `height: 15rem;`;
      case "large":
        return `height: 25rem;`;
      case "small":
        return `height: 10rem;`;
    }
  }}
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  & p {
    font-family: ${fonts.Montserrat};
    font-weight: 600;
    width: 80%;
    font-size: clamp(.8rem, .8vw, 1.2rem);
  }
  & h1{
    font-size: clamp(1.6rem, 2vw, 2.5rem);
  }
  & h2 {
    
    font-size : clamp(1.5rem, 1.8vw, 2.5rem);
    /* font-size: 2.5rem; */
    font-weight: 300;
    /* line-height: 55px; */
    /* font-family: ${fonts.Pacifico}; */

    & span {
      text-transform: uppercase;
      font-weight: 600;
      font-family: ${fonts.Inter};
    font-size : clamp(2rem, 2vw, 3.5rem);
    }
  }
  & h3 {
    font-size: 1rem;
    font-weight: 500;
  }
  &:hover {
    &::before {
      ${(props) => (props.isLink ? `scale: 1.15;` : ``)}
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: "";
    transition: 0.5s scale ease;
    background-image: url(${(props) => props.img_url});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    ${(props) =>
      props.background_position_x &&
      `background-position-x: ${props.background_position_x};`}
    ${(props) =>
      props.background_position_y &&
      `background-position-y: ${props.background_position_y};`}
  background-repeat: no-repeat;
    filter: brightness(0.7);
    box-shadow: -10px 64px 64px -33px rgba(0, 0, 0, 0.44) inset,
      -10px -64px 64px -33px rgba(0, 0, 0, 0.44) inset;
  }
`;
