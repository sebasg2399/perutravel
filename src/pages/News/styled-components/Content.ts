import styled from "@emotion/styled";

export const Content = styled.article`
  color: black;
  border-radius: .5rem;
  background: rgb(255, 254, 241);
  background: linear-gradient(
    90deg,
    rgba(255, 254, 241, 1) 0%,
    rgba(255, 255, 255, 1) 76%
  );
  & p{
    
    font-size: clamp(.8rem, .8vw, 1.2rem);

  }
`;
