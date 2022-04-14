import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import Note from './components/Note';
import Footer from './components/Footer';

const App = ( ) => {

  const [notes,setNotes] = useState([]);

  const AddNote = (note) => {
    setNotes((prevData) => { return [...prevData, note] })
  }

  const onDelete = (id) => {
    setNotes((oldData)=>oldData.filter((currdata,index)=>{
     return index!==id;
    }));
  };
  
  return (
    <div className="App">
     <Header />
     <CreateNote passNote = {AddNote} />
     {
        notes.map((note,index)=>{
        return  <Note 
           key={index}
           id={index}
           title={note.title}
           content={note.content}
           deleteNote={onDelete}
            />
        })
     }
     <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
