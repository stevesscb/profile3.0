import classes from './wrapper.module.scss';

function Wrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Wrapper;
