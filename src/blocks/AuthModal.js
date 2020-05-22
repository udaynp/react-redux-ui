import React, { useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

export const AuthModal = ({ show, onHide, onSignIn }) => {
  const [email, setEmail] = useState('');
  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const onClose = () => {
    onHide();
    setEmail('');
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label htmlFor='voter-auth-email-input'>
            Please enter your email address
          </label>
          <InputGroup className='mb-3'>
            <FormControl
              id='voter-email-input'
              aria-describedby='voter-email-input'
              name='email'
              value={email}
              onChange={onChange}
            />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onClose}>
          Close
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            onSignIn(email);
            onClose();
          }}
        >
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
