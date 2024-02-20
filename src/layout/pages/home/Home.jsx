import MotionAnimate from 'src/components/MotionAnimate';

import classes from './home.module.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={classes.home}>
      <MotionAnimate>
        <h2>My passion is to</h2>
        <h3>build,</h3>
        <h3>optimize,</h3>
        <h3>& deliver websites & applications.</h3>
        <span className={classes.cta}>
          <Link to='projects'>My work</Link>
        </span>
      </MotionAnimate>
    </div>
  );
}

export default Home;
