import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const AnimatedText = ({ text }) => {
    const charIndex = useMotionValue(0);
    const displayedText = useTransform(charIndex, (val) => text.substring(0, val));
    animate(charIndex, { duration: 2, from: 0, to: text.length });

    return <motion.span>{displayedText}</motion.span>;

}

export default AnimatedText