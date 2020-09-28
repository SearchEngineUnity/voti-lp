/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import MainFooter from '../components/MainFooter';
import { mapMainFooterToProps } from '../lib/mapToProps';
import GlobalStyle from '../global/GlobalStyle';
import LrHero from '../components/LrHero';
import LrForm from '../components/LrForm';
import LrContentBlock from '../components/LrContentBlock';
import Banner from '../components/Banner';
import LrCTA from '../components/LrCTA';
import ContactUs from '../components/ContactUs';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      sanityCompanyInfo {
        _key
        address1
        city
        email
        postalCode
        province
        name
      }
      sanityMainNavbar {
        title
        logo {
          asset {
            url
          }
        }
        menu {
          ... on SanityNavJumpLink {
            _key
            _type
            isButton
            link
            title
          }
        }
      }
    }
  `);

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
      {/* <>{children}</> */}
      <LrHero />
      <LrForm />
      <LrContentBlock />
      <Banner />
      <LrCTA />
      <ContactUs />
      <MainFooter {...mapMainFooterToProps(data.sanityCompanyInfo)} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
