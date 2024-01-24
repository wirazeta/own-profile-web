import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { getForm } from "../../../components/form";

function Form() {
    const [data, setData] = useState<any[]>();
    const [id, setId] = useState<number>();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = (await getForm()).reverse();
        setData(data);
    }

    const handleId = (id: number) => {
        setId(id);
    }

    console.log(data);

    return (
        <div id="form" className="max-w-[1040px] m-auto md:pl-20 p-4 py-15">
            <h1 className="text-4xl font-bold text-center text-gray-600 ">Forms</h1>
            <p className="text-center py-8 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quam
                eos distinctio earum ipsam aliquam temporibus corrupti nam reprehenderit
                fugiat eum vitae modi quaerat ipsum maiores provident, quibusdam corporis harum?
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                {
                    data?.map((item) => (
                        <div key={item.id} className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-600">
                            <CiMail className="rounded-xl group-hover:opacity-10" size={300} />
                            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                                    {item.subject}
                                </h3>
                                <p className="pb-2 pt-0 font-semibold text-white text-center">From: {item.name}</p>
                                <p className="pb-2 pt-0 text-white text-center">Email : {item.email}</p>
                                <a onClick={() => { handleId(item.id) }}>
                                    <p className="text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</p>
                                </a>
                            </div>
                            {
                                    item.id === id ? (
                                        <div className="block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-600 h-[300px] w-full rounded-xl">
                                            <h3 className="text-center font-bold text-white w-full rounded-xl">
                                                Message :
                                            </h3>
                                            <p className="pb-4 pt-2 font-semibold text-white text-center">{item.message}</p>
                                            <a onClick={() => { handleId(0) }}>
                                                <p className="text-center p-3 rounded-ld bg-gray-200 text-gray-700 font-bold cursor-pointer text-lg">Back</p>
                                            </a>
                                        </div>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Form;