import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import 'normalize.css';
import '../../bosons/theme/variables.css';
import '../common.css';
import './landing-page-layout.css';

const LandingPageLayout = ({ children }) => (
  <div className = 'lp-layout'>

    <Header />

    <main className = 'lp-layout__main'>
      { children }
    </main>

    <Footer />

  </div>
);

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPageLayout;
