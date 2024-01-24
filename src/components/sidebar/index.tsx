import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import navItems from "./items"

function Sidebar() {
    const [nav, setNav] = useState(false);
    // const content = <></>
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden" />
            {
                nav ? (
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        {
                            navItems.map((item, index) => (
                                <a key={index} href={item.href} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                                    {item.logo}
                                    <span className="pl-4">{item.name}</span>
                                </a>
                            ))
                        }
                    </div>
                ) : (
                    ''
                )
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    {
                        navItems.map((item, index) => (
                            <a key={index} href={item.href} className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                                {item.logo}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;