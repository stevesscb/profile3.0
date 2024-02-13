import MainNav from 'src/layout/navigation/MainNav';

import classes from './header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div>
        <h1>Stephen Cole Bowen</h1>
        <h2>Front end developer</h2>
      </div>
      <MainNav />
    </header>
  );
}

export default Header;
