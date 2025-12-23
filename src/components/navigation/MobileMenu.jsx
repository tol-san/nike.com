import { X } from "lucide-react";
import NikeLogo from "../ui/NikeLogo";
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navItems = ["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"];

  return (
    <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <NikeLogo />
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="space-y-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-2xl font-medium hover:text-gray-600"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t space-y-4">
          <a href="#" className="block text-gray-600">
            Find a Store
          </a>
          <a href="#" className="block text-gray-600">
            Help
          </a>
          <a href="#" className="block text-gray-600">
            Join Us
          </a>
          <a href="#" className="block text-gray-600">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
