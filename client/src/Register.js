import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Register(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history=useNavigate()
    const hanldeSubmit=(e)=>{
        axios.post("http://localhost:4000/register",{email,password})
            .then(res=>console.log(res.data))
        e.preventDefault()
        setEmail("")
        setPassword("")
        alert("You are navigatng to login page and access your account")
        history("/login")
    }
    return(
        <div className="col-md-4 col-lg-3 col-sm-6 form">
            <h3>Register Form</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={hanldeSubmit}>Register</button>
            </form>
        </div>
    )
}
export default Register;