import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React e-Commerce",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum, repudiandae vel necessitatibus molestias tempore non doloribus odit! Natus dignissimos esse repellat nemo non quo asperiores dolores cumque nobis illum!",
  },
  {
    id: 2,
    title: "cbt WebApp",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum, repudiandae vel necessitatibus molestias tempore non doloribus odit! Natus dignissimos esse repellat nemo non quo asperiores dolores cumque nobis illum!",
  },
  {
    id: 3,
    title: "Tinder Clone",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum, repudiandae vel necessitatibus molestias tempore non doloribus odit! Natus dignissimos esse repellat nemo non quo asperiores dolores cumque nobis illum!",
  },
  {
    id: 4,
    title: "Netflix Front page",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum, repudiandae vel necessitatibus molestias tempore non doloribus odit! Natus dignissimos esse repellat nemo non quo asperiores dolores cumque nobis illum!",
  },
  {
    id: 5,
    title: "Portfolio 1.0",
    img: "",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum rerum, repudiandae vel necessitatibus molestias tempore non doloribus odit! Natus dignissimos esse repellat nemo non quo asperiores dolores cumque nobis illum!",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [500, -500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
