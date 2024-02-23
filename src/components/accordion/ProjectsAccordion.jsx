import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import openLink from 'src/images/link.svg';

import { professionalProjects } from '../../projectData';
import { personalProjects } from '../../projectData';

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
  const [expanded, setExpanded] = useState('professional1');
  const [category, setCategory] = useState('professional');

  const handleChange = (panel) => (newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function handleProfessional() {
    setCategory('professional');
    setExpanded('professional1');
  }

  function handlePersonal() {
    setCategory('personal');
    setExpanded('personal1');
  }

  useEffect(() => {
    props.projectName(expanded);
  }, [expanded]);

  return (
    <>
      <div className={classes.categories}>
        <p
          className={`${category === 'professional' ? classes.active : null} `}
          onClick={handleProfessional}
        >
          Professional
        </p>
        <p
          className={`${category === 'personal' ? classes.active : null} `}
          onClick={handlePersonal}
        >
          Personal
        </p>
      </div>
      {category === 'professional' && (
        <div className={classes.accordion}>
          {professionalProjects.map((professionalProject) => (
            <Accordion
              key={professionalProject.id}
              sx={accordionStyles}
              expanded={expanded === professionalProject.id}
              onChange={handleChange(professionalProject.id)}
            >
              <AccordionSummary
                sx={summaryStyles}
                expandIcon={<ExpandMoreIcon sx={iconStyles} />}
                aria-controls={`${professionalProject.id}-content`}
                id={`${professionalProject.id}-header`}
              >
                {professionalProject.title}
              </AccordionSummary>
              <AccordionDetails>
                {professionalProject.description}
                <div className={classes.imageContainer}>
                  <DynamicImage panel={expanded} />
                </div>
                <p className={classes.projectLink}>
                  <a href={professionalProject.url} target='_blank'>
                    Open site
                  </a>
                  <img src={openLink} alt='open link to external website' />
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
      {category === 'personal' && (
        <div className={classes.accordion}>
          {personalProjects.map((personalProject) => (
            <Accordion
              key={personalProject.id}
              sx={accordionStyles}
              expanded={expanded === personalProject.id}
              onChange={handleChange(personalProject.id)}
            >
              <AccordionSummary
                sx={summaryStyles}
                expandIcon={<ExpandMoreIcon sx={iconStyles} />}
                aria-controls={`${personalProject.id}-content`}
                id={`${personalProject.id}-header`}
              >
                {personalProject.title}
              </AccordionSummary>
              <AccordionDetails>
                {personalProject.description}
                <div className={classes.imageContainer}>
                  <DynamicImage panel={expanded} />
                </div>
                <p className={classes.projectLink}>
                  <a href={personalProject.url} target='_blank'>
                    Open site
                  </a>
                  <img src={openLink} alt='open link to external website' />
                </p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </>
  );
}
