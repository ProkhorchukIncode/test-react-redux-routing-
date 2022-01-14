import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'main',
  initialState: { 
      loading: 'idle' 
    },
  reducers: {
      loading: (state) => {
          state.loading = 'check'
      },
      noLoading: (state) => {
        state.loading = 'idle'
    }
  },
})

export const {loading, noLoading} = loadingSlice.actions

export default loadingSlice.reducer