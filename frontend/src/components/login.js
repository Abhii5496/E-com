import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom'

const Login = () =>{

    const[email, setEmail] =React.useState('')
    const[password, setPassword] =React.useState('')
    const navigate= useNavigate();

    useEffect( () =>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/")
        }
    })

    const handleLogin = async () =>{
        
        let result = await fetch("http://localhost:3000/login",{
            method: "post",
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/")

        } 
        else{
            alert("Enter correct details")
        }

    }

    return (
        <div className="signup">
            <h1>Login</h1>
            
            <input className="inputBox" type="text"   placeholder="Enter Email" required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
            <input className="inputBox" type="password" placeholder="Enter password" required
            onChange={(e) => setPassword(e.target.value)}
            value={password}

            />
            <button onClick={handleLogin} className="app-button" type="button">Log in</button>
            
        </div>
    )
}




export default Login
