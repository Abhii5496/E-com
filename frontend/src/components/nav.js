import React from "react";
import {Link, useNavigate} from "react-router-dom"
const Nav =() => {
    
    
    const auth= localStorage.getItem("user");
    const navigate = useNavigate();
    const logout =() => {
        localStorage.clear()
        navigate("/signup")
    }
    return(
        <div>
            <img className="logo" src="https://img.favpng.com/16/8/21/iron-man-logo-decal-symbol-png-favpng-X2881fmYqiK6wa2qBMVHmMFcS.jpg" alt="logo"></img>
            {auth ?   <ul className="nav-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add product</Link></li>
                {/* <li><Link to="/update">Update product</Link></li> */}
                
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

                </ul>
                :
                     <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/Login">Login</Link></li>

                </ul>
                }
            
        </div>
    )
}

export default Nav;
