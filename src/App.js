import React,{useState} from "react";
import InputKeep from "./Components/InputKeep";
import Navbar from "./Components/Navbar";
import ShowKeep from "./Components/ShowKeep";


function App() {
  const[keepdata,setKeepData]=useState([]);

const AddNoteInApp=(data)=>{

  setKeepData((previous)=>{
    return [...previous,data]
  })
 
}

const DeleteFunction=(id)=>{
  //  alert("deleted");
  //  alert(id);
  setKeepData((previous)=>{
    return previous.filter((arrayItem,index)=>{
      return index!==id;
    })
  })
}

  return (
    <>
   <Navbar/>
   <InputKeep PassNote={AddNoteInApp}/>
   <div className="row m-0">
   {keepdata.map((val,index)=>{
    return ( <div className="col-sm-3">
    <ShowKeep key={index} id={index} title={val.inputTitle} notes={val.inputNotes} onDelete={DeleteFunction}/>
         </div>)
  })}
   
   </div>
  
   </>

  );
}

export default App;
