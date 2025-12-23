import NikeLogo from "../ui/NikeLogo";
import DesktopNavigation from "../navigation/DesktopNavigation";
import MegaMenuDropdown from "../navigation/MegaMenuDropdown";
import HeaderIcons from "../ui/HeaderIcons";

const Header = ({
  activeMenu,
  setActiveMenu,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="relative bg-white border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NikeLogo />
          </div>

          <DesktopNavigation
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />

          <HeaderIcons
            onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>
      </div>

      <MegaMenuDropdown activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </header>
  );
};

export default Header;
