import { ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10">
      <p className="text-xs md:text-lg text-secondary mt-3">
        ©Luciano Chiarelli. Todos los derechos reservados. 2023
      </p>
      <Link
        to="/"
        className="text-secondary hover:text-[#DE4C36]"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ArrowUpOutlined className="text-xl md:text-3xl" />
      </Link>
    </div>
  );
};

export default Footer;
