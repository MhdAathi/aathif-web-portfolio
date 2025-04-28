import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-05 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mhdaathifdev16/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MhdAathi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="src\assets\Mohamed_Aathif_Sofware_Engineer_Intern.pdf"
          download="Mohamed_Aathif_CV.pdf"
          title="Download CV"
        >
          <FaFileAlt />
        </a>

        <a
          href="https://www.instagram.com/__aathi_01?igsh=MXVkYTJyODg2eTF1OQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/share/12LPGxtztke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
