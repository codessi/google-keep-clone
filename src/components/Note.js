import React from 'react'

const Note = ({title, content, handleDelete}) => {
// bring title and content from App

  return (
  
      <div className='card'>
        <h3>{title}</h3>
        <p>{content} </p>
        <button className='delete-btn' onClick={handleDelete}>x</button>
      </div>
  )
}

export default Note