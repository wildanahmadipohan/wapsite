import React from 'react';
import { Fade } from 'react-reveal';

import Button from 'elements/Button';

const Certificate = (props) => {
  const certificates = props.data;

  return (
    <section className='container pt-5' ref={props.refCertificate}>
      <Fade bottom>
        <div className='d-flex align-items-center justify-content-center justify-content-md-between'>
          <h4 className='section-title text-center text-md-start mb-0'>Certificates</h4>
          <Button className='btn btn-secondary px-4 btn-light d-none d-md-flex align-items-center' type='link' href='/projects'>
            More Certificates
          </Button>
        </div>
        <div className='row row-cols-2 row-cols-md-2 row-cols-lg-4 mt-5'>
          {certificates.map((item, index) => (
            <div className='col' key={`project-${index}`}>
              <Fade bottom delay={300 * index}>
                <figure style={{ width: '100%', overflow: 'hidden', borderRadius: 15 }}>
                  <img src={item.imageUrl} alt={`certificate-${index}`} style={{ width: '100%' }} />
                </figure>
              </Fade>
            </div>
          ))}
        </div>
        <div className='d-flex align-items-center justify-content-center mt-3 d-md-none'>
          <Button className='btn btn-secondary px-4 btn-light d-flex align-items-center'>More Certificates</Button>
        </div>
      </Fade>
    </section>
  );
};

export default Certificate;