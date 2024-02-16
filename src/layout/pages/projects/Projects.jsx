// import Accordion from '../../../components/accordion/ProjectsAccordion';
import ProjectsAccordion from 'src/components/accordion/ProjectsAccordion';

import classes from './projects.module.scss';

function Projects() {
  return (
    <div className={classes.projects}>
      <div className={classes.colOne}>
        <ProjectsAccordion />
      </div>
      <div className={classes.colTwo}></div>
    </div>
  );
}

export default Projects;
