import React from 'react'
import ContentItem from './ContentItem'

export default function ContentList(props) {
  return (
    <>
    <div className='content'>
      {props.content.length===0?"ADD YOUR CARDS BY FILLING DETAILS BELOW":props.content.map((element)=>
    {
      
      return <ContentItem key={element.sno} content={element} onDelete={props.onDelete}/>
      
    })}
    
  </div>
  </>

  )
}
