import { IoMdColorPalette } from 'react-icons/io';

export default {
  name: 'colorSet',
  title: 'Color Set',
  type: 'document',
  icon: IoMdColorPalette,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'foreground',
      title: 'Text Color',
      type: 'color',
    },
    {
      name: 'background',
      title: 'Background Color',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
  prepare(title) {
    return {
      title,
    };
  },
};
