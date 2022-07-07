import * as actions from "./actionTypes";
import { createAction } from '@reduxjs/toolkit';

const buggUpdated = createAction("bugUpdated");

console.log(buggUpdated.type);

export function bugAdded(description) {
  return {
    type: actions.BUG_ADDED,
    payload: {
      description: description,
    },
  };
}

export function bugRemoved() {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}

//This is by FAT Arrow function . If we are using fat arrow function we do not need to returen the function


export const bugResolved = id =>({
    type:actions.BUG_RESOLVED,
    payload:{
        id:id
    }
})
