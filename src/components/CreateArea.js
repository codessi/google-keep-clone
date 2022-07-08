import React, { useRef, useState, useEffect } from "react";

const CreateArea = ({addNote}) => {
  const [inputOpen, setInputOpen] = useState(false);
  const ref = useRef();

  const [note, setNote] = useState({
    title: "",
    content:""
  })


  useEffect(() => {
    const checkIfClickedOuside = (e) => {
      if (inputOpen && ref.current && !ref.current.contains(e.target)) {
        setInputOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOuside);

    return () => {
      document.removeEventListener("click", checkIfClickedOuside);
    };
  }, [inputOpen]);

  const handleChange = (e) => {
    
    const { name, value } = e.target
    
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]:value
      }
    })
    
  }
//make handleSubmit [x]

  // deconst. the addNote function [x]
  // insert in handlesubmit passing the note here []
  // reset the note []


  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note)
    setNote({
      title: "",
      content:""
    })
  }


  return (
    <div className="center-container">
      <div ref={ref} className="create-area">
        <form action="" onSubmit={handleSubmit}>
          <input
            className={inputOpen ? "input-area" : "display-none"}
            value={note.title}
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
          <textarea
            onClick={() => setInputOpen(true)}
            value={note.content}
            className="text-area"
            name="content" rows="1"
            placeholder="Take a note..."
            id=""
            onChange={handleChange}
          ></textarea>
        
          <button className ="add-btn" type="submit" >+</button>
        </form>
      </div>
    </div>
  );
};

export default CreateArea;
