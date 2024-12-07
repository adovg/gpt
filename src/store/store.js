import { createStore } from "redux";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";
// import { today } from "./imports.js";

let currentDate = new Date();
currentDate.toDateString();
console.log(currentDate);

const defaultState = {
  featureContent: [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ],
  featureTitle: [
    {
      title: "What is GPT-3",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
    },
  ],
  featurePosts: [
    {
      title: "Improving end distrusts instantly ",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ],
  blogPostsTitle: [
    {
      img: blog01,
      date: currentDate,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ],
  blogPosts: [
    {
      img: blog02,
      date: currentDate,
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog03,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog04,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      img: blog05,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ],
};

const reducer = (state = defaultState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
