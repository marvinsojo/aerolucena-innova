import React from 'react'

const Button = ({buttonName}) => {
  return (
    <button className=" bg-carmine p-3 rounded-full hover:bg-red-500">{buttonName}</button>
  )
}

export default Button