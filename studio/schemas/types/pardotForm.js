import { FaWpforms } from 'react-icons/fa';

export default {
  name: 'pardotForm',
  title: 'Pardot Form',
  type: 'object',
  icon: FaWpforms,
  fields: [
    {
      name: 'name',
      title: 'Pardot Form Name',
      type: 'string',
    },
    {
      name: 'embed',
      title: 'Embed Link',
      type: 'url',
    },
    {
      name: 'height',
      title: 'Height',
      type: 'number',
    },
    {
      name: 'width',
      title: 'Width',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
