import React from 'react'

const Button = ({ label, onClick, color = "blue" }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none";
  const colorStyles = {
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    alternative: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  
  return (
    <button
      className={`${baseStyles} ${colorStyles[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button