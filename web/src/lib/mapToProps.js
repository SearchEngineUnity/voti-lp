// export function mapArticleToProps({ column, width, title, _rawBody }) {
//   return {
//     title,
//     blockContent: _rawBody,
//     colWidth: width,
//     columnCount: column,
//   };
// }
// export function mapBannerHeaderToProps({ title, image }) {
//   return {
//     title,
//     image: image.asset.fluid,
//     imageURL: image.asset.url,
//   };
// }
// export function mapContactUsToProps({ email, address, title, width, number }) {
//   return {
//     email,
//     address,
//     title,
//     colWidth: width,
//     number,
//   };
// }
// export function mapFeatureCollectionToProps({ title, width, features, borderRadius, layout }) {
//   return {
//     title,
//     colWidth: width,
//     borderRadius,
//     layout,
//     features: features.map((feature) => ({
//       id: feature._key,
//       description: feature.description,
//       icon: feature.icon,
//       title: feature.title,
//       colWidth: feature.width,
//     })),
//   };
// }
// export function mapFormToProps({ action = '', title, width, button, formFields }) {
//   return {
//     action,
//     title,
//     colWidth: width,
//     btnRadius: button.borderRadius,
//     btnSize: button.size,
//     btnTitle: button.title,
//     formFields: formFields.map((field) => ({
//       title: field.title,
//       name: field.name,
//       placeholder: field.placeholder,
//       required: field.required || '',
//       type: field.inputType,
//       id: field._key,
//       as: field.fieldType,
//     })),
//   };
// }
export function mapHeroToProps({ idTag, title, _rawText, backgroundImage, backgroundColor }) {
  return {
    id: idTag,
    title,
    heroText: _rawText,
    imageURL: backgroundImage?.asset?.url,
    backgroundColor: backgroundColor?.hex,
  };
}
// export function mapPartnerCollectionToProps({ partners, title, width }) {
//   return {
//     title,
//     colWidth: width,
//     partners: partners.map((partner) => ({
//       image: partner.image.asset.fluid,
//       imageURL: partner.image.asset.url,
//       imageFilename: partner.image.asset.originalFilename,
//       id: partner._key,
//       title: partner.title,
//       webURL: partner.webUrl,
//     })),
//   };
// }
// export function mapTestimonialCollectionToProps({ width, title, testimonials = [], layout }) {
//   return {
//     title,
//     layout,
//     colWidth: width,
//     testimonials: testimonials.map((testimonial) => {
//       if (testimonial.image) {
//         return {
//           name: testimonial.name,
//           colWidth: testimonial.width,
//           image: testimonial.image.asset.fluid,
//           imageFilename: testimonial.image.asset.originalFilename,
//           id: testimonial._key,
//           description: testimonial.description,
//         };
//       }
//       return {
//         name: testimonial.name,
//         colWidth: testimonial.width,
//         id: testimonial._key,
//         description: testimonial.description,
//       };
//     }),
//   };
// }
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
