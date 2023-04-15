import React, { useState } from "react"
export default function AddContents(props)
{
    const[tittle,setTittle]=useState("");
    const[description,setDecription]= useState("");
    
    const submit=(event)=>{
      event.preventDefault();
      if(!tittle || !description){
        alert("tittle or description cant be empty");
      }
      else
      props.AddContents(tittle,description);
      setTittle("");
      setDecription("");
    }
    return(
<>
<form onSubmit={submit}>
<div className="mb-3">
  <label htmlfor="tittle" className="form-label">Tittle</label>
  <input type="text" value={tittle} onChange={(event)=>{setTittle(event.target.value)}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your titttle"/>
</div>
<div className="mb-3">
  <textarea value={description} placeholder="Write your description here" className="form-control" id="exampleFormControlTextarea1" onChange={(event)=>{setDecription(event.target.value)}} rows="3"></textarea>
</div>
<div>
  <button type="submit" className="btn btn-primary subbtn"> Submit</button>
</div>
</form>
</>
    )
}