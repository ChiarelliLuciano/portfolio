import { SectionWrapper } from "../hoc";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between">
      <div></div>
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
}

export default SectionWrapper(Footer, "");
