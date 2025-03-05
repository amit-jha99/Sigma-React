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
    <div className = "flex  justify-between bg-pink-100 shadow-lg px">
      <div className="logo-container">
        <img className ="w-56" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
          onlineStatus : {onlineStatus ? "🟩" :"🔴"}
        </li>
          <li className="px-4"><Link to ="/">Home</Link></li>
          <li className="px-4"><Link to ="/about">About us</Link></li>
          <li className="px-4"><Link to = "/contact">Contact us</Link></li>
          <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
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
