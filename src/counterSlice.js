import { createSlice } from '@reduxjs/toolkit'

// Create a slice of the store for the counter feature using the createSlice() method from the '@reduxjs/toolkit' library.
export const counterSlice = createSlice({
 name: 'counter',
 // initial state of the store slice 
 initialState: {
   value: 0,
 },
 // define the reducers that will handle different actions
 reducers: {
   //increment the value of the store slice by 1
   increment: (state) => {
     state.value += 1
   },
   //decrement the value of the store slice by 1
   decrement: (state) => {
     state.value -= 1
   },
   //increment the value of the store slice by a given amount
   incrementByAmount: (state, action) => {
     state.value += action.payload
   },
 },
})

// export the action creators that can be used to update the state
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export the reducer that handle the state updates
export default counterSlice.reducer
