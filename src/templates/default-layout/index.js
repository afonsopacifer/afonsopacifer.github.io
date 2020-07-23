import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import 'normalize.css';
import '../../bosons/theme/variables.css';
import './default-layout.css';

const DefaultLayout = ({ children }) => (
  <div className = 'default-layout'>

    <Header />

    <main className = 'default-layout__main'>
      { children }
    </main>

    <Footer />

  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout;
