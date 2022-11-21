import { fonts } from "~/assets/fonts";
import { css } from "@emotion/react";

export const reset = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Maven+Pro:wght@500&family=Montserrat:wght@300;400;500;600;700&family=Pacifico&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.Inter};
  }
  a{
    text-decoration: none;
    color: #01749b;
  }
  #root > div {
    overflow-x: hidden;
    min-height: 100vh;
  }
`;
