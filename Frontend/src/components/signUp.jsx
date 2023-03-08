import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let [username, setusername] = useState("")
    let [phoneNo, setphoneNo] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [confirmPassword, setconfirmpassword] = useState("")

    let navigate = useNavigate()

    let handelSingUp = (e) => {
        e.preventDefault();
        let data = { username, phoneNo, email, password, confirmPassword }
        if (username && email && (password === confirmPassword)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })

        } else {
            alert("Invalid credentials")
        }
    }



    return (
        <div className="signUp  container px-5" style={{marginTop:"130px"}}>
            <div className="card mt-5 px-5">
                <h1 className="text-center">Sign Up</h1>
                <div className="w-50 mx-auto card-body">
                    <form action="" onSubmit={handelSingUp}>
                        <div className="name">
                            <input type="text" className="form-control" placeholder="Enter Name" name="username" value={username} onChange={(e) => setusername(e.target.value)} />
                        </div>
                        <div className="mobileNo">
                            <input type="telephone" className="form-control mt-4" placeholder="Phone Number" name="phoneNo" value={phoneNo} onChange={(e) => setphoneNo(e.target.value)} />
                        </div>
                        <div className="email">
                            <input type="email" className="form-control mt-4" placeholder="Email Adress" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div className="password">
                            <input type="password" className="form-control mt-4" placeholder="Password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className="confirm_password">
                            <input type="password" className="form-control mt-4" placeholder="Confirm password" name="confirmpassword" value={confirmPassword} onChange={(e) => setconfirmpassword(e.target.value)} />
                        </div>
                        <div className="signupbutton" style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                            <div className="signup_button mx-2">
                                <button className="btn btn-primary">Sign up</button>
                            </div>
                            <div className="login_button mx-4" style={{ display: "flex", alignItems: "center" }} >
                                <div className="mt-3 "> <p>Already a user?</p></div>
                                <div><Link to="/" className="btn btn-outline-primary">Login</Link></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;