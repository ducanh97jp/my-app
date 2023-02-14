import React, {useState} from "react";

function SignUp () {
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        const isValid = form.username && form.password && form.email && form.confirmPassword;
        alert(isValid ? "Sign in successfully!!!" : "Please fill out all the field!!!");
    }

    return (
        <div>
            <h1>Sing Up</h1>
            <form>
                <table>
                    <tr className="custom-input">
                        <td><lable>Username</lable></td>
                        <td><input type="text" name="username" value={form.username || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr className="custom-input">
                        <td><lable>Email</lable></td>
                        <td><input type="email" name="email" value={form.email || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr className="custom-input">
                        <td><lable>Password</lable></td>
                        <td><input type="password" name="password" value={form.password || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr className="custom-input">
                        <td><lable>Confirm password</lable></td>
                        <td><input type="password" name="confirmPassword" value={form.confirmPassword || ''} onChange={handleChange}/></td>
                    </tr>
                    <tr className="custom-input">
                        <td></td>
                        <td><button type="submit" onClick={handleSubmit}>Submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}
 export default SignUp;