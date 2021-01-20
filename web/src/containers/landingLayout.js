/** Layout component that queries for data with Gatsby's useStaticQuery component See: https://www.gatsbyjs.org/docs/use-static-query/ */
import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Footer from '../components/MainFooter';
import GlobalStyle from '../global/GlobalStyle';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <script
          rel="preload"
          src="https://kit.fontawesome.com/e4a269ffa7.js"
          crossOrigin="anonymous"
          async
        />
      </Helmet>
      <GlobalStyle />
      <>{children}</>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
