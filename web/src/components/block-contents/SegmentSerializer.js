import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Illustration from './Illustration';
import Logo from './Logo';

const NoIndentUl = styled.ul`
  font-size: 1rem;
  margin-left: 1rem;
  list-style-type: disc;
`;

const serializers = {
  types: {
    block({ children }) {
      return children[0] ? <p>{children}</p> : <br />;
    },
    illustration({ node }) {
      return <Illustration illustration={node} />;
    },
    companyLogo({ node }) {
      return <Logo logo={node} />;
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const href = slug.current === '/' ? `/` : `/${slug.current}`;
      return <Link to={href}>{children}</Link>;
    },
    externalLink: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <NoIndentUl>{children}</NoIndentUl>;
      default:
        return <ol>{children}</ol>;
    }
  },
  listItem: ({ children }) => {
    return <li>{children}</li>;
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
