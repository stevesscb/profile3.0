import { motion, AnimatePresence } from 'framer-motion';

function MotionAnimate({ children }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div variants={container} initial='hidden' animate='visible'>
        <motion.div variants={item}>{children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MotionAnimate;
