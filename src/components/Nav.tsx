import Mainlogo from "../../public/lg-pnk.svg";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useMediaQuery } from '../util/useMediaQuery';

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity: 0
    },
};
const itemMotion = {
    visible: { opacity: 1, x: 0},
    hidden: { opacity: 0, x:-100}
};

export default function Navbar() {
    const [toggled, setToggled] = useState(false);
    const matches = useMediaQuery('(min-width: 780px)');

    const toggleMenu = () => {
        setToggled(prevToggle => !prevToggle);
    };

    
    useEffect(() => {
        if (toggled) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [toggled]);

    return(
        <nav className="relative mx-6 mb-24 flex justify-between items-center py-12 md:mx-16 lg:mx-52">
            <div className="flex flex-col  gap-2 items-baseline justify-center">
                <a href="/"><img src={Mainlogo.src} alt="Carolina Design" className="w-20 md:w-28"/></a>
               
            </div>

            {matches && (
                <div className="flex gap-12 font-lato justify-center items-center">
                    <a className="hover:text-main-melon hover:md:-translate-y-0.5" href="/">Home</a>
                    <a className="hover:text-main-melon hover:md:-translate-y-0.5" href="/about">About</a>
                    <a className="hover:text-main-melon hover:md:-translate-y-0.5" href="/projects">Projects</a>
                    <div className=" border-2  py-2 rounded-3xl hover:border-main-melon hover:text-main-melon ">
                    <a className="hover:text-main-melon hover:md:-translate-y-0.5 px-4" href="assets/resume_CarolinaFigueroa.pdf">Projects</a>
                    </div>
                </div>
            )}

            {!matches && (
                <div onClick={toggleMenu} className="space-y-1.5 cursor-pointer z-50">
                    <motion.span animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0}} className="block h-0.5 w-6 bg-white rounded-3xl"></motion.span>
                    <motion.span animate={{width: toggled ? 0 : 24}} className="block h-0.5 w-6 bg-white rounded-3xl"></motion.span>
                    <motion.span animate={{rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0}} className="block h-0.5 w-6 bg-white rounded-3xl"></motion.span>
                </div>
            )}

            {toggled && !matches && (
                <motion.div animate={{opacity: 1, x: 0}} initial={{opacity: 0, x: 25}} className="fixed flex bg-dark-color bottom-0 left-0 w-full h-screen items-center justify-center z-40"> 
                    <motion.div variants={navMotion} animate="visible" initial="hidden" className="flex flex-col gap-24 text-lg font-lato">
                        <motion.a variants={itemMotion} href="/">Home</motion.a>
                        <motion.a variants={itemMotion} href="/about">About</motion.a>
                        <motion.a variants={itemMotion} href="/projects">Projects</motion.a>
                    </motion.div>
                </motion.div>
            )}

          
            {toggled && !matches && (
                <div className="fixed inset-0 bg-dark-color z-30" onClick={toggleMenu}></div>
            )}
        </nav>
    );
}
