import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

export default () =>
  S.list()
    .title('VOTI LP')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.documentTypeListItem('generalSettings').title('General Settings'),
              S.documentTypeListItem('colorSet').title('Color Settings'),
            ]),
        ),
      S.listItem()
        .title('Company Info')
        .icon(BsInfoSquare)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('landingPage').title('Landing Pages'),
              S.documentTypeListItem('listingPage').title('Listing Pages'),
              S.divider(),
            ]),
        ),
      S.documentTypeListItem('redirect').title('Redirects'),
    ]);
