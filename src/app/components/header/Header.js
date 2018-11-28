import "./Header.scss";
import React from "react";
import { Icon } from "antd";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function Header({ user, signOut }) {
  return (
    <div className="header">
      {user ? (
        <div className="login-container">
          <div className="login">
            <Icon type="smile" />
            {user.name}
          </div>
          <div className="logout" onClick={() => signOut()}>
            登出
          </div>
        </div>
      ) : (
        <NavLink className="toLogin" to="/signin">
          <Icon type="meh" />
          请登录
        </NavLink>
      )}
    </div>
  );
}
Header.propTypes = {
  signOut: PropTypes.func.isRequired,
  uid: PropTypes.string,
  name: PropTypes.string
};
export default Header;
