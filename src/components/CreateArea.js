import React, { useRef, useState, useEffect } from "react";
// title margin.5 top & left
//content margin .5
// no border
//

const CreateArea = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const ref = useRef();

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
  console.log(ref);
  return (
    <div className="center-container">
      <div ref={ref} className="create-area">
        <form action="">
          <input
            className={inputOpen ? "input-area" : "display-none"}
            type="text"
            name="title"
            placeholder="Title"
          />
          <textarea
            onClick={() => setInputOpen(true)}
            className="text-area"
            name="content"
            placeholder="Take a note..."
            id=""
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default CreateArea;
