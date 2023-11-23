import React from 'react';
import LandingPageLayout from '../templates/landing-page-layout';
import '../atoms/headings/headings.css';
import SEO from '../bosons/seo';
import Image404 from '../assets/images/404.gif';

const NotFoundPage = () => (
  <LandingPageLayout>

    <SEO title='Page not found' />

    <div>

      <h1 className = 'heading heading--lv'>
        Ops...
        Page <span className = 'heading--underline'>not found</span> [404]
      </h1>

      <img
        className = 'centered-layout__image'
        src = { Image404 }
        alt = 'Erro 404: Page not found'
      />

    </div>

  </LandingPageLayout>
);

export default NotFoundPage;
