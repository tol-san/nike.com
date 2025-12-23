import TopBar from './components/layout/TopBar'
import Header from './components/layout/Header'
import MobileMenu from "./components/navigation/MobileMenu";

import { useState } from "react";


function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" w-full bg-white">
        <TopBar/>
        <Header
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </>
  );
}

export default App