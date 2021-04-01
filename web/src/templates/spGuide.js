import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideHero from '../components/GuideHero';
import GuideBody from '../components/block-contents/GuideSerializer';
import ToC from '../components/TableOfContent';
import SEO from '../components/Seo';

import { mapSeoToProps, mapGuideHeroToProps } from '../lib/mapToProps';

export const query = graphql`
  query spGuideTemplate($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    guide: sanitySpGuide(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      _updatedAt
      _createdAt
      author
      _rawBody(resolveReferences: { maxDepth: 10 })
      canonical
      cardImage {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
          originalFilename
        }
      }
      description
      facebook {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      h1
      heroImage {
        alt
        asset {
          fixed {
            width
            height
          }
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
          originalFilename
        }
      }
      nofollow
      noindex
      subtitle
      title
      twitter {
        title
        description
      }
      toc {
        header
        title
        type
        _key
      }
    }
  }
`;

export default ({ data }) => {
  const type = 'guide';

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.guide, data.site.siteMetadata.siteUrl, type)} />
      <GuideHero {...mapGuideHeroToProps(data.guide)} />
      <Container fluid="xl" className="my-5">
        <Row>
          <article className="col-md-9 col-12">
            <GuideBody blocks={data.guide._rawBody} />
          </article>
          <div className="col-md-3">
            <ToC toc={data.guide.toc} />
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
