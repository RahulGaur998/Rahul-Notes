import React from 'react'
import './Note.css';

const Note = (props) => {

  const deleteItem = () =>{
    props.deleteNote(props.id);
  }
 

  return (
    <div className='cards'>
      <div className='card'>
        <div className='title'>  {props.title} </div>
        <div className='content'>{props.content} </div>
        <button className='btn' onClick={deleteItem}> - </button>
      </div>
    </div>
  )
}

export default Note