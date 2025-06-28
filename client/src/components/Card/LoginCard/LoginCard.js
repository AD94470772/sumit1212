import { Link, useNavigate } from "react-router-dom";
import "./LoginCard.css";
import { useState } from "react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});

  const handleChange = (ev) => {
    console.log(ev.target.value);
    setformData({ ...formData, [ev.target.name]: ev.target.value });
  };
 
  console.log(formData);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    dispatch(signInSuccess(data.user));

    console.log("skjcnhjbhg",data.user);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Login</h1>
        </div>
        {/* ji */}
        <form onSubmit={handleSubmit} className="login__inputs">
          <div className="email__input__container input__container">
            <label className="email__label input__label">Email</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              className="email__input login__input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="password__input__container input__container">
            <label className="password__label input__label">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="password__input login__input"
              placeholder="**********"
            />
          </div>
          <div className="login__button__container">
            <button type="submit" className="login__button">
              LOGIN
            </button>
          </div>
        </form>
        {/* jhjbh */}
        <div className="login__other__actions">
          <div className="login__forgot__password">Forgot password?</div>
          <div className="login__new__account">
            Don't have account?{" "}
            <Link to="/account/register">Create account</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
