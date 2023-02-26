import React from 'react';
import '../../atoms/headings/headings.css';
import renderList from './renderLists';

const renderSections = (data, filters) => Object.keys(data).map((year, i) => {  

  const $list = renderList(data[year], filters);

  if($list.length) {
    
    return (
      <section className = 'default-layout__article' key = { `${year}_${i}` }>

        <h2 className = 'heading heading--lv2 heading--container'>
          <strong className = 'heading--underline'> { year.split('_')[1] } </strong>
        </h2>
    
        { $list  }
  
      </section>
    );

  }

});

export default renderSections;
