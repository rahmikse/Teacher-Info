import React from "react";
import {
  Nav,
  NavBtn,
  Bars,
  NavMenu,
  NavLink,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/home">
          <h1>Mehmet Akif Ersoy Üniversitesi</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Hakkımızda
          </NavLink>
          <NavLink to="/contact" activeStyle>
            İletişim
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Kayıt Ol
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="login">Giriş Yap</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
