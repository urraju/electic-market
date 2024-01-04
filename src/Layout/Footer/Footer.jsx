import { MdFacebook, MdMail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className="footer grid grid-cols-2 max-w-screen-2xl mx-auto md:grid-cols-3 p-10   text-neutral-content">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Laptop</a>
          <a className="link link-hover">Watch</a>
          <a className="link link-hover">Mouse</a>
          <a className="link link-hover">Blutooth</a>
          <a className="link link-hover">Etc</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <header className="footer-title ">Contact</header>
          <div className="flex gap-3">
            <a className="link link-hover">
              <MdFacebook className="w-7 h-7 p-1 bg-orange-500 text-white rounded-full" />
            </a>
            <a className="link link-hover">
              <FaInstagram className="w-7 h-7 p-1 bg-orange-500 text-white rounded-full" />
            </a>
            <a className="link link-hover">
              <FaLinkedin className="w-7 h-7 p-1 bg-orange-500 text-white rounded-full" />
            </a>
            <a className="link link-hover">
              <MdMail className="w-7 h-7 p-1 bg-orange-500 text-white rounded-full" />
            </a>
          </div>
          <input type="text" placeholder="Type Message" className="outline-none border border-teal-500 mt-3  bg-transparent border-opacity-50 rounded px-2 py-1" 
          />
          <input type="button" value="Send" className="rounded border-orange-300 border-opacity-40 px-7 py-1 border" />
        </nav>
      </footer>
    </div>
  );
};
export default Footer;
