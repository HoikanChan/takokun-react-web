import "./Header.scss"
import React from "react";
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
function Header({ name, signOut, uid }) {
  const logined = <div className="login-container">
    <div className="login"><Icon type="smile" />{name}</div>
    <div className="logout" onClick={() => signOut()}>登出</div>
  </div >;
  const notLogined = <NavLink className="toLogin" to='/signin'><Icon type="meh" />请登录</NavLink >
  return (
    <div className="header">
      {uid ? logined : notLogined}
    </div>
  );
}
Header.propTypes = {
  signOut: PropTypes.func.isRequired,
  uid: PropTypes.string,
  name: PropTypes.string,
}
export default Header;
