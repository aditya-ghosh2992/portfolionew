import heroImage from "../assets/projects/aditya.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        },
    }
};

const childVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    }
};

const Hero = () => {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();
        const x = (clientX - left) / width; // Get the x position as a percentage
        const y = (clientY - top) / height; // Get the y position as a percentage

        const tiltX = (y - 0.5) * 20; // Adjust tilt range
        const tiltY = (0.5 - x) * 20; // Adjust tilt range
        imageRef.current.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <motion.img 
                        ref={imageRef}
                        src={heroImage} 
                        alt="Hero Image" 
                        className="border border-stone-900 rounded-3xl transition-transform duration-300"
                        width={650}
                        height={650}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl"> Aditya Ghosh</motion.h2>
                        <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text tracking-tight text-3xl font-bold text-transparent">Data Analyst & AI/ML Engineer </motion.span>
                        <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HERO_CONTENT}</motion.p>
                        <motion.a variants={childVariants} href="https://drive.google.com/file/d/1JhL8Z88ASKaRZOmEBWAhAD9cjsP75ohU/view?usp=sharing" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
