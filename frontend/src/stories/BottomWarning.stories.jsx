import { BottomWarning } from "../components/BottomWarning";

//👇 This default export determines where your story goes in the story list
export default {
  component: BottomWarning,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    label : "Already have account",
    buttonText: "Sign in",
    to: "aefe"
  },
};