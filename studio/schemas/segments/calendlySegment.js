import { FaRegCalendarAlt } from 'react-icons/fa';

export default {
  name: 'calendlySegment',
  title: 'Calendly Segment',
  icon: FaRegCalendarAlt,
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
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().error('Field is required'),
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Subtitle',
    },
    {
      name: 'url',
      type: 'url',
      title: 'Calendly Embed URL',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        Rule.uri({
          allowRelative: false,
          scheme: ['https'],
        }),
      ],
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
