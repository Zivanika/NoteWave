import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault(); //so that the page wont refresh or reload
    if (note.tag === "") {
      note.tag = "General";
    }
    if (note.title === "") {
      note.title = "No Title...";
    }

    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex">
     
      <div className="container py-6 px-2 mx-2 my-3 bg-[#f8ecd4] w-[17rem] h-[23.2rem] rounded-xl">
        <div className="flex items-center ml-2"><AddCircleOutlineIcon style={{color:"green"}}/><h1 className="ml-2 font-bold  font-serif">New Note</h1></div>
        <form className=" flex flex-col justify-center">
          <div className=" flex justify-center">
            <input
              type="text"
              placeholder="Title "
              className="b-border mb-1 text-xl  text-start"
              id="title"
              value={note.title}
              name="title"
              onChange={onChange}
            />
            {/* <div id="emailHelp" className="form-text">W.</div> */}
          </div>
          <div className=" flex justify-center">
            <input
              type="text"
              placeholder="Tag"
              className=" b-border mb-1 text-xl text-start"
              name="tag"
              value={note.tag}
              id="tag"
              onChange={onChange}
            />
          </div>
          <div className="mb-1 flex justify-center">
            <div class="page">
              <div class="page-horizontal-lines"></div>
              <div class="page-horizontal-lines"></div>
              <div class="page-horizontal-lines"></div>
              <div class="page-horizontal-lines"></div>

              <textarea
                placeholder="Description"
                class="text-box"
                name="description" value={note.description}  id="description" onChange={onChange}
                contenteditable="true"
              ></textarea>
            </div>
            {/* <textarea rows={3} className="b-border text-xl"  placeholder="Description" name="description" value={note.description}  id="description" onChange={onChange}></textarea> */}
          </div>
          <button
            type="submit"
            className="shadow-xl w-56 h-10 -mx-2 text-center self-center text-white font-semibold bg-orange-500 rounded-lg"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
      {/* <div className="w-[17rem] h-[23.2rem]">
      <img  className="w-[17rem] h-[23.2rem]" src="https://img.freepik.com/free-vector/isolated-tree-white_1308-50012.jpg?t=st=1711712458~exp=1711716058~hmac=1f5971163dfa98d30ebc188774ea1a31e29ae1e82a559c4c605fee126259e6d2&w=740"/>
      </div> */}
    </div>
  );
};

export default AddNote;
