import React, { useState} from "react";
import "./validForm.css";


function ValidForm () {
    const MESSAGE_ERROR = [
        {usename: "Username error"},
        {email: "Email error"},
        {password: "Password error"},
        {confirmPassword: " Password must be the same"}
    ];
    const REGEX = [
        {
            username: /^[a-zA-Z]{2,}$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
        }
    ];
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        let error = "";
        if (e.target.name === "password") {
            if (form.confirmPassword.value && form.confirmPassword) {
                error = e.target.value === form.confirmPassword.value ? "" : MESSAGE_ERROR[e.target.name]; 
            } else {
                error = REGEX[e.target.name].test(e.target.value) ? "" : MESSAGE_ERROR[e.target.name];
            }
        } else if (e.target.name === "confirmPassword") {
            error = e.target.value === form.confirmPassword.value ? "" : MESSAGE_ERROR[e.target.name];
        } else {
            error = REGEX[e.target.name].test(e.target.value) ? "" : MESSAGE_ERROR[e.target.name];
        }
        setForm({
            ...form,[e.target.name] : {value : e.target.value, error: error}
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
                <table>
                        <tr className={`custom-input ${form.usename && form.usename.error && "custom-input-error"}`}>
                            <td><lable>Username</lable></td>
                            <td>
                                <input name="username" value={(form.username && form.username.value) || ""} onChange={handleChange}></input>
                                {form.username && form.username.error && (<p className="error">{form.username.error}</p>)}
                            </td>
                        </tr>
                        <tr className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
                            <td><lable>Email</lable></td>
                            <td>
                                <input name="email" value={(form.email && form.email.value) || ""} onChange={handleChange}></input>
                                {form.email && form.email.error && (<p className="error">{form.email.error}</p>)}
                            </td>
                        </tr>
                        <tr className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}>
                            <td><lable>Password</lable></td>
                            <td>
                                <input type="password" name="password" value={(form.password && form.password.value) || ""} onChange={handleChange}></input>
                                {form.password && form.password.error && (<p className="error">{form.password.error}</p>)}
                            </td>
                        </tr>
                        <tr className={`custom-input ${form.confirmPassword && form.confirmPassword.error && "custom-input-error"}`}>
                            <td><lable>Confirm password</lable></td>
                            <td>
                                <input type="password" name="confirmPassword" value={(form.confirmPassword && form.confirmPassword.value) || ""} onChange={handleChange}></input>
                                {form.confirmPassword && form.confirmPassword.error && (<p className="error">{form.confirmPassword.error}</p>)}
                            </td>
                        </tr>
                </table>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ValidForm