import { useState } from 'react';
import * as bcrypt from 'bcryptjs';
import { FaWpforms } from "react-icons/fa6";
import Form from "./forms";
import Home from '../home';
import Project from '../project';
import Work from '../work';
import Sidebar from '../../components/sidebar';
import navItems from '../../components/sidebar/items';
import Contact from '../contact';

function Admin() {

    const [authorize, setAuthorize] = useState(false);
    const [close, setClose] = useState(false);

    const handleAuthorize = () => {
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;

        const compare = bcrypt.compareSync(password, bcrypt.hashSync("admin-profile-website", 10));

        if (username === "admin" && compare === true) {
            navItems.push({
                name: "Form",
                href: "#form",
                logo: (<FaWpforms size={20} />)
            })
            setAuthorize(true);
            console.log(authorize);
        }
    }

    const handleClose = () => {
        setClose(true);
    }

    return (
        <>
            {
                close === false ? (
                    <div id="login" className='bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex'>
                        <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
                            <div className='relative bg-white rounded-lg shadow'>
                                <button type='button' onClick={handleClose}
                                    className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close'
                                >
                                    <svg
                                        aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className='p-5'>
                                    <h3 className="text-2xl mb-0.5 font-medium"></h3>
                                    <p className="mb-4 text-sm font-normal text-gray-800"></p>

                                    <div className="text-center">
                                        <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                                            Login as admin
                                        </p>
                                        <p className="mt-2 mb-2 text-sm leading-4 text-slate-600">
                                            You must be logged in to perform this action.
                                        </p>
                                    </div>
                                    <form className='w-full'>
                                        <label className='sr-only'>Username</label>
                                        <input type="text" name="username" id="username"
                                            className='block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus-ring-black focus:ring-offset'
                                            placeholder='Username'
                                        />
                                        <label className="sr-only">Password</label>
                                        <input type="password" name="password" id="password"
                                            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                            placeholder="Password"
                                        />
                                        <button type="button"
                                            className="inline-flex w-full mt-3 items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                                            onClick={() => { handleAuthorize() }}
                                        >
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
            {
                authorize === true ? (
                    <>
                        <Sidebar />
                        <Home />
                        <Work />
                        <Project />
                        <Contact />
                        <Form />
                    </>
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default Admin;