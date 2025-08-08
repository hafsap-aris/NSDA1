import React from "react";

function Navbar(){
return(
    <>
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
        <ul className="flex gap-6">
            <li className="hover:text-gray-300 cursor-pointer"><a href="#">Home</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#">Tasks</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#">Explore</a></li>
            <li className="hover:text-gray-300 cursor-pointer"><a href="#">About</a></li>
        </ul>
    </nav>
    </>
)
}
export default Navbar;