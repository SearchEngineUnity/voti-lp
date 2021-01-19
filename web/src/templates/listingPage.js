import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/landingLayout';
import SEO from '../components/Seo';
import Hero from '../components/LrHero';

import { mapSeoToProps, mapHeroToProps } from '../lib/mapToProps';
// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query ListingTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
export default ({ data }) => {
  const type = 'page';
  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.segments.map((segment) => {
          const { _type } = segment;
          switch (_type) {
            case 'hero':
              return <Hero key={segment._key} {...mapHeroToProps(segment)} />;
            case 'lrSegment':
              return <div>This is a LR Segment</div>;
            // return <LrSegment key={segment._key} {...mapLrSegmentToProps(segment)} />;
            case 'ctaSegment':
              return <div>This is a CTA</div>;
            // return <CtaSegment key={segment._key} {...mapCtaSegmentToProps(segment)} />;
            default:
              return <div key="default"> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
