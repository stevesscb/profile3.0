import { useState } from 'react';

import MotionAnimate from 'src/components/MotionAnimate';
import ProjectsAccordion from 'src/components/accordion/ProjectsAccordion';

import classes from './projects.module.scss';
import DynamicImage from 'src/components/DynamicImage';

function Projects() {
  const [panel, setPanel] = useState('panel1');

  const handleProjectImage = (projectName) => {
    setPanel(projectName);
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
            <DynamicImage panel={panel} />
          </div>
        </MotionAnimate>
      </div>
    </div>
  );
}

export default Projects;
