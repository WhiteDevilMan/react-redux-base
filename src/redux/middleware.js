import { COMMENT_CREATE } from './types';
import { errorOn } from './actions';

const badWords = ['козел', 'осел'];

export const spamFilter = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(res => action.data.text.includes(res));
        if (hasBadWords) {
          return dispatch(errorOn('Уважайте людей'));
        }
      }
      return next(action);
    }
  }
}