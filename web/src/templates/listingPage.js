import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/listingLayout';
import SEO from '../components/Seo';
import Hero from '../components/LrHeroSegment';
import ListSegment from '../components/ListSegment';
import { mapSeoToProps, mapHeroToProps, mapListSegmentToProps } from '../lib/mapToProps';
// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query ListingTemplate($slug: String) {
    page: sanityListingPage(slug: { current: { eq: $slug } }) {
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
                      ...GatsbySanityImageFixed_noBase64
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
                  ...GatsbySanityImageFluid_noBase64
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
        ... on SanityListSegment {
          _key
          _type
          cardType
          icon
          idTag
          title
          color {
            background {
              hex
            }
            foreground {
              hex
            }
          }
          list {
            _id
            slug {
              current
            }
            cardImage {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
                originalFilename
              }
            }
            segments {
              ... on SanityLrHero {
                _key
                _type
                blocks {
                  ... on SanityHeroBlock {
                    _key
                    _type
                    title
                  }
                }
              }
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
              return <div>This is a LR Segment</div>;
            // return <LrSegment key={segment._key} {...mapLrSegmentToProps(segment)} />;
            case 'ctaSegment':
              return <div>This is a CTA</div>;
            // return <CtaSegment key={segment._key} {...mapCtaSegmentToProps(segment)} />;
            case 'listSegment':
              return <ListSegment key={segment._key} {...mapListSegmentToProps(segment)} />;
            default:
              return <div key="default"> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
