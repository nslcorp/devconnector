import React from 'react';
import spinnerSrc from './spinner.gif'

export default () => (
  <div>
    <img src={spinnerSrc} style={{ width: '200px', margin: 'auto', display: 'block' }} alt="Loading..." />
  </div>

);
