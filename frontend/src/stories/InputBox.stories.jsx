import { InputBox } from "../components/InputBox";


//👇 This default export determines where your story goes in the story list
export default {
  component: InputBox,
};

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
    label : "First Name",
    placeholder: "Joe"
  },
};