
import { Heart, Handbag } from "lucide-react";
import logo from "../../assets/icons/nike.svg";
import NavMenu from '../navigation/NavMenu'
import SearchBar from '../ui/SearchBar'
import Container from '../layout/Container'

const NavBar = () => {
  return (
    <Container>
      <div className="flex justify-between py-2 items-center">
        {/* Logo */}
        <div>
          <img src={logo} alt="Nike logo" className=" w-20" />
        </div>

        {/* Middle */}
        <div>
          <NavMenu />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-5 text-gray-700 pr-6">
          {/* Search */}
          <SearchBar />
          <Heart />
          <Handbag />
        </div>
      </div>
    </Container>
  );
};

export default NavBar;
