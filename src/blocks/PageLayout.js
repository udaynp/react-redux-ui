import React from 'react';
import PropTypes from 'prop-types';

import './PageLayout.css';

export const PageLayout = (props) => {
  return <div className='page-layout'>{props.children}</div>;
};

PageLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
