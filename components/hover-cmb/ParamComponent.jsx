import React from 'react';
import PhoneComponent from './DetailComponent';

const ParamComponent = ({ params }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {params.map((param, i) => (
        <PhoneComponent key={i} param={param} />
      ))}
    </div>
  );
};

export default ParamComponent;
