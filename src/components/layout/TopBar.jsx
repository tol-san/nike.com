import React from 'react'

const TopBar = () => {
  return (
    <div className="bg-gray-100 px-6 py-2 text-xs flex justify-between items-center">
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-600">
          Find a Store
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Help
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Join Us
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default TopBar