import { COMMENT } from './types';

export function makeComment(comment) {
  console.log('returned action: ', { type: COMMENT, payload: { comment } });
  return {
    type: COMMENT,
    payload: { comment }
  }
}