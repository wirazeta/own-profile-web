import projectItems from "./items";
import { useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
function Project() {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = projectItems.slice(firstIndex, lastIndex);
    const npage = Math.ceil(projectItems.length / recordsPerPage);
    const number = [...Array(npage + 1).keys()].slice(1);

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const changePage = (n: number) => {
        setCurrentPage(n);
    }
    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-15">
            <h1 className="text-4xl font-bold text-center text-gray-600">Projects</h1>
            <p className="text-center py-8 text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum obcaecati
                nemo culpa neque voluptates deserunt impedit natus harum iste praesentium
                reprehenderit itaque, assumenda ratione, earum in fuga? Tenetur, porro maxime!
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                {
                    records.map((item, index) => (
                        <div key={index} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-600">
                            <img src={item.img} alt="/" className="rounded-xl group-hover:opacity-10"/>
                            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                                    {item.title}
                                </h3>
                                <p className="pb-4 pt-2 text-white text-center">React Js</p>
                                <a href="/">
                                    <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</p>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="justify-center flex items-center text-center text-gray-400 pt-4 pb-2 text-3xl">
                <button className="px-1"
                    onClick={prevPage} type="button"><BsFillArrowLeftCircleFill /></button>
                <div className="justify-center gap-3 w-full">
                    {
                        number.map((n) => (
                            <button key={n} className={`mx-1 rounded-full w-5 h-5 ${n === currentPage ? 'bg-gray-300' : 'bg-gray-600'}`}
                                onClick={() => { changePage(n) }}></button>
                        ))
                    }
                </div>
                <button className="px-1"
                    onClick={nextPage} type="button"><BsFillArrowRightCircleFill /></button>
            </div>
        </div>
    )
}

export default Project;