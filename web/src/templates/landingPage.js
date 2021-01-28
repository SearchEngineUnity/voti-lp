import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/landingLayout';
import SEO from '../components/Seo';
import Hero from '../components/LrHeroSegment';
import LrSegment from '../components/LrSegment';
import CtaSegment from '../components/CtaSegment';
import {
  mapSeoToProps,
  mapHeroToProps,
  mapLrSegmentToProps,
  mapCtaSegmentToProps,
} from '../lib/mapToProps';
// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query LandingTemplate($slug: String) {
    page: sanityLandingPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      description
      facebook {
        _key
        _type
        description
        title
        image {
          asset {
            url
          }
        }
      }
      noRobots
      noSitemap
      nofollow
      noindex
      title
      twitter {
        _key
        _type
        description
        title
      }
      segments {
        ... on SanityLrCta {
          _key
          _type
          buttonIcon {
            logo {
              asset {
                fixed {
                  ...GatsbySanityImageFixed
                }
                originalFilename
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
              }
              alt
            }
          }
          buttonLink
          buttonText
          ctaText
          idTag
          color {
            background {
              hex
            }
            foreground {
              hex
            }
          }
        }
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanityHeroBlock {
              _key
              _type
              brand {
                logo {
                  asset {
                    fixed {
                      ...GatsbySanityImageFixed
                    }
                    originalFilename
                    metadata {
                      dimensions {
                        width
                        height
                      }
                    }
                  }
                  alt
                }
              }
              text
              title
            }
            ... on SanityIllustration {
              _key
              _type
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
                originalFilename
              }
            }
          }
          idTag
          layout
          color {
            background {
              hex
            }
            foreground {
              hex
            }
          }
        }
        ... on SanityLrSegment {
          _key
          _type
          layout
          idTag
          color {
            background {
              hex
            }
            foreground {
              hex
            }
          }
          blocks {
            ... on SanityIllustration {
              _key
              _type
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
                originalFilename
              }
            }
            ... on SanityPardotForm {
              _key
              _type
              embed
              height
              name
              width
            }
            ... on SanitySegmentBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 12 })
              title
            }
          }
        }
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
            case 'lrHero':
              return <Hero key={segment._key} {...mapHeroToProps(segment)} />;

            case 'lrSegment':
              return <LrSegment key={segment._key} {...mapLrSegmentToProps(segment)} />;

            case 'lrCta':
              return <CtaSegment key={segment._key} {...mapCtaSegmentToProps(segment)} />;

            default:
              return <div key="default"> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
