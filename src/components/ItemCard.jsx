import React from "react";

function ItemCard({ children }) {
  return (
    <div className="grid md:gap-5 py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}

export default ItemCard;
