import { motion } from "framer-motion";
import { styles } from "../styles";
import { KeyboardCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-9">
          <div className="w-5 h-5 rounded-full bg-[#DE4C36]" />
          <div className="w-1 sm:h-60 h-30 bg-[#DE4C36]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hola Mundo!</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Mi nombre es <span className="text-[#DE4C36]">Luciano</span>,
            bienvenidxs a mi Portfolio
          </p>
        </div>
      </div>

      <KeyboardCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
