import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="flex items-center w-full text-white px-2 border-t-[1px] border-white h-[70px]">
        <div className="w-[80%] mx-auto font-bold p-2 flex items-center justify-between md:text-xl text-[12px] ">
          <div className="text-pink-500">
            Developed by -{" "}
            <a
              href="https://github.com/harshitBhardwaj97"
              target="_blank"
              className="text-[#f4f6fc] duration-100 ease-in-out hover:scale-105 cursor-pointer hover:text-pink-500 hover:border-b-2 hover:border-b-[#f4f6fc]"
            >
              Harshit Bhardwaj
            </a>
          </div>
          <div className="flex items-center gap-4 links">
            <a
              className="text-[#f4f6fc] hover:text-pink-500 hover:scale-110 hover:shadow-white ease-in-out duration-200"
              href="https://www.linkedin.com/in/harshit-bhardwaj-9920bb26a"
              target="_blank"
              title="Connect with me on Linkedin !"
            >
              <FaLinkedin className="text-xl md:text-3xl" />
            </a>
            <a
              className="text-[#f4f6fc] hover:text-pink-500 hover:scale-110 hover:shadow-white ease-in-out duration-200"
              href="https://github.com/harshitBhardwaj97"
              target="_blank"
              title="Checkout my work on Github !"
            >
              <FaGithub className="text-xl md:text-3xl" />
            </a>
            <a
              className="text-[#f4f6fc] hover:text-pink-500 hover:scale-110 hover:shadow-white ease-in-out duration-200"
              href="mailto:harshitbhardwaj97@gmail.com"
              target="_blank"
              title="Drop me an Email !"
            >
              <HiOutlineMail className="text-xl md:text-3xl" />
            </a>
            <a
              className="text-[#f4f6fc] hover:text-pink-500 hover:scale-110 hover:shadow-white ease-in-out duration-200"
              href="./Resume.pdf"
              download={`Harshit_Resume`}
              title="Download my Resume !"
            >
              <BsFillPersonLinesFill className="text-xl md:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
