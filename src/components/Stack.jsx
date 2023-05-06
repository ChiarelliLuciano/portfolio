import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { Tooltip } from "antd";

const Stack = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Stack</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((elem) => (
          <Tooltip title={elem.name} color="#DE4C36" key={elem.name}>
            <div className="w-28 h-28 cursor-pointer">
              <BallCanvas icon={elem.icon} />
            </div>
          </Tooltip>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Stack, "");
