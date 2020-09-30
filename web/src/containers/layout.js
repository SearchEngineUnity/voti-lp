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
      <GlobalStyle />
      <>{children}</>
      <MainFooter {...mapMainFooterToProps(data.sanityCompanyInfo)} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
