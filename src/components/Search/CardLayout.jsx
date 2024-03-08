function CardLayout({ children }) {
  return (
    <div className="relative  min-h-52 shadow-2xl shadow-blue-950 rounded-xl overflow-hidden hover:scale-105 my-3 ">
      {children}
    </div>
  );
}

export default CardLayout;
