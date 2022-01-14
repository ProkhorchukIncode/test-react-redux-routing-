import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'main',
  initialState: { loading: 'idle' },
  reducers: {
      loading: (state) => {
          state = 1
      }
  },
})

export default loadingSlice.reducer