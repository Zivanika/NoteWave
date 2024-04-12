import React,{useContext,useState} from 'react'
import noteContext from "../context/notes/noteContext"
const QuickNote = () => {
    const context=useContext(noteContext);
    const{addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:""})
    
      const handleQN1 = ()=>{
      addNote("Instagram Story","Design an Instagram story","Personal")
      // setNote({title:"Instagram Story",description:"Design an Instagram story",tag:"Personal"})
      
    }
    const handleQN2 = ()=>{
      addNote("Shopping List","Item 1: __","General")
      // setNote({title:"",description:"",tag:"General"})

    }
  return (
    <div><div className="py-3 px-4 mx-2 space-y-3  bg-[#f8ecd4] w-72 h-[9.2rem] rounded-xl relative">
    <div className='flex items-center'><i class="fa-solid fa-thumbtack text-green-700 rotate-45"></i><h1 className='ml-3 font-bold font-serif'>Quick Notes</h1></div>
      <div className='w-full p-2 bg-[#ece4bc] text-sm font-semibold rounded-md cursor-pointer mx-auto' onClick={handleQN1}><p className='mx-2'>Design an Instagram story</p></div>
      <div className='w-full p-2 bg-[#ece4bc] text-sm  font-semibold rounded-md cursor-pointer mx-auto' onClick={handleQN2}><p className='mx-2'>Create a shopping list</p></div>
    </div>
    </div>
  )
}

export default QuickNote