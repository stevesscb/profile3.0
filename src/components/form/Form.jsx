import classes from './form.module.scss';

function Form() {
  return (
    <form className={classes.form}>
      <label htmlFor='name'>Name:</label>
      <input type='text' />
      <label htmlFor='email'>Email:</label>
      <input type='email' />
      <label htmlFor='message'>Message:</label>
      <textarea name='message' id='message'></textarea>
      <button>Send</button>
    </form>
  );
}

export default Form;
