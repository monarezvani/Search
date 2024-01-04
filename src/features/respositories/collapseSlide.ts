// src/features/collapse/collapseSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollapseState {
  collapsedUsers: string[]; // store user logins that are collapsed
}

const initialState: CollapseState = {
  collapsedUsers: [],
};

const collapseSlice = createSlice({
  name: 'collapse',
  initialState,
  reducers: {
    toggleCollapse: (state, action: PayloadAction<string>) => {
      const userLogin = action.payload;
      const index = state.collapsedUsers.indexOf(userLogin);
      if (index === -1) {
        // User is not collapsed, add to collapsedUsers
        state.collapsedUsers.push(userLogin);
      } else {
        // User is collapsed, remove from collapsedUsers
        state.collapsedUsers.splice(index, 1);
      }
    },
  },
});

export const { toggleCollapse } = collapseSlice.actions;
export const selectCollapsedUsers = (state: any) => state.collapse.collapsedUsers;

export default collapseSlice.reducer;
