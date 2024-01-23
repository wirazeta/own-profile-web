import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from 'react-icons/fa';
import navItems from "./items"
import ProfilePicture from '../icons/ProfilePicture.jpg';

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    // const content = <></>
    const handleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <nav className="w-full h-auto bg-gray-300 lg:px-24 md:px-16 sm:px-14 px-12 py-1 shadow-md">
            <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
                {/* Navbar logo & toggle button section */}
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link
                            to="/profile"
                            className="text-3x1 text-orange-500 font-semibold tracking-[0.1rem] hover:cursor-pointer"
                        >
                            <img
                                className="flex size-10 rounded-full"
                                src={ProfilePicture} alt="profile-picture" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                                onClick={handleNavbar}
                            >
                                {
                                    navbar ?
                                        (<FaTimes
                                            className="text-gray-400 cursor-pointer"
                                            size={24}
                                        />) :
                                        (<FaBars
                                            className="text-gray-400 cursor-pointer"
                                            size={24}
                                        />)
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"
                        }`}
                >
                    <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
                        {navItems.map((items) => (
                            <li>
                                <Link
                                    to={items.href}
                                    className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700 hover:cursor-pointer"
                                >
                                    {items.name}
                                </Link>
                                {/* <a
                                    href={items.href}
                                    className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                                >
                                    {items.name}
                                </a> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;