// language icon images
import reactIcon from "../../assets/languages/react.png";
import cssIcon from "../../assets/languages/css.png";
import firebaseIcon from "../../assets/languages/firebase.png";
// import javascriptIcon from "../../assets/languages/javascript.png";
// import tailwindIcon from "../../assets/languages/tailwind.png";
import sqlIcon from "../../assets/languages/sql.png";
import sassIcon from "../../assets/languages/sass.png";
import nodeIcon from "../../assets/languages/node.png";
import expressIcon from "../../assets/languages/node.png";
import mongodbIcon from "../../assets/languages/mongodb.PNG";
import awsIcon from "../../assets/languages/aws.png";
import herokuIcon from "../../assets/languages/heroku.png";
import jwtIcon from "../../assets/languages/jwt.png";
import reduxIcon from "../../assets/languages/redux.png";

// nodebook Project images
import nodebookFavicon from "../../assets/projects/node/nodebook/nodebook-favicon.png";
import nodebookImg6 from "../../assets/projects/node/nodebook/nodebook-6.png";
import nodebookImg7 from "../../assets/projects/node/nodebook/nodebook-7.png";
import nodebookImg8 from "../../assets/projects/node/nodebook/nodebook-8.png";
// applify Project images
import applifyFavicon from "../../assets/projects/node/applify/applify-favicon.png";
import applifyImg1 from "../../assets/projects/node/applify/applify-1.png";
// import applifyImg2 from "../../assets/projects/node/applify/applify-2.png";
// import applifyImg3 from "../../assets/projects/node/applify/applify-3.png";
// import applifyImg4 from "../../assets/projects/node/applify/applify-4.png";
// PEFFL project images
import pefflFavicon from "../../assets/projects/node/peffl/peffl-favicon.png";
import pefflImg1 from "../../assets/projects/node/peffl/peffl-1.png";
// Petstagram project images
// import petstagramFavicon from "../../assets/projects/react/petstagram/petstagram-favicon.png";
// import petstagramImg1 from "../../assets/projects/react/petstagram/petstagram-1.PNG";
// import petstagramImg2 from "../../assets/projects/react/petstagram/petstagram-2.png";
// import petstagramImg3 from "../../assets/projects/react/petstagram/petstagram-3.PNG";
// import petstagramImg4 from "../../assets/projects/react/petstagram/petstagram-4.PNG";
// Game & Seek project images
import gameNseekFavicon from "../../assets/projects/games/gameNseek/gameNseek-favicon.png";
import gameNseekImg1 from "../../assets/projects/games/gameNseek/gameNseek-1.png";
import gameNseekImg2 from "../../assets/projects/games/gameNseek/gameNseek-2.png";
import gameNseekImg3 from "../../assets/projects/games/gameNseek/gameNseek-3.png";
// import gameNseekImg4 from "../../assets/projects/games/gameNseek/gameNseek-4.PNG";



export const applifyProjectData = {
  id: "2",
  icons: [
    { icon: reactIcon, color: "react" },
    { icon: firebaseIcon, color: "firebase" },
    { icon: cssIcon, color: "css" },
    { icon: reactIcon, color: "styled components" },
  ],
  title: "Captive Chat",
  preview:
    "A web app to provide a safe space for every hostage to connect with each other in the wake of their inability to communicate with the outside world",
  desc: "A web app to provide a safe space for every hostage to connect with each other in the wake of their inability to communicate with the outside world. Hostages can log into the site to use it. Built it during Hacking-Heist Hackathon",
  favicon: nodebookFavicon,
  imgs: [
    { src: applifyImg1 },
  ],
  repository: "https://github.com/TMahato/Captive-Chat",
  live: "https://captive-chat.vercel.app/",
};

export const nodebookProjectData = {
  id: "1",
  icons: [
    { icon: reactIcon, color: "react" },
    { icon: cssIcon, color: "css" },
    { icon: reactIcon, color: "styled components" },
  ],
  title: "CV Generator",
  preview:
    "A web application that will generate a nice and properly formatted Resume from the information filled up in a form.",
    desc: "A web app built with ReactJS. This is a fully functional and responsive app that allows users to generate a nice and properly formatted Resume from the information filled up in a form!",
    favicon: applifyFavicon,
  imgs: [
    { src: nodebookImg6 },
    { src: nodebookImg7 },
    { src: nodebookImg8 },
  ],
  repository: "https://github.com/TMahato/cv-generator",
  live: "https://cv-creator-one.vercel.app/",
};


export const petstagramProjectData = {
  id: "3",
  icons: [
    { icon: reactIcon, color: "react" },
    { icon: cssIcon, color: "css" },
    { icon: reactIcon, color: "styled components" },
  ],
  title: "React memory game",
  preview:
    "A simple game to play with your friends with a set of cards to check their football knowledge",
  desc: "A simple react game to play with your friends with a set of cards to check their football knowledge.",
  favicon: gameNseekFavicon,
  imgs: [
    { src: pefflImg1 },
  ],
  repository: "https://github.com/TMahato/react-memory-game",
  live: "https://tmahato.github.io/react-memory-game/",
};

// export const petstagramProjectData = {
//   id: "3",
//   icons: [
//     { icon: reactIcon, color: "react" },
//     { icon: tailwindIcon, color: "tailwind" },
//     { icon: firebaseIcon, color: "firebase" },
//   ],
//   title: "Petstagram",
//   preview:
//     "A fully functional and responsive Instagram re-creation built with React, Tailwind CSS, and Firebase.",
//   desc: "An Instagram re-creation built with React, Tailwind CSS, and Firebase. This is a fully functional and responsive app that allows users to create an account, post & crop photos, delete posts, comment, like/unlike, follow/unfollow, and change their avatar.",
//   favicon: petstagramFavicon,
//   imgs: [
//     { src: petstagramImg1 },
//     { src: petstagramImg2 },
//     { src: petstagramImg3 },
//     { src: petstagramImg4 },
//   ],
//   repository: "https://github.com/KFig21/petstagram",
//   live: "https://kfig21.github.io/petstagram/",
// };

export const gameNseekProjectData = {
  id: "4",
  icons: [
    { icon: expressIcon, color: "express" },
    { icon: reactIcon, color: "react" },
    { icon: nodeIcon, color: "node" },
    { icon: cssIcon, color: "css" },
    { icon: herokuIcon, color: "heroku" },
  ],
  title: "To-do App",
  preview:
    "A basic to-do app that allows users to store their todos, delete them and mark them as done.",
  desc: "A basic to-do app that allows users to store their todos, delete them and mark them as done.",
  favicon: pefflFavicon,
  imgs: [
    { src: gameNseekImg1 },
    { src: gameNseekImg2 },
    { src: gameNseekImg3 },
    // { src: gameNseekImg4 },
  ],
  repository: "https://github.com/TMahato/Todo-app-with-Nodejs-Mongodb",
  live: "https://todo-app-11111.herokuapp.com/",
};
