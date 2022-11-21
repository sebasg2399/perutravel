import styled from "@emotion/styled";
import React from "react";

export const AppLayout = styled.div<{ background_url?: string }>`
  position: relative;
  padding: 1rem 8rem;
  z-index: 1;
  @media screen and (max-width: 900px) {
    padding: 1rem 2rem;
  }
`;
