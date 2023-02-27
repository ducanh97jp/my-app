import React, { useState} from "react";
import "./validForm.css";

export default function ValidForm () {
    const MESSAGE_ERROR = {
        usename: "Username error",
        email: "Email error",
        password: "Password error",
        confirmPassword: " Password must be the same"
    };
    
    const REGEX = {
            username: /^[a-zA-Z]{2,}$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
        };
    const [form, setForm] = useState({});

    function handleChange(event) {
        let error = "";
        if (event.target.name === "password") {
            if (form.confirmPassword && form.confirmPassword.value) {
                error = event.target.value === form.confirmPassword.value ? "" 
                : MESSAGE_ERROR[event.target.name]; 
            } else {
                error = REGEX[event.target.name].test(event.target.value) ? "" 
                : MESSAGE_ERROR[event.target.name];
            }
        } else if (event.target.name === "confirmPassword") {
            error = event.target.value === form.password.value ? "" 
            : MESSAGE_ERROR[event.target.name];
        } else {
            error = REGEX[event.target.name].test(event.target.value) ? "" 
            : MESSAGE_ERROR[event.target.name];
        }
        setForm({
            ...form,[event.target.name] : {value : event.target.value, error: error}
        });
    }
    const handleSubmit = () => {
        const isFilled = form.username && form.username.value 
                        && form.email && form.email.value 
                        && form.password && form.password.value 
                        && form.confirmPassword && form.confirmPassword.value;
        const isError = isFilled && (form.username.error || form.email.error || form.password.error || form.confirmPassword.error);
        alert(isFilled && !isError ? "Sign in successfully!!!" : "Please fill out all the field!!!");
    }

    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <div
            className={`custom-input ${
              form.usename && form.usename.error && "custom-input-error"
            }`}
          >
            <lable>Username</lable>
            <input
              name="username"
              value={(form.username && form.username.value) || ""}
              onChange={handleChange}
            ></input>
            {form.username && form.username.error && (
              <p className="error">{form.username.error}</p>
            )}
          </div>
          <div
            className={`custom-input ${
              form.email && form.email.error && "custom-input-error"
            }`}
          >
            <lable>Email</lable>
            <input
              name="email"
              value={(form.email && form.email.value) || ""}
              onChange={handleChange}
            ></input>
            {form.email && form.email.error && (
              <p className="error">{form.email.error}</p>
            )}
          </div>
          <div
            className={`custom-input ${
              form.password && form.password.error && "custom-input-error"
            }`}
          >
            <lable>Password</lable>
            <input
              type="password"
              name="password"
              value={(form.password && form.password.value) || ""}
              onChange={handleChange}
            ></input>
            {form.password && form.password.error && (
              <p className="error">{form.password.error}</p>
            )}
          </div>
          <div
            className={`custom-input ${
              form.confirmPassword &&
              form.confirmPassword.error &&
              "custom-input-error"
            }`}
          >
            <lable>Confirm password</lable>
            <input
              type="password"
              name="confirmPassword"
              value={(form.confirmPassword && form.confirmPassword.value) || ""}
              onChange={handleChange}
            ></input>
            {form.confirmPassword && form.confirmPassword.error && (
              <p className="error">{form.confirmPassword.error}</p>
            )}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
}