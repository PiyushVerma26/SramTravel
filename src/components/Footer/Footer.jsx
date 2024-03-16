import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-blue-800 text-white text-lg">
        <div className="flex flex-col items-center p-5 bg-blue-950 font-customFont">
          <h1 className="text-3xl">Save time and money!</h1>
          <p>Sign up to get best deals...</p>
          <div className="flex gap-2 mt-4 font-customFont flex-wrap">
            <input
              className="px-5 py-2 rounded"
              type="text"
              placeholder="Your email address"
            />
            <button className="px-12  bg-blue-700 rounded">Subscribe</button>
          </div>
        </div>
        <div className="flex gap-10 justify-center p-5">
          <p>Terms of Use</p>
          <p>Privacy-Policy</p>
          <p>FAQ</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
