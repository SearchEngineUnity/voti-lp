export default {
  name: 'navItem',
  type: 'object',
  title: 'Navigation Item',
  fields: [
    {
      name: 'nav',
      type: 'reference',
      to: [{ type: 'landingPage' }, { type: 'listingPage' }],
    },
    {
      name: 'isButton',
      type: 'boolean',
      title: 'Is it in the Button Style?',
    },
  ],
  preview: {
    select: {
      title: 'nav.title',
      subtitle: 'nav.slug.current',
    },
  },
};
