import React, { useRef, useState } from 'react';
import './copy-to-clipboard.css';
import Copy from '../../assets/icons/copy.svg';

const CopyToClipBoard = ({ text }) => {

  const [tooltip, setTooltip] = useState(false);

  const copyButton = useRef(null);

  const copy = () => {

    setTooltip(false);

    navigator.clipboard.writeText(text).then(() => {
      setTooltip(true);
      setTimeout(() => setTooltip(false), 1000);
    });

  }

  return (
    <span className = 'copy-to-clipboard-container'>

      <button
        ref = { copyButton }
        className = 'copy-to-clipboard'
        onClick = { copy }
        disabled = { tooltip }
      >

        <Copy />

      </button>

      { tooltip && (<span className = 'copy-to-clipboard__tooltip'> Copied! </span>) }
  
    </span>
  );

};

export default CopyToClipBoard;