import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from 'store/reduxState'


export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<any>) => {
      state.userInfo = action.payload
      return state
    },
  },
})

export const { addUserInfo } = userInfo.actions

export default userInfo
