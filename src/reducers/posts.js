const posts = [
  {
    id: 1,
    title: "Lorem ipsum",
    plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper dui vitae mauris rhoncus posuere. Phasellus ligula mi, imperdiet vel rhoncus ac, imperdiet eu nunc",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper dui vitae mauris rhoncus posuere. Phasellus ligula mi, imperdiet vel rhoncus ac, imperdiet eu nunc. Ut odio erat, fermentum et dapibus sit amet, tristique ut risus. Pellentesque posuere placerat orci vitae maximus. Quisque gravida elit sapien, a commodo dolor egestas vel. Morbi feugiat est felis, vel pretium ex sodales non. Donec vulputate ut quam et tempus. In eleifend turpis augue, eu congue orci hendrerit in. Nam tincidunt pretium accumsan. Duis lectus arcu, auctor id malesuada nec, auctor eget dui. Nunc consequat dolor odio, ac molestie neque scelerisque et. Sed et metus posuere, blandit erat in, tincidunt felis."
  },
  {
    id: 2,
    title: "Sed faucibus",
    plot: "Sed faucibus, nisi sit amet elementum posuere, justo mauris ullamcorper nisi, porttitor pretium ligula neque eget nibh. Donec aliquet lobortis est. Duis fringilla tincidunt justo quis placerat. Vivamus pharetra, odio a sollicitudin scelerisque, velit metus pharetra lectus, sit amet mattis tortor ex a mauris",
    content: "Sed faucibus, nisi sit amet elementum posuere, justo mauris ullamcorper nisi, porttitor pretium ligula neque eget nibh. Donec aliquet lobortis est. Duis fringilla tincidunt justo quis placerat. Vivamus pharetra, odio a sollicitudin scelerisque, velit metus pharetra lectus, sit amet mattis tortor ex a mauris. Donec ut efficitur massa. Nam dictum leo nisi, vel mollis massa lobortis eget. Vestibulum aliquet dolor a neque mollis, nec porttitor orci scelerisque. Duis et elit at libero luctus luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet ultrices elementum. Mauris sit amet mauris sapien. Nullam at ipsum nunc."
  },
  {
    id: 3,
    title: "Sed rhoncus ante",
    plot: "Sed rhoncus ante in nisi efficitur, ac lacinia enim suscipit. Nullam ornare ullamcorper nisl, non hendrerit nibh ultricies sit amet. Pellentesque posuere efficitur orci id pharetra. Nulla dapibus urna quis vestibulum condimentum. Nullam sagittis felis odio, vel ultrices risus porttitor ut. Suspendisse placerat velit a lacus laoreet volutpat",
    content: "Sed rhoncus ante in nisi efficitur, ac lacinia enim suscipit. Nullam ornare ullamcorper nisl, non hendrerit nibh ultricies sit amet. Pellentesque posuere efficitur orci id pharetra. Nulla dapibus urna quis vestibulum condimentum. Nullam sagittis felis odio, vel ultrices risus porttitor ut. Suspendisse placerat velit a lacus laoreet volutpat. Maecenas nisi ante, gravida quis pulvinar sit amet, euismod a enim. Aliquam eget purus nisl. Suspendisse aliquam nisl quis dolor porta mattis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin malesuada lectus ac urna tempor gravida."
  },
  {
    id: 4,
    title: "Aenean leo turpis",
    plot: "Aenean leo turpis, molestie vel placerat varius, tempus a diam. Aliquam eu ante massa. Pellentesque pulvinar nisl dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mattis justo, in suscipit massa tincidunt a",
    content: "Aenean leo turpis, molestie vel placerat varius, tempus a diam. Aliquam eu ante massa. Pellentesque pulvinar nisl dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mattis justo, in suscipit massa tincidunt a. Curabitur faucibus nec ligula a interdum. Quisque vel volutpat risus, non sagittis dolor. Donec a lorem tempor, eleifend risus id, ornare nisl. Phasellus varius augue a dui aliquam dignissim. Proin mollis, metus ac vehicula iaculis, purus lorem commodo mi, sit amet auctor elit magna vel libero."
  },
  {
    id: 5,
    title: "Phasellus vitae facilisis tortor",
    plot: "Phasellus vitae facilisis tortor. In ornare, lorem vitae imperdiet molestie, elit lorem placerat diam, ut sodales mi libero ut tellus. Praesent eleifend, diam id accumsan dignissim, ante justo sodales libero, sed dapibus nisl dui sit amet orci. Aliquam erat volutpat. Mauris sit amet ligula eu ipsum pellentesque aliquam",
    content: "Phasellus vitae facilisis tortor. In ornare, lorem vitae imperdiet molestie, elit lorem placerat diam, ut sodales mi libero ut tellus. Praesent eleifend, diam id accumsan dignissim, ante justo sodales libero, sed dapibus nisl dui sit amet orci. Aliquam erat volutpat. Mauris sit amet ligula eu ipsum pellentesque aliquam. Nunc lacinia sodales urna, quis convallis erat pretium quis. Aenean nec elit nibh. Phasellus ante purus, luctus a tortor et, porttitor consectetur lacus. Morbi mattis gravida tellus, id faucibus tellus lacinia sit amet. Nunc tristique quis arcu eu accumsan. Donec feugiat orci nisl, sed luctus tellus varius ac. Curabitur iaculis et dui eu ultricies. Fusce ultrices rutrum dignissim."
  }
]

const INITIAL_STATE = { posts };

export default function (state = INITIAL_STATE, action) {
  return state;
}