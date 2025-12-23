import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import SearchBar from "./SearchBar";

const HeaderIcons = ({ onMobileMenuToggle, mobileMenuOpen }) => {
  return (
    <div className="flex items-center gap-4">
      <SearchBar />
      <button className="hidden md:block hover:bg-gray-100 p-2 rounded-full">
        <Heart className="w-6 h-6" />
      </button>
      <button className="hidden md:block hover:bg-gray-100 p-2 rounded-full">
        <ShoppingBag className="w-6 h-6" />
      </button>
      <button
        className="lg:hidden hover:bg-gray-100 p-2 rounded-full"
        onClick={onMobileMenuToggle}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default HeaderIcons