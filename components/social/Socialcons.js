import { socialData } from "@/constants/socialData";
import { motion } from "framer-motion";

const Socialcons = () => {
  return (
    <>
      {socialData.map((item, index) => (
        <motion.a
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: item.duration,
            type: "spring",
            stiffness: 500,
            damping: 15,
          }}
          whileHover={{ scale: 1.2 }}
          key={index}
          href={item.url}
          target={item.type === "email" ? "" : "_blank"}
          className="social-icon text-white group"
        >
          {item.icon}
          <span className="social-icon-description">{item.description}</span>
        </motion.a>
      ))}
    </>
  );
};

export default Socialcons;
