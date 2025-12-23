import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-1">
      <Search className="w-5 h-5 text-gray-600" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none ml-2 w-40"
      />
    </div>
  );
}

export default SearchBar