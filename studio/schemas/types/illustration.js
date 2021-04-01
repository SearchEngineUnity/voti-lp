import { BsImage } from 'react-icons/bs';

export default {
  name: 'illustration',
  title: 'Illustration',
  type: 'image',
  icon: BsImage,
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'text',
      title: 'Caption',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'asset',
    },
    prepare({ title, media }) {
      return {
        title: `Alt text: ${title}`,
        media,
      };
    },
  },
};
