import React from 'react';
import Link from '../../atoms/link/';
import '../../atoms/headings/headings.css';
import '../../atoms/date/date.css';
import './list-box.css';

const ListBox = ({
  title,
  readStatus,
  date,
  link,
  href,
  }) => {

  const $readMessage = readStatus ? null : <strong className = 'text--highlight'> [UNREAD!] </strong>;

  return (

    <article className = 'list-box'>

      <h3 className = 'heading heading--lv3'>
        { title }
        { $readMessage }
      </h3>

      <small className = 'date'>
        Posted on { date }
      </small>

      <div className = 'list-box__footer'>
        <Link href = { href }> { link } </Link>
      </div>

    </article>

  );

}

export default ListBox;
