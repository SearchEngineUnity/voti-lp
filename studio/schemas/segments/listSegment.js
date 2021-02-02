import { GiBugleCall } from 'react-icons/gi';

export default {
  name: 'listSegment',
  title: 'List Segment',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'List Icon',
      type: 'string',
    },
    {
      name: 'list',
      title: 'List Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'landingPage',
            },
          ],
        },
      ],
    },
    {
      name: 'color',
      title: 'Color Setting',
      type: 'reference',
      to: [{ type: 'colorSet' }],
    },
    {
      name: 'cardType',
      title: 'Card Type',
      type: 'string',
      options: {
        list: ['Brochure', 'Video', 'Landing Page'],
      },
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
