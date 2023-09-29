import React from 'react'
import { useSnapshot } from 'valtio';

import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  const newState = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === 'filled') {
      return {
        backgroundColor: newState.color,
        color: getContrastingColor(newState.color)
      }
    } else if (type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: newState.color,
        color: newState.color
      }
    }
  }
  return (
    <button
      className={`px-5 py-2 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton