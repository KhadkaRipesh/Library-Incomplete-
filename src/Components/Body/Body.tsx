import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard/Dashboard";
import Books from "./pages/Books/Books";
import styles from "./Body.module.css";
import IssuedBooks from "./pages/IssuedBooks/Issuedbooks";
import Student from "./pages/Student/Student";
import Setting from "./Dropdown/Setting";
import SignIn from "../SignIn";
export default function Body() {
  return (
    <>
      <div className={styles.container}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/issuedBooks" element={<IssuedBooks />}></Route>
            <Route path="/student" element={<Student />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
