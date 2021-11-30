import { baseLayoutFactory } from '../../../extends/baseLayout';

export const ViewAdapter = baseLayoutFactory({
  layoutImplement() {
    if (process.env.DISCUZ_ENV === 'web') {
      return require('./web').AudioPlayerWebLayout;
    }

    if (process.env.DISCUZ_ENV === 'mini') {
      return require('./mini').AudioPlayerMiniLayout;
    }
  },
});
