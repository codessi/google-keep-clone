import { useState } from 'react';

import CreateArea from './components/CreateArea';
import Header from './components/Header';
import Note from './components/Note';
import './styles.css';

// create Header CreateArea Note components [x]
// jsx header creat area and notes [x]

function App() {

  const [notes, setNotes] = useState([    {title: "x",
  content:"x"}])



  const addNote = (note) => {
    setNotes(prevValue => {
      return [...prevValue, note]
    })
  }

  // in Note js?
  //handleDelete will
  // filter the notes by looking at the key 
  // and the index 
  const handleDelete = () => {
    
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addNote={addNote} />
      <div className="card-container">
        {notes.map((note, index) => {
          const {title, content} = note
          return (
            <Note key={index} title={title} content={content} handleDelete={handleDelete} />
          )
        } )}
      </div>
      
    </div>
  );
}

export default App;
