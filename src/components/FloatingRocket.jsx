import { motion } from 'framer-motion';
import rocketImg from '/rocket-cursor.png';

const FloatingRocket = () => {
  return (
    <motion.img
      src={rocketImg}
      alt="Floating Rocket"
      className="fixed bottom-10 right-10 w-16 h-16 pointer-events-none z-20"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default FloatingRocket;
