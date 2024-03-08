import React from "react";

function FormCard({ children }) {
  return (
    <div className=" w-full p-2 pt-6 md:pt-10 rounded-md bg-transparent flex flex-col justify-evenly  flex-wrap ">
      {children}
    </div>
  );
}

export default FormCard;
