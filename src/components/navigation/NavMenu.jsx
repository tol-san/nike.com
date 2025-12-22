import React from 'react'
import NavItem from './NavItem'
import MegaMenu from './MegaMenu'

const NavMenu = () => {
  return (
    <nav className=" flex font-medium space-x-6">
      <NavItem label="Men">
        <MegaMenu />
      </NavItem>

      <NavItem label="Women">
        <MegaMenu />
      </NavItem>

      <NavItem label="Kids">
        <MegaMenu />
      </NavItem>

      <NavItem label="Jordan">
        <MegaMenu />
      </NavItem>
    </nav>
  );
}

export default NavMenu