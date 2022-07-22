import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
 initialState: [],
  reducers: {
    bugAssignedToUser:(bugs,action)=>{
      const {bugId, userID } = action.payload;
      const index = bugs.findIndex(bug =>  bug.id === bugId);
      bugs[index].userID = userID ; 



    },
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});
console.log(slice)
export default slice.reducer;
export const { bugAdded, bugResolved , bugAssignedToUser } = slice.actions;
