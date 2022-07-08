import { useState } from 'react';

import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import './styles.css';

// trash log instead of X
// x can be closer to bottom []
// create area height is too high []
// only add when there is content inside []

// full stack?
// store title and content 
// read
// delete
// copy from what's for dinner

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (note) => {
    setNotes(prevValue => {
      return [...prevValue, note]
    })
  }

  const handleDelete = (index) => {
    let newNotes = notes.filter((el, i )=> i !== index)
    setNotes(newNotes)
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      <div className="card-container">
        {notes.map((note, index) => {
          const {title, content} = note
          return (
            <Note key={index} id={index} title={title} content={content} handleDelete={handleDelete} />
          )
        } )}
      </div>
      
    </div>
  );
}

export default App;
