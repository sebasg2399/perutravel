import React, { HTMLAttributes } from "react";
import { Bar, Container } from "./styles";

export const Toggle: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <Container {...props}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Container>
  );
};
