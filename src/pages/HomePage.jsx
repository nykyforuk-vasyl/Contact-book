import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="wrap-welcom">
      <h1 className="title-welcome">Hello there</h1>
      <p className="text-welcom">
        Welcome to the site that will help you keep your contacts, start filling
        it out now
      </p>
      <NavLink to="/contacts">
        <button className="btn-welcom">Get Started</button>
      </NavLink>
    </div>
  );
};

export default HomePage;
