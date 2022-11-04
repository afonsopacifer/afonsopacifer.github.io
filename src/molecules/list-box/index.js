import React from 'react';
import Link from '../../atoms/link/';
import '../../atoms/headings/headings.css';
import '../../atoms/date/date.css';
import '../../atoms/text/text.css';
import '../../atoms/tag/tag.css';
import './list-box.css';
import BrazilFlag from '../../assets/icons/brazil-flag.svg';
import ColombiaFlag from '../../assets/icons/colombia-flag.svg';

const ListBox = ({
  title,
  date,
  url,
  lang,
  platform,
  description,
  slides,
  video,
  attendees,
  local,
  event,
  icon,
  time,
  }) => {

  let currentFlag;

  if(icon === 'brazil') {
    currentFlag = <BrazilFlag className = 'heading__icon' />
  }

  if(icon === 'colombia') {
    currentFlag = <ColombiaFlag className = 'heading__icon' />
  }

  return (
    <article className = 'list-box'>

      <div className = 'list-box__header'>

        {
          event &&
          <h3 className = 'heading heading--lv3'>
            { currentFlag } { event }
          </h3>
        }

        {
          date &&
          <small className = 'date'>
            { date }
          </small>
        }

        { lang &&
          <span className = {`tag tag--${lang}`}>
            { lang }
          </span>
        }

      </div>

      <div className = 'list-box__body'>

        {
          title &&
          <small className = 'text text--short'>
            Theme: { title }
          </small>
        }

        {
          attendees &&
          <small className = 'text text--short'>
            Attendance: ≈ { attendees }
          </small>
        }

        {
          local &&
          <small className = 'text text--short'>
            Local: { local }
          </small>
        }

        {
          time &&
          <small className = 'text text--short'>
            Duration: { time }
          </small>
        }

      {
        description &&
        <p className = 'text text--short'>
          { description }
        </p>
      }

      </div>

      <div className = 'list-box__footer'>
        { platform && <Link href = { url }> Available on { platform } </Link> }
        { slides && <Link href = { slides }> Slides </Link> }
        { video && <Link href = { video }> Video </Link> }
      </div>

    </article>

  );

}

export default ListBox;
