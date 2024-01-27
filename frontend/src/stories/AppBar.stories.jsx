import { Button } from '../components/Button';

//👇 This default export determines where your story goes in the story list
export default {
  component: Button,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    label : "SignUp"
  },
};