import logo from "./iiclogowhite.png";
import { Link } from "react-router-dom";
import { Icon } from "../common/icons/Icon";
import styles from "./TopNav.module.css";
import avatar from "./avatar.png";
import Nav from "./Nav";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function DropdownItem(props: any) {
  return (
    <li className="dropdownitem">
      <Icon icon={props.icon} className={styles.icon} />
      <a>{props.text}</a>
    </li>
  );
}
export default function TopNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.top_container}>
        <div
          className={styles.others}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img
            src={avatar}
            className={styles.avatar}
            style={{ height: 45, width: 55 }}
            alt="profile"
          />
          <h4>Ripesh001</h4>
        </div>
      </div>
      <br />
      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <ul>
          <NavLink to={"/setting"}>
            <DropdownItem icon="setting" text="   Settings" />
          </NavLink>
          <NavLink to={"/"}>
            <DropdownItem icon="user" text="    Profile" />
          </NavLink>
          <NavLink to={"/signIn"}>
            <DropdownItem icon="logout" text="    Logout" />
          </NavLink>
        </ul>
      </div>
    </>
  );
}
