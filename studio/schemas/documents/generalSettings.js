import { MdSettings } from 'react-icons/md';

export default {
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: MdSettings,
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
