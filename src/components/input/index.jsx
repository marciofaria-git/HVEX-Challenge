import {InputForm} from './styled'
import React,{ forwardRef } from 'react'


const Input = forwardRef((props, ref) => {
    
    return <InputForm {...props} ref={ref} />
  });

  export default Input;