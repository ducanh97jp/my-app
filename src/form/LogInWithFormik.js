import React, { useState } from "react";
import { Formik } from "formik";
import "./validForm.css";

export default function LogInWithFormik() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleValidate = () => {
    let errors = {};
    if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email address";
    } else if (!form.email) {
      errors.email = "Required";
    }
    if (!form.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleSubmit = () => {
    alert("Login in successfully!!!");
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${
                errors.email ? "custom-input-error" : ""
              }`}
            >
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.email}</p>
            </div>
            <div
              className={`custom-input ${
                errors.password ? "custom-input-error" : ""
              }`}
            >
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password || ""}
                onChange={handleChange}
              />
              <p className="error">{errors.password}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
