import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Style from "./Nav.module.css";
export default function Nav(props) {
  return (
    <nav className={Style.nav}>
      <div className={Style.nav__navlinks}>
        <button className={Style.button} onClick={props.logout}>
          LogOut
        </button>

        <NavLink className={Style.nav__link} to="/home">
          Home
        </NavLink>
        <NavLink className={Style.nav__link} to="/about">
          About
        </NavLink>
      </div>
      <div>
        <SearchBar onsearch={props.onSearch} />
      </div>
    </nav>
  );
}
