import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function MasterNavbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">

         <ul className="nav">
           <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <DropdownButton className="mt-2" variant="light" title="Projects">
                <Dropdown.Item href="/recordlist">Employee Records</Dropdown.Item>
            </DropdownButton>
           </li>
         </ul>
         
       </div>
     </nav>
   </div>
 );
}
