import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Footer from '../../organisms/footer';
import 'normalize.css';
import '../../bosons/theme/variables.css';
import '../common.css';
import './centered-layout.css';

const CenteredLayout = ({ children }) => (
  <div className = 'centered-layout'>

    <Header />

    <main className = 'centered-layout__main'>
      { children }
    </main>

    <Footer />

  </div>
);

CenteredLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CenteredLayout;
