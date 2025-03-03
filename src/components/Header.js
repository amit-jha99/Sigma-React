import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("Header Rendered");

  // if no dependecny array useEffect will be called on every render.
  // if dependency array is empty => [] => useEffect will be called only once(on initial render)
  // if dependency array has some value => [btnName] => useEffect will be called whenever the value of btnName changes.
  useEffect(() => {
    console.log("useEffect called");
  },[btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
        <li>
          onlineStatus : {onlineStatus ? "🟩" :"🔴"}
        </li>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About us</Link></li>
          <li><Link to = "/contact">Contact us</Link></li>
          <li><Link to = "/grocery">Grocery</Link></li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
