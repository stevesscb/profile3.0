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

import portfolio from 'src/images/portfolio.png';
import portfolioWebp from 'src/images/portfolio.webp';

function DynamicImage({ panel }) {
  const [project, setProject] = useState({
    imageWp: '',
    image: '',
    url: '',
  });

  const handleProjectImage = () => {
    if (panel === 'professional1') {
      setProject({
        imageWp: horizonDigitalWebp,
        image: horizonDigital,
        url: 'https://horizondigital.au/',
      });
    }

    if (panel === 'professional2') {
      setProject({
        imageWp: jobsInCyberWebp,
        image: jobsInCyber,
        url: '#',
      });
    }

    if (panel === 'professional3') {
      setProject({
        imageWp: lingnanUniversityWebp,
        image: lingnanUniversity,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'professional4') {
      setProject({
        imageWp: hireMiiWebp,
        image: hireMii,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'professional5') {
      setProject({
        imageWp: enableWebp,
        image: enable,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'professional6') {
      setProject({
        imageWp: foodieBoxWebp,
        image: foodieBox,
        url: 'https://www.ln.edu.hk/cultural/',
      });
    }

    if (panel === 'personal1') {
      setProject({
        imageWp: portfolioWebp,
        image: portfolio,
        url: 'https://scb-development.vercel.app/',
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
