import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    // console.log(props);
    return (
        <Link to={props.href}>
          <i className={props.icon}></i>{props.text}
        </Link>
    )
    }
  export default NavItem;