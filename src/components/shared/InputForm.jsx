import React from 'react'

const InputForm = (props) => {
  return (
    <div className='inputForm'>
        <label htmlFor={props.valor}>{props.name}</label>
        <input type="text" name={props.valor} id={props.valor} {...props}  />
    </div>
  )
}

export default InputForm 