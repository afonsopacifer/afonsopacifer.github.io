import React from 'react';
import ListBox from '../../molecules/list-box';

const renderList = (data, year) => data[year].map((item, i) => (
  <ListBox
    title = { item.title }
    date = { item.date }
    url = { item.url }
    lang = { item.lang }
    platform = { item.platform }
    description = { item.description }
    tech = { item.tech }
    slides = { item.slides }
    video = { item.video }
    attendees = { item.attendees }
    local = { item.local }
    event = { item.event }
    icon = { item.icon }
    time = { item.time }
    key = { i }
  />
));

export default renderList;
