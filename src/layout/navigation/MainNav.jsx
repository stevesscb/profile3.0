import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './mainNav.module.scss';

function MainNav() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(navOpen === false ? true : false);
  };

  console.log(navOpen);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
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
    <>
      <nav
        onClick={handleNavOpen}
        className={`${classes.nav} ${navOpen ? 'active' : null}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            className={classes['nav-list']}
            variants={container}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <motion.li variants={item}>About me</motion.li>
            <motion.li variants={item}>Projects</motion.li>
            <motion.li variants={item}>Contact</motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainNav;
