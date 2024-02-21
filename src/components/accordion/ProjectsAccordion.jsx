import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import openLink from 'src/images/link.svg';

import { projects } from '../../projectData';

import classes from './projectsAccordion.module.scss';
import DynamicImage from '../DynamicImage';

const accordionStyles = {
  color: '#94a3b8',
  background: 'transparent',
  fontSize: '1.6rem',
  borderRadius: '5px',
  transition: 'all .5s ease',
  '&:hover': {
    color: '#cbd5e1',
  },

  '&.Mui-expanded': {
    background: 'transparent',
    color: '#94a3b8',
  },
};

const summaryStyles = {
  borderRadius: '5px',
  '&.Mui-expanded': {
    background: '#1e293b',
    color: '#cbd5e1',
  },
};

const iconStyles = {
  color: '#94a3b8',
  display: 'none',

  '&.Mui-expanded': {
    display: 'block',
  },
};

export default function ProjectsAccordion(props) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    props.projectName(expanded);
  }, [expanded]);

  return (
    <>
      {projects.map((project) => (
        <Accordion
          key={project.id}
          sx={accordionStyles}
          expanded={expanded === project.id}
          onChange={handleChange(project.id)}
        >
          <AccordionSummary
            sx={summaryStyles}
            expandIcon={<ExpandMoreIcon sx={iconStyles} />}
            aria-controls={`${project.id}-content`}
            id={`${project.id}-header`}
          >
            {project.title}
          </AccordionSummary>
          <AccordionDetails>
            {project.description}
            <div className={classes.imageContainer}>
              <DynamicImage panel={expanded} />
            </div>
            <p className={classes.projectLink}>
              <a href={project.url} target='_blank'>
                Open site
              </a>
              <img src={openLink} alt='open link to external website' />
            </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
