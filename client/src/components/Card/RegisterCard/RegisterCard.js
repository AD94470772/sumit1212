import { Link, useNavigate } from "react-router-dom";
import "./RegisterCard.css";
import { useState } from "react";

const RegisterCard = () => {
  const [formData, setformData] = useState({});
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setformData({ ...formData, [ev.target.name]: ev.target.value });
    console.log(formData);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data)

    setTimeout(() => {
      navigate("/account/login");
    },1000);
  };

  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>

        {/* nmj */}
        <form onSubmit={handleSubmit} className="register__inputs">
          <div className="fname__input__container reg__input__container">
            <label className="fname__label input__label">First name</label>
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              className="fname__input register__input"
            />
          </div>
          <div className="lname__input__container reg__input__container">
            <label className="lname__label input__label">Last name</label>
            <input
              onChange={handleChange}
              name="lastName"
              type="text"
              className="lname__input register__input"
            />
          </div>
          <div className="email__input__container reg__input__container">
            <label className="email__label input__label">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="email__input register__input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="password__input__container reg__input__container">
            <label className="password__label input__label">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="password__input register__input"
            />
          </div>
          <div className="register__button__container">
            <button type="submit" className="register__button">
              Create Account
            </button>
          </div>
        </form>
        {/* kjnj */}
        <div className="register__other__actions">
          <div className="register__login__account">
            Already have account? <Link to="/account/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
