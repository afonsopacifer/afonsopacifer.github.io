import React from 'react';
import './controls.css';

const Controls = () => {

  const magic = () => {
    console.log('Cool stuff');
  }

  return (
    <div className = 'controls'>

      <div className = 'controls__title'>
        <button
        className = 'controls__button'
        onClick = { magic }
        >

          <img
            src = 'https://avatars0.githubusercontent.com/u/6748866?s=460&u=5f68f71ae1b3fb3c7030281a77e815161973374c&v=4'
            alt = 'Afonso Pacifer'
            className = 'controls__photo'
          />

        </button>
      </div>

    </div>
  );

}

export default Controls;
