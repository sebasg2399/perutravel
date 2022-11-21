import styled from "@emotion/styled";

const color = "white";

export const Bar = styled.div`
  width: 80%;
  height: 3px;
  background-color: ${color};
  border-radius: 1rem;
`;
export const Container = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: none;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 0.25rem;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
