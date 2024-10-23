import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <a className={s.linkLogo} href="http://localhost:5173">
          <img
            className={s.logo}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG-8YTgLeIPTfKmj9ROwzMgf7DPbiw8lIqFw&s"
            alt="Logo"
            width="32px"
          />
          <p className={s.text}>Contact book</p>
        </a>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
