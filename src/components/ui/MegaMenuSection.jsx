import React from 'react'

const MegaMenuSection = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-bold text-sm mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i}>
            <a href="#" className="text-gray-600 hover:text-black text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenuSection