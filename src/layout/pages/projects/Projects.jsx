import { useState } from 'react';

import MotionAnimate from 'src/components/MotionAnimate';
import ProjectsAccordion from 'src/components/accordion/ProjectsAccordion';

import horizonDigital from 'src/images/horizon-digital.png';
import jobsInCyber from 'src/images/jobs-in-cyber.png';
import lingnanUniversity from 'src/images/lingnan.png';
import hireMii from 'src/images/hiremii.png';
import enable from 'src/images/enable.png';
import foodieBox from 'src/images/foodie-box.png';

import classes from './projects.module.scss';

function Projects() {
  const [project, setProject] = useState({
    image: '',
    url: '',
  });

  const handleProjectImage = (projectName) => {
    if (projectName === 'panel1') {
      setProject({ image: horizonDigital, url: 'https://horizondigital.au/' });
    }

    if (projectName === 'panel2') {
      setProject({
        image: jobsInCyber,
        url: 'https://uat.jobsincyber.com/candidate/listings',
      });
    }

    if (projectName === 'panel3') {
      setProject({
        image: lingnanUniversity,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (projectName === 'panel4') {
      setProject({
        image: hireMii,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (projectName === 'panel5') {
      setProject({
        image: enable,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (projectName === 'panel6') {
      setProject({
        image: foodieBox,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }
  };

  return (
    <div className={classes.projects}>
      <div className={classes.colOne}>
        <MotionAnimate>
          <ProjectsAccordion projectName={handleProjectImage} />
        </MotionAnimate>
      </div>
      <div className={classes.colTwo}>
        <MotionAnimate>
          <div className={classes.imgContainer}>
            <a href={project.url} target='_blank'>
              <img src={project.image} alt='Company website screenshot' />
            </a>
          </div>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default Projects;
