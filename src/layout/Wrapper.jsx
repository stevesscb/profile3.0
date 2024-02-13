import classes from './wrapper.module.css';

function Wrapper({ children }) {
  return <div className={classes.wrapper}>{children}</div>;
}

export default Wrapper;
