import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    background: '#0f172a',
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

export default function ProjectsAccordion() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon sx={iconStyles} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          Horizon Digital
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3-content'
          id='panel3-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4-content'
          id='panel4-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel5-content'
          id='panel5-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel6-content'
          id='panel6-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={accordionStyles}
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}
      >
        <AccordionSummary
          sx={summaryStyles}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel7-content'
          id='panel7-header'
        >
          Jobs In Cyber
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </>
  );
}
