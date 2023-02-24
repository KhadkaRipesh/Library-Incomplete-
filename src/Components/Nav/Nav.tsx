import logo from "./iiconly.png";
import logo2 from "./iiclogowhite.png";
import styles from "./Nav.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { BsJournalBookmark, BsBookmarkCheck } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <TfiDashboard />,
  },
  {
    path: "/books",
    name: "Books",
    icon: <BsJournalBookmark />,
  },
  {
    path: "/issuedBooks",
    name: "Issues",
    icon: <BsBookmarkCheck />,
  },
  {
    path: "/student",
    name: "Student",
    icon: <HiOutlineUsers />,
  },
];
const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={styles.container}>
      <motion.div
        animate={{ width: isOpen ? "250px" : "70px" }}
        className={styles.sidebar}
      >
        <div>
          <div className={styles.top_container}>
            <div className={styles.bars}>
              <FaBars onClick={toggle} />
            </div>
            {isOpen && <img src={logo} className={styles.logo} alt="logo" />}
          </div>

          <section className={styles.routes}>
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  className={({ isActive }) => {
                    let str = `${styles.Navitems}`;
                    if (isActive) str += ` ${styles.NavItemsActive}`;
                    return str;
                  }}
                >
                  <div className={styles.icon}>{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className={styles.link_text}>
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </div>
      </motion.div>
    </div>
  );
}
