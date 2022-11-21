import { fonts } from "~/assets/fonts";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
  padding: 1rem 0;
  display: flex;
  height: 5rem;
  position: relative;
  align-items: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: -1;
    opacity: 0.2;
  }
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding: 1rem 2rem;
  }
  /* justify-content: space-around; */
`;
export const Brand = styled.img`
  height: 100%;
  object-fit: contain;
`;
export const BrandWrapper = styled(Link)`
  height: 100%;
  padding: 0 3rem;
  display:flex;
  align-items:center;
  font-weight: 500;
  color:white;
  font-family: ${fonts.Maven};
  font-size: clamp(1.5rem, .8vw, 1rem);
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    padding: 0rem;
  }
`;
export const Menu = styled.div`
  list-style: none;
  display: flex;
  gap: 3rem;
  flex-grow: 1;
  @media screen and (max-width: 900px) {
    & {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
      align-items: center;
      justify-content: flex-start;
      z-index: 100;
      flex-direction: column;
      background: white;
      gap: 2px;
    }
    &.active{
      display: flex;
    }
  }
`;
export const MenuItem = styled(motion.div)`
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  transition-duration: 0.1s;
  outline: none;
  font-size: clamp(1rem, 1vw, 1rem);
  @media screen and (max-width: 900px) {
    & {
      padding: 1.5rem 2rem;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  /* border-radius: 1rem; */
`;
export const StyledLink = styled(Link)`
  color: white;
  outline: none;
  text-decoration: none;
  font-family: ${fonts.Maven};
  @media screen and (max-width: 900px) {
    & {
      background: #000;
      width: 100%;
    }
  }
`;
