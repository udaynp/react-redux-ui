import React from 'react';

import './Content.css';

export const Content = (props) => {
  return (
    <main id='content' className={props.className}>
      <div className='unicorn-content'>{props.children}</div>
    </main>
  );
};
