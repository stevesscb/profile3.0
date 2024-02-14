import Form from '../../../components/form/Form';

import classes from './contact.module.scss';

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.colOne}>
        <Form />
      </div>
      <div className={classes.colTwo}>
        <h4>Contact me</h4>
      </div>
    </div>
  );
}

export default Contact;
