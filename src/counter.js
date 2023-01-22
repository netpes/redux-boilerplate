import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

// The Counter component is a functional component that uses the hooks useSelector and useDispatch 
// from the react-redux library. 
export function Counter() {
  // useSelector hook is used to access the value of the state 'counter' and its value property.
  const count = useSelector((state) => state.counter.value)
  // useDispatch hook is used to dispatch actions to the store.
  const dispatch = useDispatch()

 return (
   <div>
     <div>
       {/* button to increment the value of count */}
       <button
         aria-label="Increment value"
         onClick={() => dispatch(increment())}
       >
         Increment
       </button>
       {/* displaying the current count */}
       <span>{count}</span>
       {/* button to decrement the value of count */}
       <button
         aria-label="Decrement value"
         onClick={() => dispatch(decrement())}
       >
         Decrement
       </button>
     </div>
   </div>
 )
}
