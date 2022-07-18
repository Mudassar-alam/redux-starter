import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import Reducer from "./reducer";
// import Reducer from './Bugs'
// import Reducer from './Projects'
import Reducer from './CombineReducer'

import { devToolsEnhancer } from "redux-devtools-extension";


const store = createStore(Reducer,devToolsEnhancer({trace:true}))

export default store;

// export default function(){
//   return configureStore({
//     Reducer,
//   });
// }
