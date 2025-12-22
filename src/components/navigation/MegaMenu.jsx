import React from 'react'

const MegaMenu = () => {
  return (
    <div className="absolute w-full left-0 top-full   shadow-xl bg-green-600">
      <div className="mx-auto max-w-7xl grid grid-cols-4 gap-8 p-10">
        <p>Limted Time</p>
        <ul>
          <li>
            <a href="#">Extra 25% off Select Styles</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MegaMenu