import React, {useState} from 'react';
import './CreateNote.css';

const CreateNote = ( props ) => {
  const [note,setNote] = useState({
    title:'',
    content:''
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote ((prevData) =>
     {return{
       ...prevData,
       [name]:value
      }
     })
  }

  const AddNote = () => {
    props.passNote(note);
    setNote(
      {
        title: '',
        content: ''
      }
    )
  }

  return (
    <div className='content'>
      <div className='create-card'>
        <div className='title'>
          <input type='text' name='title' value={note.title} onChange={InputEvent} placeholder='Create a Note' />
        </div>
        <div className='content'>        
          <input type='text-area' name='content' value={note.content} onChange={InputEvent} placeholder='Enter Note Details' />
        </div>
          <button className='btn' onClick={AddNote}>  + </button>
      </div>
    </div>
  )
}

export default CreateNote;