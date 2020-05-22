import React from 'react';

import { useForm } from '../../../../hooks/useForm';
//Main Voter Form for submition
export const VoterForm = ({ buttonText, onSubmitVoter }) => {
  const [voterForm, change, resetVoterForm] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '',
    email: '',
    phone: '',
  });

  const submitVoter = () => {
    onSubmitVoter({ ...voterForm });
    resetVoterForm();
  };

  return (
    <form className='unicorn-form'>
      <div>
        <label htmlFor='firstname-input'>First Name</label>
        <input
          type='text'
          id='firstname-input'
          name='firstName'
          value={voterForm.firstName}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='lastname-input'>Last Name</label>
        <input
          type='text'
          id='lastname-input'
          name='lastName'
          value={voterForm.lastName}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='address-input'>Address</label>
        <input
          type='text'
          id='address-input'
          name='address'
          value={voterForm.address}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='city-input'>City</label>
        <input
          type='text'
          id='city-input'
          name='city'
          value={voterForm.city}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='birthdate-input'>Birth Date</label>
        <input
          type='text'
          id='birthdate-input'
          name='birthdate'
          value={voterForm.birthdate}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='email-input'>Email</label>
        <input
          type='text'
          id='email-input'
          name='email'
          value={voterForm.email}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor='phone-input'>Phone</label>
        <input
          type='text'
          id='phone-input'
          name='phone'
          value={voterForm.phone}
          onChange={change}
        />
      </div>
      <button className='unicorn-button' type='button' onClick={submitVoter}>
        {buttonText}
      </button>
    </form>
  );
};

VoterForm.defaultProps = {
  buttonText: 'Submit Voter',
};
