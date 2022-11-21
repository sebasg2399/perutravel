import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const BackgroundImage = styled.img`
  content: "";
  z-index: -3;
  position: fixed;
  object-fit: cover;
  object-position: center;
  /* width: 100%; */

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(20px);
  box-shadow: -10px 64px 64px -33px rgba(0, 0, 0, 0.44) inset,
    -10px -64px 64px -33px rgba(0, 0, 0, 0.44) inset;
`;
