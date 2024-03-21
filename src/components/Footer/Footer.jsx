import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-blue-800 text-white text-lg">
        <div className="flex gap-10 justify-center p-5">
          <NavLink to={"/terms"}>
            <p>Terms of Use</p>
          </NavLink>
          <NavLink to={"/privacy-policy"}>
            <p>Privacy-Policy</p>
          </NavLink>
          <NavLink to="/faq">
            <p>FAQ</p>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Footer;
