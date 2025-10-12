import React from 'react';
import ReactDOM from 'react-dom/client';
import Child from './Child';


const Josh = ReactDOM.createRoot(document.getElementById('Josh'));
Josh.render(
  <React.StrictMode>
    <Child />
  </React.StrictMode>
);
