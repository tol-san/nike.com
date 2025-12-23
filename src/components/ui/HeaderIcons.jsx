import { Heart, Menu, ShoppingBag, User, X, Search } from "lucide-react";
import SearchBar from "./SearchBar";

const HeaderIcons = ({ onMobileMenuToggle, mobileMenuOpen }) => {
  return (
    <div className="flex items-center gap-2 ">
      <SearchBar />
      <button className="hover:bg-gray-100 p-2 rounded-full">
        <Search className="lg:hidden w-6 h-6" />
      </button>
      <button className="hover:bg-gray-100 p-2 rounded-full">
        <Heart className=" hidden lg:block w-6 h-6" />
        <User className=" lg:hidden w-6 h-6" />
      </button>

      <button className="hover:bg-gray-100 p-2 rounded-full">
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