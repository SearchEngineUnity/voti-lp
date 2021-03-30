import { MdVideocam } from 'react-icons/md';
import EmbedPlayer from '../components/EmbedPlayer';

export default {
  type: 'object',
  name: 'video',
  title: 'Video',
  icon: MdVideocam,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      type: 'url',
      name: 'url',
      title: 'Video URL',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
};
