import { useState } from "react";
import NoteContext from "./noteContext";
// import { useState } from "react";
const NoteState=(props)=>{
    const notesInitial=[
        {
          "_id": "6584bbc1fad9d9bc86b0b30b",
          "user": "65831931568109fdc40b638b",
          "title": "Morning Routine",
          "description": "Brush and bathe",
          "tag": "personal",
          "date": "2023-12-21T22:27:13.377Z",
          "__v": 0
        },
        {
          "_id": "6584bbf8be63120f238273cb",
          "user": "65831931568109fdc40b638b",
          "title": "Morning Routine",
          "description": "Brush and bathe",
          "tag": "personal",
          "date": "2023-12-21T22:28:08.604Z",
          "__v": 0
        },
        {
          "_id": "6584bc3c70da82dcb3d5728c",
          "user": "65831931568109fdc40b638b",
          "title": "Morning Routine updated",
          "description": "Brush and bathe updated",
          "tag": "personal",
          "date": "2023-12-21T22:29:16.748Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
return(
    <NoteContext.Provider value={{notes,setNotes}}>
       {props.children}
    </NoteContext.Provider>
)
}
export default NoteState