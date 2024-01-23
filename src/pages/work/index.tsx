import workItems from "./items"

function Work(){
    return (
        <div id="work" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 ">
            <h1 className="text-4xl font-bold text-center text-gray-600">Work</h1>
            {
                workItems.length > 0 ? (
                    workItems.map((item: any, index: any) => (
                        <ol key={index} className="flex flex-col md:flex-row realtive border-l border-stone-200 ">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
                                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                                    <span className="inline-block px-2 py-1 font-semibold text-white bg-gray-600 rounded-md">{item.year}</span>
                                    <span className="text-lg font-semibold text-gray-600]">{item.title}</span>
                                    <span className="my-1 text-sm font-normal leading-none text-stone-400">{item.duration}</span>
                                </p>
                                <p className="my-2 text-base font-normal text-stone-500">{item.details}</p>
                            </li>
                        </ol>
                    ))
                ) : (
                    <h3 className="text-4xl font-semibold text-center text-gray-400 py-4">
                        For now, I'm looking for a job
                    </h3>
                )
            }
        </div>
    )
}

export default Work