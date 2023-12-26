import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiSolidCertification } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { handleClickScroll } from "../utils";

const Navbar = () => {
  return (
    <>
      {/* Menu */}
      <header className="z-10 bg-[#251c69] fixed top-0 text-white/90 w-full h-[10%] md:h-[70px] flex items-center justify-center gap-x-1 p-2 border-b-[1px] md:border-b-[0.5px] text-[14px] md:text-xl border-white/70">
        <ul className="flex items-center justify-around p-2 w-[50%] gap-x-2 menu">
          <li
            className="flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => handleClickScroll("hero")}
          >
            <IoHomeSharp size={20} />
            Home
          </li>
          <li
            className="flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => handleClickScroll("about")}
          >
            <SiAboutdotme size={20} />
            About
          </li>
          <li
            className="flex flex-col items-center justify-center text-center"
            onClick={() => handleClickScroll("certifications")}
          >
            <BiSolidCertification size={20} />
            Certifications
          </li>
          <li
            className="flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={() => handleClickScroll("contact")}
          >
            <MdOutlineContactMail size={20} />
            Contact
          </li>
        </ul>
      </header>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[140px] h-[50px] px-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in-out font-bold bg-blue-600">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://www.linkedin.com/in/harshit-bhardwaj-9920bb26a"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[50px] px-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in font-bold  bg-[#333333]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="https://github.com/harshitBhardwaj97"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[50px] px-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in font-bold  bg-[#6fc2b0]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="mailto:harshitbhardwaj97@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[140px] h-[50px] px-3 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ease-in font-bold  bg-[#565f69]">
            <a
              className="flex items-center justify-between w-full text-gray-300"
              href="./Resume.pdf"
              target="_blank"
              download={`Harshit_Resume`}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
