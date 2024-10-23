import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { IoMdHome } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

const Navigation = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink className={s.link} to="/">
        <IoMdHome />
        Home
      </NavLink>
      <NavLink className={s.link} to="/contacts">
        <HiPhone />
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
