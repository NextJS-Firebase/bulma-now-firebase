import React from "react";
import styled from "styled-components";
const NavContainer = styled.div`
  .is-active {
    position: absolute;
    width: 100%;
  }
`;
function NavbarContainer(props) {
  return (
    <NavContainer>
      <nav
        className={
          "navbar is-fixed-top" +
          (props.color ? ` is-${props.color}` : "") +
          (props.spaced ? " is-spaced" : "")
        }
      >
        {props.children}
      </nav>
    </NavContainer>
  );
}

export default NavbarContainer;
