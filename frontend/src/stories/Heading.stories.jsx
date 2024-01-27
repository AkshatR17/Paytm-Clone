import { Heading } from "../components/Heading";

//👇 This default export determines where your story goes in the story list
export default {
  component: Heading,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    label : "SignUp"
  },
};