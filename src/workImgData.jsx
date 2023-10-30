//for ghpages, files must be named sourced from './assets/<folder>' assuming assets is in public
//does not work for parcel
//"homepage": "https://mattgaughan2022.github.io/mg-portfolio/", for ghpages
//used parcel plugin to import all photos, but instead scrapped to just moving files out of '/public'

// ===================IMPORTS===================
//angular
import angHome from "./assets/angularFlix/homePage.png";
import angDetails from "./assets/angularFlix/details.png";
import angLogin from "./assets/angularFlix/login.png";
import angProf from "./assets/angularFlix/profile.png";
import angUpdate from "./assets/angularFlix/updateProf.png";

//react
import reactDetails from "./assets/reactFlix/details.png";
import reactHome from "./assets/reactFlix/home.png";
import reactFiltered from "./assets/reactFlix/filtered.png";
import reactSignup from "./assets/reactFlix/signUp.png";
import reactProf from "./assets/reactFlix/profile.png";
import reactUpdate from "./assets/reactFlix/updateProf.png";

//api
import apiHeroku from "./assets/movieAPI/herokuHost.png";
import apiMongo from "./assets/movieAPI/mongoDB.png";
import apiPostman from "./assets/movieAPI/postman2.png";

//meet app
import meetHome from "./assets/meetApp/home.png";
import meetGraph from "./assets/meetApp/graph.png";
import meetChart from "./assets/meetApp/chart.png";

//phone chat app
import chatChat from "./assets/chatApp/chat.png";
import chatStart from "./assets/chatApp/start.png";

//pokedex
import pokedexHome from "./assets/pokedex/home.png";
import pokedexMankey from "./assets/pokedex/mankey.TheMonkeyPokemon.png";

export const data = [
  [
    {
      //angular
      id: 1,
      name: "MovieDB (Angular)",
      link: "https://github.com/MattGaughan2022/myFlix-Angular-client",
      img: angHome,
    },
    {
      id: 2,
      name: "MovieDB (Angular)",
      link: "https://github.com/MattGaughan2022/myFlix-Angular-client",
      img: angDetails,
    },
    {
      id: 3,
      name: "MovieDB (Angular)",
      link: "https://github.com/MattGaughan2022/myFlix-Angular-client",
      img: angLogin,
    },
    {
      id: 4,
      name: "MovieDB (Angular)",
      link: "https://github.com/MattGaughan2022/myFlix-Angular-client",
      img: angProf,
    },
    {
      id: 5,
      name: "MovieDB (Angular)",
      link: "https://github.com/MattGaughan2022/myFlix-Angular-client",
      img: angUpdate,
    },
  ],
  [
    {
      //react
      id: 1,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactHome,
    },
    {
      id: 2,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactFiltered,
    },
    {
      id: 3,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactDetails,
    },
    {
      id: 4,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactSignup,
    },
    {
      id: 5,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactProf,
    },
    {
      id: 6,
      name: "MovieDB (React)",
      link: "https://github.com/MattGaughan2022/client-movieApp",
      img: reactUpdate,
    },
  ],
  [
    {
      //api
      id: 1,
      name: "MovieDB (Node API)",
      link: "https://github.com/MattGaughan2022/nodeMovieAPI",
      img: apiHeroku,
    },
    {
      id: 2,
      name: "MovieDB (Node API)",
      link: "https://github.com/MattGaughan2022/nodeMovieAPI",
      img: apiMongo,
    },
    {
      id: 3,
      name: "MovieDB (Node API)",
      link: "https://github.com/MattGaughan2022/nodeMovieAPI",
      img: apiPostman,
    },
  ],
  [
    {
      //meet app
      id: 1,
      name: "Meet App (Google API)",
      link: "https://github.com/MattGaughan2022/meetApp",
      img: meetHome,
    },
    {
      id: 2,
      name: "Meet App (Google API)",
      link: "https://github.com/MattGaughan2022/meetApp",
      img: meetChart,
    },
    {
      id: 3,
      name: "Meet App (Google API)",
      link: "https://github.com/MattGaughan2022/meetApp",
      img: meetGraph,
    },
  ],
  [
    {
      //phone app
      id: 1,
      name: "Chat App (React Native)",
      link: "https://github.com/MattGaughan2022/chat-demo",
      img: chatStart,
    },
    {
      id: 2,
      name: "Chat App (React Native)",
      link: "https://github.com/MattGaughan2022/chat-demo",
      img: chatChat,
    },
  ],
  [
    {
      //simple pokedex
      id: 1,
      name: "Kanto Pokedex (JQuery)",
      link: "https://github.com/MattGaughan2022/pokedex",
      img: pokedexHome,
    },
    {
      id: 2,
      name: "Kanto Pokedex (JQuery)",
      link: "https://github.com/MattGaughan2022/pokedex",
      img: pokedexMankey,
    },
  ],
  // [
  //   {
  //     //query todo list
  //     id: 1,
  //     img: "blank",
  //   },
  //   {
  //     id: 2,
  //     img: "blank",
  //   },
  //   {
  //     id: 3,
  //     img: "blank",
  //   },
  //   {
  //     id: 4,
  //     img: "blank",
  //   },
  //   {
  //     id: 5,
  //     img: "blank",
  //   },
  // ],
];
