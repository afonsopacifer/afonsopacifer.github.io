import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../organisms/header';
import Video from '../../molecules/video/';
import Footer from '../../organisms/footer';
import 'normalize.css';
import '../../bosons/theme/variables.css';
import '../common.css';
import './default-layout.css';

const DefaultLayout = ({ videoSource, transparentHeader, children }) => (
  <div className = { `default-layout ${ videoSource && 'default-layout--video' }` }>

    <Header className = { `${ transparentHeader && 'header-container--transparent' }` }/>

    { videoSource && <Video src = {videoSource} /> }

    <main className = { `default-layout__main` }>
      { children }
    </main>

    <Footer />

</div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout;
