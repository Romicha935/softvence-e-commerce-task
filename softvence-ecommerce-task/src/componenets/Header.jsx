import { useState } from "react";
import { BiHeadphone, BiStore, BiX } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { PiPackage } from "react-icons/pi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between py-3">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <BiX size={22} /> : <IoMdMenu size={22} />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-semibold">
              <IoMdMenu size={18} className="text-green-600" />
              Categories
            </button>
            <a href="#" className="hover:text-green-600">Electronics</a>
            <a href="#" className="hover:text-green-600">Home Appliances</a>
            <a href="#" className="hover:text-green-600">Mother &amp; Baby</a>
            <a href="#" className="hover:text-green-600">Automotive</a>
            <a href="#" className="hover:text-green-600">Sports Gear</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            <PiPackage size={16} />
            TRACK ORDER
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-green-600">
            <BiHeadphone size={16} />
            HELP CENTER
          </a>
          <a href="#" className="flex items-center gap-1 hover:text-green-600 font-semibold">
            <BiStore size={16} className="text-green-600" />
            SELL WITH US
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <nav className="flex flex-col gap-3 p-4 text-sm font-medium">
            <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-semibold">
              <IoMdMenu size={18} className="text-green-600" />
              Categories
            </button>
            <a href="#" className="hover:text-green-600">Electronics</a>
            <a href="#" className="hover:text-green-600">Home Appliances</a>
            <a href="#" className="hover:text-green-600">Mother &amp; Baby</a>
            <a href="#" className="hover:text-green-600">Automotive</a>
            <a href="#" className="hover:text-green-600">Sports Gear</a>

            <hr className="my-2" />

            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <PiPackage size={16} />
              TRACK ORDER
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-green-600">
              <BiHeadphone size={16} />
              HELP CENTER
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-green-600 font-semibold">
              <BiStore size={16} className="text-green-600" />
              SELL WITH US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
