// import Navbar from "../../components/navbar"
import MyPicture from '../../assets/MyPicture.jpg'
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
    return (
        <div id="home">
            <img
                className="w-full h-screen object-cover object-left scale-z-[-1]" 
                src={MyPicture} alt="background-image" 
            />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Wira Zeta Prakosa</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', //Type Developer
                                1000, //Waiting 1s
                                'Coder', //Type Coder
                                2000, //Waiting 2s
                                'Tech Enthusiast', //Type Tech Enthusiast
                                2000 //Waiting 2s
                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{fontSize: '1em', paddingLeft: '5px'}}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaInstagram className="cursor-pointer" size={20} onClick={() => {location.href = "https://www.instagram.com/zettaprakosa"}}/>
                        <FaLinkedin className="cursor-pointer" size={20} onClick={() => {location.href = "https://www.linkedin.com/in/wira-zeta-prakosa-067621138/"}}/>
                        <FaGithub className="cursor-pointer" size={20} onClick={() => {location.href = "https://github.com/wirazeta"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home