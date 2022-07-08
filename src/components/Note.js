import React from 'react'
// import trash from  './../trash-solid.svg'

const Note = ({title, content, id,handleDelete}) => {
// flex shrink should be off 
  // it should wrap


  return (
  
      <div className='card'>
        <h3>{title}</h3>
        <p>{content} </p>
      <button className='delete-btn' onClick={() => handleDelete(id)}><img src="/trash-solid.svg" alt="" /></button>
      
      </div>
  )
}

export default Note