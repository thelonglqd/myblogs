import { COMMENT } from '../actions/types';

const INITIAL_STATE = {
  id: 1,
  title: "Lorem ipsum",
  plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper dui vitae mauris rhoncus posuere. Phasellus ligula mi, imperdiet vel rhoncus ac, imperdiet eu nunc",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper dui vitae mauris rhoncus posuere. Phasellus ligula mi, imperdiet vel rhoncus ac, imperdiet eu nunc. Ut odio erat, fermentum et dapibus sit amet, tristique ut risus. Pellentesque posuere placerat orci vitae maximus. Quisque gravida elit sapien, a commodo dolor egestas vel. Morbi feugiat est felis, vel pretium ex sodales non. Donec vulputate ut quam et tempus. In eleifend turpis augue, eu congue orci hendrerit in. Nam tincidunt pretium accumsan. Duis lectus arcu, auctor id malesuada nec, auctor eget dui. Nunc consequat dolor odio, ac molestie neque scelerisque et. Sed et metus posuere, blandit erat in, tincidunt felis.",
  comments: [
    {
      id: 1,
      author: 'thelonglqd',
      comment: 'good job !'
    },
    {
      id: 2,
      author: 'hoangndt',
      comment: 'it is the shit !'
    },
    {
      id: 3,
      author: 'duongltd',
      comment: 'good good !'
    }
  ]
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COMMENT:
      return { ...state, comments: [ ...state.comments, action.payload ]}
    default:
      return state;
  }
}