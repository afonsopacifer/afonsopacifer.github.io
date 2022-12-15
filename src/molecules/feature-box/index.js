import React from 'react';
import shortText from '../../bosons/helpers/shortText'
import '../../atoms/headings/headings.css';
import '../../atoms/date/date.css';
import '../../atoms/text/text.css';
import '../../atoms/tag/tag.css';
import './feature-box.css';
import bg from '../../assets/images/bg.jpg';

const FeatureBox = ({
  date,
  url,
  video,
  slides,
  lang,
  event,
  image,
  description,
  }) => (

  <article className = 'feature-box' lang = { lang }>

    <a
      className = 'feature-box__link'
      href = { video || url || slides}
      target = '_blank'
    >

      <div className = 'feature-box__cover'>

        { lang && (

          <span className = {`feature-box__tag tag tag--${lang}`}>
            { lang }
          </span>

        )}

        <img
          className = 'feature-box__image'
          src = { image ? image : bg }
          alt = { event }
        />

        { date && (

          <div className = 'feature-box__date'>
            { date }
          </div>

        )}

      </div>

      <h3 className = 'heading heading--lv3 feature-box__heading'>
        { event }
      </h3>

      <p className = 'text feature-box__text'>
        { shortText(description, 60) }
      </p>

    </a>

  </article>

);

export default FeatureBox;
