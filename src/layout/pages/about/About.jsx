import { Link } from 'react-router-dom';

import MotionAnimate from 'src/components/MotionAnimate';
import classes from './about.module.scss';

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.colOne}>
        <MotionAnimate>
          <h4>I'm Stephen Cole Bowen,</h4>
          <p>
            I'm a front end developer - I help bring ideas to life by building
            designs that clients can proudly stand behind. I enjoy learning new
            technologies and expanding my skill-set. I'm constantly spending my
            time researching for more efficient and updated methods. While my
            main experience lies in code, I also have a strong interest in
            design. If you like what you hear and think we could collaborate
            please
            <Link to='/contact' className={classes.cta}>
              &nbsp;get in touch.
            </Link>
          </p>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default About;
