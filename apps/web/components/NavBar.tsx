/* eslint-disable react/button-has-type */
import React from 'react';

function NavBar() {
  return (
    <nav className="outline-solid bg-transparent px-4 py-2 flex items-center justify-between">
      <div>
        {/* Logo */}
        <img src="logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="flex-grow text-center">
        {/* Buttons */}
        <button className="text-purple-900 mx-4">Button 1</button>
        <button className="text-purple-900 mx-4">Button 2</button>
        <button className="text-purple-900 mx-4">Button 3</button>
        <button className="text-purple-900 mx-4">Button 4</button>
      </div>
      <div>
        {/* Right button */}
        <button className="text-white ring-purple-900 text-purple-900">Right Button</button>
      </div>
    </nav>
  );
}

export default NavBar;