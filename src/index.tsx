import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TestComp from './heyoo';

const rootContainer = document.createElement('div');
document.body.appendChild(rootContainer);
ReactDOM.render(<TestComp />, rootContainer);
