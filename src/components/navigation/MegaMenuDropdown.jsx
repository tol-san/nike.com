import menuData from '../../data/menu.js'
import MegaMenuSection from "../ui/MegaMenuSection.jsx";

const MegaMenuDropdown = ({ activeMenu, setActiveMenu }) => {
  if (!activeMenu || !menuData[activeMenu]) return null;

  return (
    <div
      className="absolute left-0 right-0 bg-white border-t shadow-lg z-50"
      onMouseEnter={() => setActiveMenu(activeMenu)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-8">
            {menuData[activeMenu].featured?.map((section, idx) => (
              <MegaMenuSection
                key={idx}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>

          {menuData[activeMenu].categories?.map((category, idx) => (
            <MegaMenuSection
              key={idx}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuDropdown