import { BiHeading } from 'react-icons/bi';

export default {
  name: 'lrHero',
  title: 'Left Right Hero',
  icon: BiHeading,
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
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      description: 'Please pick a maximum of two. The first item will appear left in layout.',
      of: [
        { type: 'heroBlock' },
        { type: 'heroBlockPT' },
        { type: 'illustration' },
        { type: 'video' },
      ],
      validation: (Rule) => Rule.length(2),
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: ['7:5', '3:1', '2:1', '1:1', '1:2', '1:3'],
      },
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
