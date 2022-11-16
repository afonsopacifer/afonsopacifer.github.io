import React from 'react';
import './comment-bar.css';

const CommentBar = ({ title, children }) => (
  <div className = 'comment-bar-container'>
    <div className = 'comment-bar'>

      <b className = 'comment-bar__title'>
        { title }
      </b>

      <p className = 'comment-bar__text'>
        { children }
      </p>

    </div>
  </div>
);

export default CommentBar;