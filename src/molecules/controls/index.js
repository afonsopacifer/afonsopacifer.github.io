import React from 'react';
import './controls.css';

const Controls = () => {

  const magic = () => {
    console.log('Cool stuff');
  }

  return (
    <div className = 'controls'>

      <div className = 'controls__title'>
        {/* <button
        className = 'controls__button'
        onClick = { magic }
        > */}

          <img
            src = 'logo/afonso_pacifer_logo_white.svg'
            alt = 'Afonso Pacifer'
            className = 'controls__photo controls__button'
          />

        {/* </button> */}
      </div>

    </div>
  );

}

export default Controls;
