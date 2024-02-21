import classes from './container.module.scss';

function Container({ children }) {
  return <div className={classes.container}>{children}</div>;
}

export default Container;
