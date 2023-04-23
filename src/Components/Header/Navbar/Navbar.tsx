import { useState } from "react";
import { NavLink } from "react-router-dom";

type MenuItem = {
  id : number
  name: string;
  link: string;
}; 

const menuItems: MenuItem[] = [
  {id: 1, name: "Home", link: "/home" },
  {id: 2, name: "About", link: "/about" },
  {id: 3, name: "Skills", link: "/skills" },
  {id: 4, name: "Contacts", link: "/contacts" }
];

export const Navbar = () => {

    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {menuItems.map((menuItem) => (
                  <NavLink
                    key={menuItem.id}
                    to={menuItem.link}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                  >
                    {menuItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {menuItems.map((menuItem) => (
            <NavLink 
              key={menuItem.id}
              to={menuItem.link}
              className = "md:hidden block px-3 py-2 rounded-md font-medium text-white hover:bg-gray-700 text-3xl"
              onClick={() => {
                toggleMenu();
              }}>
                {menuItem.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
)};