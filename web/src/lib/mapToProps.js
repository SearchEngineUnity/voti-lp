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
    width: asset?.metadata?.dimensions?.width,
    height: asset?.metadata?.dimensions?.height,
  };
}

export function mapCtaSegmentToProps({
  idTag,
  ctaText,
  buttonIcon,
  buttonText,
  buttonLink,
  color,
}) {
  return {
    id: idTag,
    ctaText,
    buttonIcon: buttonIcon?.logo,
    buttonText,
    buttonLink,
    textColor: color.foreground.hex,
    bgColor: color.background.hex,
  };
}

export function mapHeroBlockToProps({ brand, text, title }) {
  return {
    title,
    text,
    image: brand?.logo,
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

export function mapListSegmentToProps({ idTag, title, icon, cardType, list, color }) {
  return {
    idTag,
    title,
    icon,
    cards: list,
    cardType,
    textColor: color.foreground.hex,
    bgColor: color.background.hex,
  };
}

export function mapCardToProps({ cardImage, segments, slug }) {
  return {
    title: segments
      .filter((segment) => segment._type === 'lrHero')[0]
      .blocks.filter((block) => block._type === 'heroBlock')[0].title,
    image: cardImage.asset.fluid,
    imageAlt: cardImage.alt,
    filename: cardImage.asset.originalFilename,
    url: slug.current,
  };
}

export function mapGuideHeroToProps({ h1, subtitle, _updatedAt, _createdAt, author, heroImage }) {
  return {
    title: h1,
    subtitle,
    date: _updatedAt || _createdAt,
    author,
    image: heroImage,
  };
}

export function mapCalendlySegmentToProps({ idTag, title, subtitle, url, color }) {
  return {
    idTag,
    title,
    subtitle,
    url,
    textColor: color.foreground.hex,
    bgColor: color.background.hex,
  };
}

export function mapHeroBlockPTToProps({ brand, _rawText, title }) {
  return {
    title,
    text: _rawText,
    image: brand?.logo,
  };
}

export function mapVideoBlockToProps({ url }) {
  return {
    url,
  };
}
