import classes from './form.module.scss';

function Form() {
  return (
    <form className={classes.form}>
      <label htmlFor='name'>Your name</label>
      <input type='text' />
      <label htmlFor='email'>Your email</label>
      <input type='email' />
      <label htmlFor='message'>Message</label>
      <textarea name='message' id='message'></textarea>
      <button>Send</button>
    </form>
  );
}

export default Form;
