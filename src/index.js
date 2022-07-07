import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import store from "./components/CustomStore";
import * as actions from "./components/store/actionTypes";
import { bugAdded, bugRemoved,bugResolved } from "./components/store/action";
import store from "./components/store/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(store.getState()

// This is the Things getting By Redux Tooolkit

store.subscribe(()=>{
  console.log('Store Changed !')
});
store.dispatch(bugAdded({description:'Bug1'}));
store.dispatch(bugAdded({description:'Bug 2'}));
store.dispatch(bugAdded({description:'Bug 3'}));
store.dispatch(bugResolved({id:1}));
console.log(store.getState());


//This is the things Getting by Redux Core
//This is the Store that was created by Custom code
// store.dispatch(bugAdded('Bug  One'));
// store.subscribe(()=>{
//   console.log('Store Changed !')
// });

// store.dispatch(bugAdded('Bug 1'));
// store.dispatch(bugAdded('Bug 2'));
// store.dispatch(bugAdded('Bug 3'));
// store.dispatch(bugResolved(1));
// console.log(store.getState());

//This the Store getting from Redux 


// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed", store.getState());
// });
// store.dispatch(bugAdded("Bug 3"));
// store.dispatch(bugResolved(1));
// store.dispatch(bugRemoved(1));
// console.log(store.getState())
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
