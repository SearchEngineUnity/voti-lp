import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fieldsets: [
    {
      name: 'general',
      title: 'General Settings',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      name: 'recaptcha',
      title: 'reCaptcha Site Key',
      type: 'string',
      fieldset: 'general',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `Site Settings`,
      };
    },
  },
};
