import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Welcome to the site that will help you keep your contacts, start
            filling it out now
          </p>
          <NavLink to="/contacts">
            <button className="btn btn-primary text-white">Get Started</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
