import React from 'react';
import ListBox from '../../molecules/list-box'

const renderList = (data, year) => data[year].map((item, i) => (
  <ListBox
    title = { item.name }
    readStatus = { false }
    date = { item.date }
    link = { item.link }
    href = { item.url }
    key = { i }
  />
));

export default renderList;
