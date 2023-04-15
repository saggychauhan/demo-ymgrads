import React from 'react'
let mystyle={
  color:'red',
  backgroundColor:'green'
}
export default function ContentItem(props) {
  return (
    <>
    <div className='card'>
      <h5 className="card-title">{props.content.sno}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.content.tittle}</h6>
    <p className="card-text">{props.content.description}</p>
    <p style={mystyle}> history</p>
    

    <button className='btn btn-danger' onClick={()=>{ props.onDelete(props.content)}}>delete</button>
    </div>
    
      
      
    </>
  )
}
