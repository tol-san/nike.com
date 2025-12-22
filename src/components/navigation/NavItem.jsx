import React, { useState } from "react";

const NavItem = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button>{label}</button>
      {open && children}
    </div>
  );
};

export default NavItem;
