import styled from "@emotion/styled";

export const IFrame = styled.iframe`
  height: 680px;
  @media screen and (max-width: 1362px) {
    max-height: 720px;
  }
  @media screen and (max-width: 600px) {
    max-height: 620px;
  }
  @media screen and (max-width: 450px) {
    max-height: 550px;
  }
`;
