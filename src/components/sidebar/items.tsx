import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";

const navItems = [
    {
        name: "Home",
        href: "#home",
        logo: (<AiOutlineHome size={20}/>)
    },
    {
        name: "Work",
        href: "#work",
        logo: (<GrProjects size={20}/>)
    },
    {
        name: "Project",
        href: "#project",
        logo: (<AiOutlineProject size={20}/>)
    },
    {
        name: "Resume",
        href: "#resume",
        logo: (<BsPerson size={20}/>)
    },
    {
        name: "Contact",
        href: "#contact",
        logo: (<AiOutlineMail size={20}/>)
    }
];

export default navItems;