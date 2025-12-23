
import menuData from '../../data/menu'

const DesktopNavigation = ({ activeMenu, setActiveMenu }) => {
  const navItems = ["Men", "Women", "Kids", "Sale", "SNKRS"];

  return (
    <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
      {navItems.map((item) => (
        <button
          key={item}
          className="text-base font-medium hover:border-b-2 border-black pb-6 -mb-4 transition-all"
          onMouseEnter={() => {
              const key = item.toLowerCase();
            if (menuData[key]) setActiveMenu(key);
          }}
          onMouseLeave={() => setActiveMenu(null)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default DesktopNavigation