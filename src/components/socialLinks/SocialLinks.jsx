import linkedIn from 'src/images/linkedIn.svg';
import mail from 'src/images/mail.svg';
import github from 'src/images/github.svg';

import classes from './socialLinks.module.scss';

function SocialLinks() {
  return (
    <ul className={classes.socialLinks}>
      <li>
        <a
          href='https://www.linkedin.com/in/stephen-cole-bowen/'
          target='blank'
        >
          <img src={linkedIn} alt='LinkedIn logo' />
          <p>LinkedIn</p>
        </a>
      </li>

      <li>
        <a href='https://github.com/stevesscb' target='blank'>
          <img src={github} alt='Github logo' />
          <p>Github</p>
        </a>
      </li>

      <li>
        <a href='mailto:beast_feud0f@icloud.com' target='blank'>
          <img src={mail} alt='Email logo' />
          <p>Email</p>
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
