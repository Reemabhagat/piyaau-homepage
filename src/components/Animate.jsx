import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import leftcan from "../assets/img/leftcan.webp";
import canBg from "../assets/img/can-bg.webp";
import extraImg from "../assets/img/can-circle.svg";
import canDrop from "../assets/img/can-drop.webp";

function Animate() {
    const { scrollYProgress } = useScroll();

    const bgX = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);
    const canX = useTransform(scrollYProgress, [0, 1], ["-60%", "60%"]);
    const canRotate = useTransform(scrollYProgress, [0, 1], ["-120deg", "100deg"]);

    // Can drop
    const canDropX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const canDropRotate = useTransform(scrollYProgress, [0, 1], ["1000deg", "320deg"]);

    return (
        <div className="relative flex justify-center items-center w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            {/* Backgroundimage  */}
            <motion.div
                className="absolute bg-can bg-center"
                style={{
                    x: bgX,
                   
                }}
            />

            {/* Candrop*/}
            <motion.div
                className="absolute"
                style={{ x: canDropX, rotate: canDropRotate}}
            >
                <motion.img
                    src={canDrop}
                    alt="Can Drop"
                    className="w-[60vw] max-w-[250px]"
                />
            </motion.div>

            {/* Left-canwith-cancircle*/}
            <motion.div className="relative flex flex-col items-center">
                <motion.img
                    src={leftcan}
                    alt="Can"
                    className="relative"
                    style={{
                        x: canX, 
                        rotate: canRotate, 
                        width: "25vw",
                        maxWidth: "180px",
                    }}
                />

                {/* cancircle */}
                <img
                    src={extraImg}
                    alt="Extra Effect"
                    className="absolute  w-[22vw] max-w-[130px] bottom-[40px] right-[10px]" 
                />
            </motion.div>
        </div>
    );
}

export default Animate;
