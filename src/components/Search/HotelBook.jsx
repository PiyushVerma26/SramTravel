import { NavLink } from "react-router-dom";

function HotelBook({ children }) {
  return (
    <div className="min-h-72 shadow-2xl min-w-7xl border-2 border-grey  rounded-xl overflow-hidden  p-3 mb-3 relative flex flex-col ">
      {children}
    </div>
  );
}

export default HotelBook;
