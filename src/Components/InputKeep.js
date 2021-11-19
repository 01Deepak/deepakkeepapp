import React,{useState} from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ShowKeep from './ShowKeep';

const InputKeep = (props) => {
   
  const [data,setData]=useState({
    inputTitle:"",
    inputNotes:"",
  });

  const OnChangeFunction=(event)=>{
    const{name,value}=event.target;
    setData((previousData)=>{
      return {
        ...previousData,
        [name]:value,
      }
    }); 
    
  }

  const AddOnClick=()=>{
    props.PassNote(data);
    setData( {
      inputTitle:"",
    inputNotes:"",
    })
  }


  return (
    <>
      <div className="row m-0">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 mt-4">

          <form style={{ border: "4px solid green", borderRadius: "10px" }} className="p-4 text-center">
            <div className="row mb-3">
              <label htmlFor="inputTitle" className="col-sm-2 col-form-label">Title</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputTitle" name="inputTitle" onChange={OnChangeFunction} value={data.inputTitle}/>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputNotes" className="col-sm-2 col-form-label">Notes</label>
              <div className="col-sm-10">
                <textarea className="form-control" id="inputNotes" name="inputNotes" rows="3" onChange={OnChangeFunction} value={data.inputNotes}></textarea>
              </div>
            </div>


            <Button onClick={AddOnClick} variant="contained" color="primary"><AddIcon /></Button>
          </form>

        </div>
        <div className="col-sm-4"></div>

      </div>

      {/* <div className="row m-0">
        <div className="col-sm-3">
          <ShowKeep title={data.inputTitle} notes={data.inputNotes}/>
        </div>
      </div> */}
    </>
  )
}

export default InputKeep;
