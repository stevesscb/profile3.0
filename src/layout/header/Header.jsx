import { Link } from 'react-router-dom';
import MainNav from 'src/layout/navigation/MainNav';

import classes from './header.module.scss';

function Header() {
  return (
    <header className={classes.header}>
      <div>
        <Link to='/'>
          <h1>Stephen Cole Bowen</h1>
          <h2>Front end developer</h2>
        </Link>
      </div>
      <MainNav />
    </header>
  );
}

export default Header;
