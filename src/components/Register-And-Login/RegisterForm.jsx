import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { GiUnlocking } from "react-icons/gi";
import { FaGooglePlus, FaFacebook } from "react-icons/fa";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import Card from "../Card";
import Title from "./Title";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState("password");

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setType(type === "password" ? "text" : "password");
  };

  return (
    <Card>
      <Title title="Register Now" />
      <form className="flex flex-col gap-5 w-full md:w-auto">
        <div className="relative flex items-center rounded-full p-4 text-black bg-white shadow-2xl hover:scale-105">
          <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs md:text-2xl text-blue-950" />
          <input
            type="email"
            required
            placeholder="Enter Email Address"
            className="pl-12 border-none bg-transparent outline-none w-full text-xs md:text-xl"
          />
        </div>

        <div className="relative flex items-center rounded-full p-4 text-black bg-white shadow-2xl hover:scale-105">
          <GiUnlocking className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-950 text-xs md:text-2xl" />
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter Password"
            className="pl-12 border-none bg-transparent outline-none w-full text-xs md:text-xl"
          />
          {showPassword ? (
            <RiEyeLine
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-black cursor-pointer"
              onClick={handleTogglePassword}
            />
          ) : (
            <RiEyeCloseLine
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-black cursor-pointer"
              onClick={handleTogglePassword}
            />
          )}
        </div>
        <div className="relative flex items-center rounded-full p-4 text-black bg-white shadow-2xl hover:scale-105">
          <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-950 text-xs md:text-2xl" />
          <input
            type="password"
            required
            placeholder="Re-Enter Password"
            className="pl-12 border-none bg-transparent outline-none w-full text-xs md:text-xl"
          />
        </div>
        <button
          type="submit"
          className="font-bold bg-blue-950 p-4 rounded-full text-white hover:scale-105 w-full md:w-auto"
        >
          Register Now
        </button>
        <p className="text-black md:text-lg text-sm">
          Already Have An Account <span className="font-bold">?</span>{" "}
          <Link className="font-bold text-blue-950" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
      <div className="mt-5 relative">
        <hr className="text-black" />
        <p className="absolute top-[-13px] bg-white px-2 left-1/2 transform -translate-x-1/2">
          OR
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-center gap-3 mt-4">
        <button className="bg-blue-900 text-white font-bold p-3 rounded-full text-lg flex flex-row gap-2 items-center min-w-32 justify-center ">
          <FaGooglePlus /> Google
        </button>
        <button className="bg-blue-600 text-white font-bold p-3 rounded-full text-lg flex flex-row gap-2 items-center min-w-32 justify-center">
          <FaFacebook /> Facebook
        </button>
      </div>
    </Card>
  );
}

export default RegisterForm;
