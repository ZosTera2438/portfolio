import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { SectionWrapper } from "../utils/SectionWrapper";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Element name="hero"></Element>
      <div
        className={`absolute inset-0 top-[160px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="w-5 h-5 rounded-full bg-teal-500" />
          <div className="w-1 sm:h-80 h-56 teal-gradient" />
        </div>

        <div>
          <h1 className={`sm:whitespace-nowrap font-black md:text-[65px] sm:text-[50px] text-[40px] lg:leading-[98px] mt-10 text-white`}>
            Hi, I'm <span className="text-teal-500 ">Vaibhav</span>
          </h1>
          <p className={`text-green-100 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] my-2`}>
            an Engineering Student, and <br className="sm:block hidden" />
            coding enthusiast
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-100}>
          <div className="w-[35px] h-[64px] cursor-pointer rounded-3xl border-4 border-teal-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-teal-300 mb-1"
            />
          </div>
        </Link>
      </div>
      
    </section>
    
  );
};

export default SectionWrapper(Hero);
