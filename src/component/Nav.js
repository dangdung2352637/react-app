import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <NavLink className="nav-link-page">
        <Link className="home-page" to="/">
          Home
        </Link>
        <Link to="/About">About</Link>
        <Link to="/Detail">Detail</Link>
      </NavLink>
    </div>
  );
};
