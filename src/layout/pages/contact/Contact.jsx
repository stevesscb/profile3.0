import ContactForm from 'src/components/form/ContactForm';
import SocialLinks from 'src/components/socialLinks/SocialLinks';
import MotionAnimate from 'src/components/MotionAnimate';

import classes from './contact.module.scss';

function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.colOne}>
        <MotionAnimate>
          <ContactForm />
        </MotionAnimate>
      </div>
      <div className={classes.colTwo}>
        <MotionAnimate>
          <p>Find me on</p>
          <SocialLinks />
        </MotionAnimate>
      </div>
    </div>
  );
}

export default Contact;
