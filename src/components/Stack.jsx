import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Stack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Stack</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((elem) => (
          <div
            className="w-28 h-28"
            key={elem.name}
            style={{ cursor: "pointer" }}
            title={elem.name}
          >
            <BallCanvas icon={elem.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stack, "");
