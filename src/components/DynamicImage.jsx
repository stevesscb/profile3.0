import { useState, useEffect } from 'react';

import horizonDigital from 'src/images/horizon-digital.png';
import jobsInCyber from 'src/images/jobs-in-cyber.png';
import lingnanUniversity from 'src/images/lingnan.png';
import hireMii from 'src/images/hiremii.png';
import enable from 'src/images/enable.png';
import foodieBox from 'src/images/foodie-box.png';

function DynamicImage({ panel }) {
  const [project, setProject] = useState({
    image: '',
    url: '',
  });

  const handleProjectImage = () => {
    if (panel === 'panel1') {
      setProject({
        image: horizonDigital,
        url: 'https://horizondigital.au/',
      });
    }

    if (panel === 'panel2') {
      setProject({
        image: jobsInCyber,
        url: 'https://uat.jobsincyber.com/candidate/listings',
      });
    }

    if (panel === 'panel3') {
      setProject({
        image: lingnanUniversity,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel4') {
      setProject({
        image: hireMii,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel5') {
      setProject({
        image: enable,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel6') {
      setProject({
        image: foodieBox,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }
  };

  useEffect(() => {
    handleProjectImage();
  }, [panel]);

  return (
    <a href={project.url} target='_blank'>
      <img src={project.image} alt='Project website screen shot' />
    </a>
  );
}

export default DynamicImage;
