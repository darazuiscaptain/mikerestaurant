import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  error: null,
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ------------------ Login ----------------
    signInStart: (state) => {
      state.loading = true
      state.error = null
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = null
    },
    signInFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    // ------------------ SignUp ----------------
    signUpSuccess: (state, action) => {
      state.currentUser = action.payload
      state.loading = false
      state.error = null
    },
    signUpFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    // ------------------ Logout ----------------
    logoutStart: (state) => {
      state.loading = true
      state.error = null
    },
    logoutSuccess: (state) => {
      state.currentUser = null
      state.loading = false
      state.error = null
    },
    logoutFailure: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  signInFailure, 
  signInStart, 
  signInSuccess, 
  signUpFailure, 
  signUpSuccess, 
  logoutFailure, 
  logoutStart, 
  logoutSuccess 
} = authSlice.actions

export default authSlice.reducer