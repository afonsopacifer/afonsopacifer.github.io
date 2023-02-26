import React, { useState } from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import '../atoms/link/link.css';
import '../atoms/list/list.css';
import articles from '../data-base/articles.json';
import renderSections from '../bosons/helpers/renderSections';
import SEO from '../bosons/seo/';
import Link from '../atoms/link/';
import PageHeader from '../organisms/page-header/';
import Dev from '../assets/icons/dev.svg';
import Medium from '../assets/icons/medium.svg';
import Filter from '../molecules/filter/';
import filterRules from '../bosons/helpers/filterRules/filterRules';

const Articles = () => {
  
  const [filters, setFilters] = useState([]);

  return (
    <DefaultLayout>

      <SEO title = 'Articles' />

      <PageHeader>

        <h1 className = 'heading heading--lv1'>
          <strong className = 'heading--underline'> Blog posts </strong> about the tech world.
        </h1>

        <p className = 'text'>
          I started writing to record my journey through the <a href='https://johnresig.com/blog/write-code-every-day/' className = 'link'>write code every day</a> challenge in 2015
          <em className = 'text--hand-drawing'>
            &nbsp;(inpired by <a href='https://raphamorim.io/about/' target = '_blank' className = 'link'>Raphael Amorim</a> and <a href='https://johnresig.com/about/' target = '_blank' className = 'link'>John Resig</a>) 
          </em>.
        </p>

        <p className = 'text'>
          Many years later, here are my beloved articles about engineering, design and career.
        </p>

        <Link href = 'https://dev.to/afonsopacifer/'> 
            <Dev />
            Follow me on DEV / <b className = 'text--highlight'>+39k post views</b>
        </Link>

        <Link href = 'https://medium.com/@afonsopacifer'> 
            <Medium />
            Follow me on Medium / <b className = 'text--highlight'>+500 Followers</b>
        </Link>

      </PageHeader>

      <Filter
        label = 'Filter by lang'
        id = 'lang'
        setFilters = { setFilters }
        filters = { filters }
        options = {[
          { label: 'Portuguese', id: 'pt-br' },
          { label: 'English', id: 'en' },
          { label: 'Chinese', id: 'zh' },
        ]}
      />

      { renderSections(articles, filterRules(filters, 'lang')) }

    </DefaultLayout>
  );

}

export default Articles;
