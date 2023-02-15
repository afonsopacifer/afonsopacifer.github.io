import React from 'react';
import './checkbox.css';

const Checkbox = ({ label, id, onChange }) => {

  return (
    <div className = 'checkbox'>

      <input
        className = 'checkbox__input'
        type = 'checkbox'
        id = { id }
        name = { id }
        onChange = { onChange }
      />

      <label
        className = 'checkbox__label'
        for = { id }
      > 

        { label }
       
      </label>

    </div>
  );

};

export default Checkbox;
