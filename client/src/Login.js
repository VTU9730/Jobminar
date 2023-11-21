import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const history=useNavigate()
    const hanldeSubmit=(e)=>{
        
        axios.post("http://localhost:4000/login",{email,password})
            .then(res=>{
                if(res.data==""){
                    setError("Credentials are wrong")
                }
                else{
                    alert("you are navigating to home page")
                    history("/home")
                }
            })   
        e.preventDefault()
        setEmail("")
        setPassword("")
    }
    return(
        <div className="col-md-4 col-lg-3 col-sm-6 form">
            <h3>Login Form</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} value={password} />
                </div>
                <p style={{"color":"red"}}>{error}</p>
                <button type="submit" className="btn btn-primary" onClick={hanldeSubmit}>Login</button>  
            </form>
        </div>
    )
}
export default Login;