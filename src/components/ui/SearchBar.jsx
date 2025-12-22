import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className=" relative">
      <div>
        <Search className=" absolute -translate-y-1/2 top-1/2 text-gray-500 p-1.5 rounded-full group-hover:bg-white h-9 w-9" />
        <input placeholder="Search" type="text" className="text-lg bg-gray-200/90  p-1 rounded-full pl-10"/>

      </div>
    </div>
  );
};

export default SearchBar;
