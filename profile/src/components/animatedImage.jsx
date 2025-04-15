import { motion } from "motion/react";

export default function AnimatedImage() {
    return (
        <motion.img
            src="/src/pictures/study.png"
            alt="Animated"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
            }}
            className="w-75 h-80 object-cover"
        />
    );
}
