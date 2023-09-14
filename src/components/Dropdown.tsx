"use client";
import React, { useState } from "react";
function DropdownToggler({ children, lead }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="dropdown">
      <a>{lead}</a>
      <button className="dropdown toggler" onClick={toggleDropdown}>
        <i className="fa fa-angle-down"></i>
      </button>
      {isOpen && <>{children}</>}
    </li>
  );
}

function DropdownOptions({ children }: any) {
  return <ul className="dropdown-list show">{children}</ul>;
}

export { DropdownToggler, DropdownOptions };
