import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../../../actions/login";
import ErrorMessage from "../../SharedComponents/Error";
import LoadingComponent from "../../SharedComponents/Loading";

const Login = ({ showLog, SocialWidget }) => {
  const {loading, error} = useSelector((state)=>state.loginData)
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginDetails;

  const onChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  console.log(email.length);
  console.log(password.length);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("email and password must not be empty");
      return;
    }

    dispatch(loginAction(loginDetails));
  };
  return (
    <>
      <form
        className={`${showLog ? "loginShow" : "loginHide"}`}
        id="loginBox"
        method="post"
        onSubmit={onSubmit}
      >
        <input
          id="firstOfType"
          onChange={onChange}
          name="email"
          type="text"
          placeholder="E-mail"
          value={email}
          required
        />
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          required
        />

        {/* <input style={{ marginTop: '40px' }} type='submit' value='Login' id='logsub' className="lr-submit" onClick={onSubmit} /> */}

        <div className="btn-box mt-3">
          <button
            style={{ width: "100%", fontSize: "20px", marginTop: "40px" }}
            value="Login"
            id="logsub"
            type="submit"
            className="theme-btn btn-style-three"
            onClick={onSubmit}
          >
            <span className="btn-title">{loading?<LoadingComponent/>:"Login"}</span>
          </button>
        </div>
        {error&&(<ErrorMessage errorMessage={error}/>)}
        <SocialWidget />
      </form>
    </>
  );
};

export default Login;
