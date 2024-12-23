import React from 'react'

const Button = ({children, onclick}) => {
  return (

    <button className="text-center border border-gray-600 rounded-lg text-gray-600 text-base sm:text-lg px-3 sm:px-4 py-2 cursor-pointer hover:bg-gray-600 hover:text-white transition duration-200 active:bg-white active:text-gray-600"
            onClick={onclick}
    
    >
        {children}
    </button>

  )
}

export default Button