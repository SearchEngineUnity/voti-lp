import { MdAddBox } from 'react-icons/md';

export default {
  title: 'CTA Button',
  name: 'ctaButton',
  type: 'object',
  icon: MdAddBox,
  fields: [
    {
      title: 'Text',
      name: 'btnText',
      type: 'string',
    },
    {
      title: 'Jump Link',
      name: 'hash',
      type: 'string',
      description: 'Use the id for the section you would like the user to scroll to on click',
    },
  ],
  preview: {
    select: {
      title: 'btnText',
    },
  },
};
