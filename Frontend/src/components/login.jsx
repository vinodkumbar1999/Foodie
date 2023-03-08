import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()

    let handelLogin = (e) => {
        e.preventDefault();
        let data = { email, password }
        axios.post('http://localhost:4000/login', data)
            .then((res) => {
                if (res.data.message == 'Login successfull') {
                    navigate('/home')
                    alert('Login successfull')
                } else {
                    alert(res.data.message)
                }
            })
    }
    return (
        <div className="login container px-5" style={{marginTop:"170px"}}>
            <div className="card mt-5 px-5" >
                <div className="card-body" >
                    <h1 className="text-center m-5">Login</h1>
                    <div className="w-50 mx-auto">
                        <form action="" onSubmit={handelLogin}>
                        
                                <div className="email">
                                    <input type="email" className="form-control  mt-4" placeholder="Email Adress" name="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                </div>
                                <div className="password">
                                    <input type="password" className="form-control  mt-4" placeholder="password" name="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                                    <div className="login_button mx-2">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="signUp_button mx-2 " style={{ display: "flex", alignItems: "center" }} >
                                        <div className="mt-3 "> <p>Are you a new user?</p></div>
                                        <div>  <Link to='/signup' className="btn btn-outline-primary">Sign Up</Link></div>
                                    </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;