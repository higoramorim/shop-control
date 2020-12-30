import React from "react";
import "./Nav.css";
import NavItem from './NavItem';

const Nav = (props) => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        {/* refatorar no final do projeto */}
        <NavItem href="/" icon="fa fa-home" text="Início" />
        {/* <a href="#/">
          <i className="fa fa-home"></i>Início
        </a> */}
        <NavItem href="/users" icon="fa fa-users" text="Usuários" />
        {/* <a href="#users">
          <i className="fa fa-users"></i>Usuários
        </a> */}
      </nav>
    </aside>
  );
};

export default Nav;