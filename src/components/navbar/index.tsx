import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import navItems from "./items"
import ProfilePicture from '../icons/ProfilePicture.jpg';

function Navbar() {

    const [click, setClick] = useState(false);
    const content = <></>
    const handleClick = () => {
        setClick(!click);
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-300 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex rounded-lg size-10">
                    <img src={ProfilePicture}></img>
                </div>
                <div className="max-md:hidden">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-300">
                        {
                            navItems.map((item) => {
                                return (
                                    <Link spy={true} smooth={true} to={item.name}>
                                        <li className="text-black hover:text-blue-700 transition border-b-2 border-gray-300 hover:border-blue-700 cursor-pointer">{item.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    <div>
                        {click && content}
                    </div>
                </div>
                <button className="block sm:hidden transition" onClick={handleClick}>
                    {click ? <FaTimes /> : <CiMenuFries />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar;