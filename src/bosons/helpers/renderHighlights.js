import React from 'react';
import FeatureBox from '../../molecules/feature-box';

const renderHighlights = data => Object.keys(data).flatMap(years => (
  data[years] // Get arrays per year
    .filter(item => item.highlights) // Filter by highlights
    .map((item, i) => (

      <FeatureBox
        date = { item.date }
        url = { item.url }
        lang = { item.lang }
        event = { item.event }
        key = { i }
      />

    ))
));

export default renderHighlights;
