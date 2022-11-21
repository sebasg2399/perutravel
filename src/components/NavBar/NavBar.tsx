import { HTMLAttributes, useRef } from "react";
import { logoImages } from "~/assets/images";
import { routes } from "~/routes";
import { MenuLink } from "./components/MenuLink";
import { Toggle } from "./components/Toggle";
import * as Styled from "./styles";
export const NavBar = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const Links = routes.map((route, i) => (
    <MenuLink tabIndex={0} key={i} route={route} />
  ));
  const toggleMenu = () => {
    const curr = menuRef.current;
    if (curr) {
      curr.classList.toggle("active");
    }
  };
  return (
    <Styled.Nav>
      <Styled.BrandWrapper to={"/"}>
        Peru Travel
      </Styled.BrandWrapper>
      <Styled.Menu onClick={toggleMenu} ref={menuRef}>{Links}</Styled.Menu>
      <Toggle onClick={toggleMenu} />
    </Styled.Nav>
  );
};
