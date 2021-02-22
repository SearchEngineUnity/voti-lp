import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { IoMdColorPalette } from 'react-icons/io';
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
              S.listItem()
                .title('General Settings')
                .icon(MdSettings)
                .child(
                  S.editor()
                    .id('general')
                    .schemaType('generalSettings')
                    .documentId('general-settings'),
                ),
              S.documentTypeListItem('colorSet').title('Color Settings').icon(IoMdColorPalette),
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
                .child(
                  S.editor().id('contact').schemaType('companyInfo').documentId('companyInfo'),
                ),
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
              S.documentTypeListItem('spGuide').title('Single Page Guide'),
              S.divider(),
              S.documentTypeListItem('category').title('Guide Categories'),
            ]),
        ),
      S.documentTypeListItem('redirect').title('Redirects'),
    ]);
