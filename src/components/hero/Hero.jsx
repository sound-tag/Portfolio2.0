import "./hero.scss";
import { mirrorEasing, motion } from "framer-motion";

const sliderVriants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const textVriants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVriants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVriants}>ODUFUWA DAVID</motion.h2>
          <motion.h1 variants={textVriants}>React web developer</motion.h1>
          <motion.div variants={textVriants} className="buttons">
            <motion.button variants={textVriants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVriants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVriants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVriants}
        initial="initial"
        animate="animate"
      >
        Music Producer Influencer
      </motion.div>
      {/* // <div className="imageContainer">
      //     <img src="/hero.png" alt="" />
      //   </div> */}
    </div>
  );
}

export default Hero;
