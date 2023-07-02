import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-black bg-opacity-60`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <img src=".\src\assets\pointer.gif" alt="Pointer" className="w-10 h-10 hover:underline" />
        </div>
        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-yellow-300 to-yellow-500" />
        <div>
          <h1 className={`prose ${styles.heroHeadText} text-sm large:text-base text-lime font-mono`}>
            Hello World! I'm&nbsp;
            <span className="relative w-auto">
              <span className="bg-gradient-to-r from-gold-200 to-black-300 bg-clip-text text-large lg:text-large absolute top-2 left-3 lg:top-2 lg:left-3 z-2 text-black font-sans">
                Godwin
              </span>
              <span className="bg-gradient-to-r from-gold-500 to-gold-800 text-transparent bg-clip-text text-large lg:text-large absolute top-1 left-2 lg:top-1 lg:left-2 z-3 font-sans">
                Godwin
              </span>
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop Object-Oriented Programs, Databases, 3D Visual Interfaces, and Web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
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