import { Balance } from '../components/Balance';

//👇 This default export determines where your story goes in the story list
export default {
  component: Balance,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    value: "10,000"
  },
};