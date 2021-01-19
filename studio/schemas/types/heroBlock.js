export default {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    {
      title: 'brand',
      name: 'brand',
      type: 'reference',
      to: [{ type: 'companyLogo' }],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'brand.image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
};
