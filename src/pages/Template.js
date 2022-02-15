import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CreateAcc from '../components/CreateAcc/index.jsx';
import SignIn from '../components/SignIn/index.jsx';

import './template.scss'


const Template = () => {
  return (
    <Container fluid className='template-background pt-4'>
      <Row className='d-flex justify-content-center'>
        <div className='form-container mx-2'><SignIn /></div>
        <div className='form-container mx-2'><CreateAcc /></div>
      </Row>
    </Container>
  );
}

export default Template
