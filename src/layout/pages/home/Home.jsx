import { Link } from 'react-router-dom';

import MotionAnimate from 'src/components/MotionAnimate';

import classes from './home.module.scss';

function Home() {
  return (
    <div className={classes.home}>
      <MotionAnimate>
        <p>My passion is to</p>
        <p>build,</p>
        <p>optimize,</p>
        <p>& deliver websites & applications.</p>
        <span className={classes.cta}>
          <Link to='projects'>My work</Link>
        </span>
      </MotionAnimate>
    </div>
  );
}

export default Home;
