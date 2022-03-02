import {InputForm} from './styled'
import React,{ forwardRef } from 'react'


const Input = (props, ref) => (
   <InputForm {...props} ref={ref} />
  
)
    
  

  export default forwardRef(Input);