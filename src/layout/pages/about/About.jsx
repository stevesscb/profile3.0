import { Link } from "react-router-dom";

import MotionAnimate from "src/components/MotionAnimate";
import classes from "./about.module.scss";

function About() {
  return (
    <div className={classes.about}>
      <div className={classes.colOne}>
        <MotionAnimate>
          <p>
            I'm a front end developer, I help bring ideas to life by building
            out products that users love. I am always learning new technologies
            and expanding my skills. I have worked with a variety of clients
            ranging from start-ups to educational institutions.
          </p>
          <br />
          <p>
            Outside of code, I am also strongly interested in design and UX/UI
            principles.
          </p>
          <br />
          <p>
            If you like what you hear and think we could collaborate please
            <Link to="/contact" className={classes.cta}>
              &nbsp;get in touch.
            </Link>
          </p>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default About;
