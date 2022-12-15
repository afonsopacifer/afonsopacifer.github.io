import React from 'react';
import '../../atoms/headings/headings.css';
import renderList from './renderLists';

const renderSections = data => Object.keys(data).map((years, i) => (

  <section className = 'default-layout__article' key = { `${years}_${i}` }>

    <h2 className = 'heading heading--lv2 heading--container'>
      <strong className = 'heading--underline'> { years.split('_')[1] } </strong>
    </h2>

    { renderList(data, years) }

  </section>

));

export default renderSections;
