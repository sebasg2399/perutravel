import React, { HTMLAttributes, useRef } from "react";
import { MenuItem, StyledLink } from "../styles";
import { CustomRoute } from "~/models/CustomRoute.interface";

const animation = {
  scale: 1.2,
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.35)",
};
const tapAnimation = {
  scale: 1.1,
};

export const MenuLink: React.FC<{ route: CustomRoute; tabIndex: number }> = ({
  route,
}) => {
  return (
    <StyledLink tabIndex={-1} to={route.index ? "/" : route.path!}>
      <MenuItem whileHover={animation} whileTap={tapAnimation}>
        {route.name}
      </MenuItem>
    </StyledLink>
  );
};
