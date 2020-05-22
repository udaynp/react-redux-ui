import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import navigationConstants from './navigationConstants.json';
import './PageHeader.css';

export const PageHeader = ({ badge }) => {
  const history = useHistory();
  return (
    <>
      <header id='page-header'>
        <h1>
          <Link to={'/'}>
            <img alt='logo' src='./images/project-logo.jpg' />
          </Link>
          <div>Those who don't believe in magic will never find it! </div>
          {badge}
        </h1>
      </header>
      <div className='nav-bar'>
        <Nav fill variant='tabs' defaultActiveKey={history.location.pathname}>
          {navigationConstants.map((menuItem) => (
            <Nav.Item key={menuItem.id}>
              <Nav.Link
                eventKey={menuItem.url}
                onSelect={() => {
                  history.push(menuItem.url);
                }}
              >
                {menuItem.caption}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </>
  );
};
