import { useState, useEffect } from 'react';

import horizonDigital from 'src/images/horizon-digital.png';
import jobsInCyber from 'src/images/jobs-in-cyber.png';
import lingnanUniversity from 'src/images/lingnan.png';
import hireMii from 'src/images/hiremii.png';
import enable from 'src/images/enable.png';
import foodieBox from 'src/images/foodie-box.png';

import horizonDigitalWebp from 'src/images/horizon-digital.webp';
import jobsInCyberWebp from 'src/images/jobs-in-cyber.webp';
import lingnanUniversityWebp from 'src/images/lingnan.webp';
import hireMiiWebp from 'src/images/hiremii.webp';
import enableWebp from 'src/images/enable.webp';
import foodieBoxWebp from 'src/images/foodie-box.webp';

function DynamicImage({ panel }) {
  const [project, setProject] = useState({
    imageWp: '',
    image: '',
    url: '',
  });

  const handleProjectImage = () => {
    if (panel === 'panel1') {
      setProject({
        imageWp: horizonDigitalWebp,
        image: horizonDigital,
        url: 'https://horizondigital.au/',
      });
    }

    if (panel === 'panel2') {
      setProject({
        imageWp: jobsInCyberWebp,
        image: jobsInCyber,
        url: 'https://uat.jobsincyber.com/candidate/listings',
      });
    }

    if (panel === 'panel3') {
      setProject({
        imageWp: lingnanUniversityWebp,
        image: lingnanUniversity,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel4') {
      setProject({
        imageWp: hireMiiWebp,
        image: hireMii,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel5') {
      setProject({
        imageWp: enableWebp,
        image: enable,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'panel6') {
      setProject({
        imageWp: foodieBoxWebp,
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
      <picture>
        <source srcSet={project.imageWp} type='image/webp' />
        <img src={project.image} alt='Project website screen shot' />
      </picture>
    </a>
  );
}

export default DynamicImage;
