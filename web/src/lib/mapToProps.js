export function mapHeroToProps({ idTag, title, _rawText, backgroundImage, backgroundColor }) {
  return {
    id: idTag,
    title,
    heroText: _rawText,
    imageURL: backgroundImage?.asset?.url,
    backgroundColor: backgroundColor?.hex,
  };
}

export function mapGridToProps({ idTag, title, subtitle, leader, col, design, cards }) {
  return {
    leader,
    title,
    subtitle,
    col,
    design,
    cards,
    id: idTag,
  };
}

export function mapTileToProps({ title, cardImage, _key }) {
  return {
    title,
    idTag: _key,
    image: cardImage?.image?.asset?.url,
    imageAlt: cardImage?.alt,
  };
}

export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
  return {
    title: h1,
    date: displayDate,
    excerpt,
    image: cardImage?.mainImage?.image?.asset?.fluid,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?.image?.asset?.originalFilename,
    url: `/${slug.current}`,
  };
}
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

export function mapGuideHeroToProps({ h1, author, displayDate, heroImage }) {
  return {
    h1,
    author,
    displayDate,
    image: heroImage?.mainImage?.image?.asset?.url,
  };
}

export function mapCtaFormToProps({ idTag, title, subtitle, form }) {
  return {
    id: idTag,
    title,
    subtitle,
    form,
  };
}

export function mapLrTextImageToProps({ idTag, title, subtitle, order, textDesign, set }) {
  return {
    id: idTag,
    title,
    subtitle,
    order: !!order,
    textDesign,
    set,
  };
}

export function mapTextBoxToProps({ leaderIcon, leaderText, title, subtitle, _rawText }) {
  return {
    leaderIcon: leaderIcon?.image?.asset?.url,
    leaderAlt: leaderIcon?.alt,
    leaderText,
    title,
    subtitle,
    text: _rawText,
  };
}

export function mapImageBoxToProps({ alt, image }) {
  return {
    image: image?.asset?.url,
    alt,
  };
}

export function mapMainFooterToProps({ address1, city, email, postalCode, province, name }) {
  return {
    address: address1,
    city,
    email,
    postalCode,
    province,
    name,
  };
}

export function mapMainNavToProps({ title, logo, menu }) {
  return {
    name: title,
    logo: logo?.asset?.url,
    menu,
  };
}

export function mapImageBlockToProps({ asset, alt }) {
  return {
    image: asset?.fluid,
    alt,
    title: asset?.originalFilename,
  };
}
