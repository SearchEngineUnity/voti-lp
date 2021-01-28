import { GiBugleCall } from 'react-icons/gi';

export default {
  name: 'lrCta',
  title: 'Left Right CTA',
  icon: GiBugleCall,
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
      name: 'buttonIcon',
      title: 'Button Icon',
      type: 'reference',
      to: [{ type: 'companyLogo' }],
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
    {
      name: 'color',
      title: 'Color Setting',
      type: 'reference',
      to: [{ type: 'colorSet' }],
    },
  ],
  preview: {
    select: {
      subtitle: '_type',
      id: 'idTag',
    },
    prepare({ id, subtitle }) {
      return {
        subtitle,
        title: `ID: ${id}`,
      };
    },
  },
};
