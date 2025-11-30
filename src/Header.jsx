import {useState} from "react";
export const Header = () => {
  const [loginBtn,setLoginBtn]=useState("login");
  return (
    <div className="header">
      <div className="logo1">
        <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" />
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
