export default {
  name: 'lrCta',
  title: 'Left Right CTA',
  description: 'Use composites when you want to put two different blocks side by side.',
  type: 'object',
  fields: [
    {
      name: 'idTag',
      title: 'ID',
      type: 'string',
      description: 'Please use "-" in place of space',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'ctaText',
      title: 'CTA text',
      type: 'string',
      description: 'If you need a line break please use "\\n"',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
    },
    prepare({ subtitle }) {
      return {
        subtitle,
        title: 'LR CTA',
      };
    },
  },
};
