import React, { useState } from "react";

// scss
import './style.scss';

// images
import { FaCaretDown } from 'react-icons/fa';
const DropDown = ({ label,lists,key }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdownEnter = () => {
      setShowDropdown(true);
    };
  
    const handleDropdownLeave = () => {
      setShowDropdown(false);
    };
  return (
    <div className="dropdown"onMouseEnter={handleDropdownEnter}>
      <div className="dropdown-label" > {label}
    {/* //   <i class="fa fa-caret-down" aria-hidden="true"></i> */}
    <FaCaretDown/>
      </div>
     {/* {showDropdown &&  */}
      <ul className={`dropdown-list ${ showDropdown ? "show" : "hide"}`} onMouseLeave={handleDropdownLeave}>
      {lists.map((list) => (
        <li id={list?.id} key={list}>{list?.name}</li>
      ))}
    </ul>
     {/* } */}
    </div>
  );
};
export default DropDown;
