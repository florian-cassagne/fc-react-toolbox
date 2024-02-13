import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  name: "",
  isOpen: false,
  item: null
}

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
    setContent: (state, action) => {
      state.item = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },

  }
});

export const ViewerType = {
  EXPERIENCE: 0,
  PROJECT: 1,
}

export const {setIsOpen, setContent, setName} = viewerSlice.actions;

export const selectViewer = (state) => state.viewer;

export default viewerSlice.reducer;