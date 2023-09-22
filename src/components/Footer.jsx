import { ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-end gap-8 lg:gap-96 sm:px-16 px-6 sm:py-16 py-10">
      <p className="text-secondary pl-6 mt-3">
        ©Luciano Chiarelli. Todos los derechos reservados. 2023
      </p>
      <Link
        to="/"
        className="text-secondary hover:text-[#DE4C36]"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ArrowUpOutlined className="text-3xl" />
      </Link>
    </div>
  );
};

export default Footer;
