export function mapHeroToProps({ idTag, layout, blocks, color }) {
  return {
    idTag,
    layout,
    blocks,
    textColor: color.foreground.hex,
    bgColor: color.background.hex,
  };
}

// export function mapGridToProps({ idTag, title, subtitle, leader, col, design, cards }) {
//   return {
//     leader,
//     title,
//     subtitle,
//     col,
//     design,
//     cards,
//     id: idTag,
//   };
// }

// export function mapTileToProps({ title, cardImage, _key }) {
//   return {
//     title,
//     idTag: _key,
//     image: cardImage?.image?.asset?.url,
//     imageAlt: cardImage?.alt,
//   };
// }

// export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
//   return {
//     title: h1,
//     date: displayDate,
//     excerpt,
//     image: cardImage?.mainImage?.image?.asset?.fluid,
//     imageAlt: cardImage?.mainImage?.alt,
//     imageFilename: cardImage?.mainImage?.image?.asset?.originalFilename,
//     url: `/${slug.current}`,
//   };
// }

export function mapSeoToProps(
  { title, description, facebook, twitter, slug, noindex, nofollow, canonical, heroImage },
  siteUrl,
  type,
  mpUrl = '',
) {
  return {
    mpUrl,
    type,
    title,
    description,
    og: facebook,
    twitter,
    siteUrl,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
    heroImage,
  };
}

// export function mapGuideHeroToProps({ h1, author, displayDate, heroImage }) {
//   return {
//     h1,
//     author,
//     displayDate,
//     image: heroImage?.mainImage?.image?.asset?.url,
//   };
// }

export function mapImageBlockToProps({ asset, alt }) {
  return {
    image: asset?.fluid,
    alt,
    title: asset?.originalFilename,
  };
}

export function mapCtaSegmentToProps({ idTag, ctaText, buttonIcon, buttonText, buttonLink }) {
  return {
    id: idTag,
    ctaText,
    buttonIcon: buttonIcon?.logo,
    buttonText,
    buttonLink,
  };
}

export function mapHeroBlockToProps({ brand, text, title }) {
  return {
    title,
    text,
    image: brand.logo,
  };
}

export function mapLrSegmentToProps({ idTag, layout, blocks, color }) {
  return {
    idTag,
    layout,
    blocks,
    textColor: color.foreground.hex,
    bgColor: color.background.hex,
  };
}
