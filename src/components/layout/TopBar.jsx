
const TopBar = () => {
  return (
    <div className="bg-gray-100 px-6 py-2 text-xs md:flex justify-between items-center hidden ">
      <div className="flex gap-4">
        <a href="#" className="hover:text-gray-600">
          Find a Store
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Help
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Join Us
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gray-600">
          Sign In
        </a>
      </div>
    </div>
  );
}

export default TopBar