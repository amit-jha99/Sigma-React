import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

  // let btnName = "Login";
  let [btnName,setbtnName] = useState("Login")
    return (
      
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
            setbtnName(  btnName === "Login" ? btnName = "Logout" : btnName = "Login");
              console.log(btnName);
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;