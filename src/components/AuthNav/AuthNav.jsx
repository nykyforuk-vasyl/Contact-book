import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
