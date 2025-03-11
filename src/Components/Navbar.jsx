import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-blue-400">
      <div className="flex justify-between">

        <NavLink to="/">
          <div>
            <img src="../logo.png" />
          </div>
        </NavLink>

        <div> 

          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">

            <div>
              <FaShoppingCart />
            </div>

          </NavLink>

        </div>

      </div>

    </div>
  );
}

export default Navbar;
