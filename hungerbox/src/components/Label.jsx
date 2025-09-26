import React from 'react'

const Label = ({label, size}) => {
  return (
    <p className={`text-gray-500 text-${size} dark:text-gray-400`}>{label}</p>
  )
}

export default Label