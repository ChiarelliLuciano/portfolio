import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas, RocketCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { message, Tooltip } from "antd";
import {
  LoadingOutlined,
  LinkedinOutlined,
  GithubOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

const Contact = () => {
  // Environment Variables
  const service = import.meta.env.VITE_SERVICE;
  const template = import.meta.env.VITE_TEMPLATE;
  const public_key = import.meta.env.VITE_PUBLIC_KEY;
  // States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  // Ref
  const formRef = useRef();
  // Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        service,
        template,
        {
          from_name: formData.name,
          to_name: "Luciano",
          from_email: formData.email,
          to_email: "luciano.miguel.ch95@gmail.com",
          message: formData.message,
        },
        public_key
      )
      .then(() => {
        setLoading(false);
        message.success("Mensaje enviado!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        message.error("Algo salió mal, intente más tarde");
      });
  };

  return (
    <div className="xl:mt-2 xl:flex-row flex-col flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contacto</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-4 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Nombre</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Email</span>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu email:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1">Mensaje</span>
            <textarea
              rows={5}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje:"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <div className="flex justify-between px-8">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:text-green-500"
            >
              {loading ? (
                <LoadingOutlined className="text-3xl text-green-500" />
              ) : (
                "Enviar"
              )}
            </button>
            <Tooltip title="Conectar" placement="bottom" color="#0077B5">
              <a
                href="https://www.linkedin.com/in/luciano-chiarelli/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0077B5]"
              >
                <LinkedinOutlined className="text-3xl mt-2" />
              </a>
            </Tooltip>
            <Tooltip title="Github" placement="bottom" color="#C13584">
              <a
                href="https://www.github.com/ChiarelliLuciano"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C13584]"
              >
                <GithubOutlined className="text-3xl mt-2" />
              </a>
            </Tooltip>
            <Tooltip title="Descargar CV" placement="bottom" color="#DE4C36">
              <a
                href="https://drive.google.com/file/d/1vDmM-1lv_LMS08QgSeJxeDw1qMEMruoF/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DE4C36]"
              >
                <PaperClipOutlined className="text-3xl mt-2" />
              </a>
            </Tooltip>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[750px] xs:h-[550px] h-[350px]"
      >
        <RocketCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
