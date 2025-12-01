import {useState,useEffect} from "react";
import {LOGO_URL} from "./utils/constants";
export const Header = () => {
  const [loginBtn,setLoginBtn]=useState("login");
  useEffect(()=>{
    console.log("UseEffect Called");
  })
  return (
    <div className="header">
      <div className="logo1">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-details">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="loginbtn" onClick={()=>{
          loginBtn==="login" ? setLoginBtn("logout"):setLoginBtn("login")
          }}
          > {loginBtn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
