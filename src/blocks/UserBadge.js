import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const signInLink = { url: '/signin', caption: 'Sign In' };
const signOutLink = { url: '/', caption: 'Sign Out' };

export const UserBadge = ({ activeUser, onSignOut, onClick }) => {
  return (
    <ButtonGroup>
      {activeUser ? (
        <Link to={signOutLink.url}>
          <Button variant='light' onClick={onSignOut}>
            Hello, {activeUser.firstName} ! {signOutLink.caption}
          </Button>
        </Link>
      ) : (
        <Button variant='light' onClick={onClick}>
          {signInLink.caption}
        </Button>

        // <Link to={signInLink.url}>
        //   <Button variant='light'>{signInLink.caption}</Button>
        // </Link>
      )}
    </ButtonGroup>
  );
};
