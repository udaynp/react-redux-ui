import React from 'react';

import cellStyles from './misc.module.css';

export const HeaderCell = ({ children }) => (
  <th className={cellStyles.tableHeaderCell}>{children}</th>
);

export const DataCell = ({ children }) => (
  <td className={cellStyles.tableDataCell}>{children}</td>
);
