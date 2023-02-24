import { useState } from "react";
import styles from "./SignIn.module.css";
import Nav from "./Nav/Nav";
import image from "./linrary.jpg";
export default function SignIn() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name: any) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.title}>WELCOME BACK</div>

      <div className={styles.input_container}>
        <label>Username or email </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className={styles.input_container}>
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className={styles.button_container}>
        <input type="submit" />
      </div>
    </form>
  );
  return (
    <>
      <div className={styles.container}>
        {isSubmitted ? <div> Logged In</div> : renderForm}
      </div>
    </>
  );
}
