import "./Login.css";
import infinity from "../assets/infinity.png";
import { useState } from "react";
import warning from "../assets/warning.png";

import { auth, provider } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import videobg from "../assets/videobg.mp4";

const Login = () => {
  const [NewUser, setNewUser] = useState(true);

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [error, seterror] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    seterror(false);

    if (NewUser) {
      // create user
      createUserWithEmailAndPassword(auth, email, password)
        .then((UserDetails) => {
          // const user = user
          console.log(UserDetails);
          localStorage.setItem("username", username);
        })
        .catch((error) => {
          seterror(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    } else {
      // sign in user
      signInWithEmailAndPassword(auth, email, password)
        .then((UserDetails) => {
          console.log(UserDetails);
        })
        .catch((error) => {
          seterror(true);
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
        });
    }
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // });

  // const SignIn = () => {
  //   const [value, setValue] = useState("");

  return (
    <div className="app">
      <video src={videobg} autoPlay loop muted />
      <div className="overlay"></div>
      <div className="login-page">
        {/* <video src={videobg} autoPlay loop muted />
        <div className="overlay"></div> */}
        <header>
          <span>
            from <i>APS</i>
          </span>
        </header>

        <img className="logo" src={infinity} alt="" />

        <h2 className="title">
          Sub-Min <br />
          Dashboard
        </h2>

        <form onSubmit={submit}>
          {NewUser && (
            <div className="username">
              <input
                onChange={(e) => setusername(e.target.value)}
                type="username"
                id="username"
                required
              />
              <label htmlFor="username">username</label>
            </div>
          )}

          <div className="email">
            <input
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
              required
            />
            <label htmlFor="email">email</label>
          </div>

          <div className="password">
            <input
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              required
            />
            <label htmlFor="password">password</label>
          </div>

          {error && <img src={warning} alt="" className="status" />}
          {error && <span className="error">Process Failed</span>}
          {error && <span className="error">{ErrorMsg}</span>}

          <button type="submit">{NewUser ? "Sign Up" : "Log In"}</button>

          <button onClick={handleClick}>SignIn With Google</button>

          {NewUser ? (
            <span className="user-stat">
              Already have an account?{" "}
              <b
                onClick={() => {
                  setNewUser(false);
                  seterror(false);
                }}
              >
                Log In
              </b>
            </span>
          ) : (
            <span className="user-stat">
              Don't have an account?{" "}
              <b
                onClick={() => {
                  setNewUser(true);
                  seterror(false);
                }}
              >
                Sign Up
              </b>
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
