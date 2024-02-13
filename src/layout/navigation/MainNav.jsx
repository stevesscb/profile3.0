import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        className={`${classes.nav} ${navOpen ? classes.active : null}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </nav>
      <AnimatePresence>
        {navOpen && (
          <>
            <div className={classes.backdrop}></div>
            <motion.ul
              className={classes['nav-list']}
              variants={container}
              initial='hidden'
              animate='visible'
              exit='hidden'
            >
              <motion.li className={classes['list-item']} variants={item}>
                <Link to='/' onClick={handleNavOpen}>
                  Home
                </Link>
              </motion.li>
              <motion.li className={classes['list-item']} variants={item}>
                <Link to='/about' onClick={handleNavOpen}>
                  My story
                </Link>
              </motion.li>
              <motion.li className={classes['list-item']} variants={item}>
                <Link to='/projects' onClick={handleNavOpen}>
                  Projects
                </Link>
              </motion.li>
              <motion.li className={classes['list-item']} variants={item}>
                <Link to='/contact' onClick={handleNavOpen}>
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainNav;
