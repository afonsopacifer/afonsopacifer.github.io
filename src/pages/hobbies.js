import React from 'react';
import DefaultLayout from '../templates/default-layout';
import '../atoms/headings/headings.css';
import '../atoms/text/text.css';
import '../atoms/link/link.css';
import '../atoms/list/list.css';
import SEO from '../bosons/seo/';
import Link from '../atoms/link/';
import PageHeader from '../organisms/page-header/';
import Dev from '../assets/icons/dev.svg';
import Medium from '../assets/icons/medium.svg';

const Hobbies = () => (
  <DefaultLayout>

    <SEO title = 'Hobbies' />

    <PageHeader>

      <h1 className = 'heading heading--lv1'>
        <strong className = 'heading--underline'> Collect </strong> and compete.
      </h1>

      <p className = 'text'>
        I started writing to record my journey through the <a href='https://johnresig.com/blog/write-code-every-day/' className = 'link'>write code every day</a> challenge in 2015
        <em className = 'text--hand-drawing'>
          (inpired by <a href='https://raphamorim.io/about/' target = '_blank' className = 'link'>Raphael Amorim</a> and <a href='https://johnresig.com/about/' target = '_blank' className = 'link'>John Resig</a>) 
        </em>.
      </p>

      <p className = 'text'>
        Investing
      </p>

      <p className = 'text'>
        Patins
      </p>

      <p className = 'text'>
        Collect and compete with Trading Card Games
      </p>

      <p className = 'text'>
        Collect Retro Games
      </p>

      <p className = 'text'>
        Competitive Pokemon Player
        3/07/2010
      </p>

      <p className = 'text'>
        Basquete
      </p>

    </PageHeader>

  </DefaultLayout>
);

export default Hobbies;
