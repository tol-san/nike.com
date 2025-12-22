import jordan from "../../assets/icons/jordan.svg";
import converse from "../../assets/icons/converse.svg";
import Container from "../layout/Container";
const TopNavBar = () => {
  return (
    <div className=" bg-gray-300/30 text-xs py-1.5 font-medium hidden lg:block">
      <Container>
        <div className=" flex justify-between items-center">
          {/* Left */}
          <div className="flex">
            <img src={jordan} alt="" className=" w-6 h-6 mr-6" />
            <img src={converse} alt="" className=" w-6 h-6" />
          </div>

          {/* Right */}
          <div className="flex space-x-3">
            <span>
              <a className=" hover:text-gray-500" href="#">
                Find a Store
              </a>
            </span>
            <span> | </span>
            <span>
              <a className=" hover:text-gray-500" href="#">
                Help
              </a>
            </span>
            <span> | </span>
            <span>
              <a className=" hover:text-gray-500" href="#">
                Join Us
              </a>
            </span>
            <span> | </span>
            <span>
              <a className=" hover:text-gray-500" href="#">
                Sign In
              </a>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNavBar;
