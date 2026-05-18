/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-[#0F172A] flex items-center justify-center z-[9999]">

            <div className="flex flex-col items-center">

                {/* Animated Circle */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                    }}
                    className="w-28 h-28 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full flex items-center justify-center"
                >

                    {/* Icon */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                        }}
                    >

                        <FaShieldAlt className="text-[#D4AF37] text-4xl" />

                    </motion.div>

                </motion.div>

                {/* Text */}
                <motion.h2
                    initial={{
                        opacity: 0.4,
                    }}
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                    className="text-white text-2xl font-bold mt-8 tracking-wide"
                >
                    Titanium
                    <span className="text-[#D4AF37]">
                        Safe
                    </span>
                </motion.h2>

                {/* Loading Text */}
                <p className="text-gray-400 mt-2 text-sm tracking-widest uppercase">
                    Loading Security Experience...
                </p>

            </div>
        </div>
    );
};

export default Loader;