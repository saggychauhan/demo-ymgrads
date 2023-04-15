import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContentList from './components/ContentList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Aboutus from './components/Aboutus';
import AddContents from './components/AddContent';


function App() {

  let initList;
    if (localStorage.getItem("content")===null)
    {
      initList=[];
    }
    else{
      initList=JSON.parse(localStorage.getItem("content"));
    }
    const[status,setStatus]=React.useState(false)
      const addcontents=(tittle,description)=>{
        console.log("add fun is calling",tittle,description);
        let sno;
          if(content.length===0)
          {
            sno=1;
          }
          else{
            sno=content[content.length-1].sno+1;
          }
    const obj={
      sno: sno,
      tittle:tittle,
      description:description
    }
    setContent([...content,obj]);
    localStorage.setItem("content",JSON.stringify(content));

  }

  const onDelete=(akki)=>{
    console.log("your fn is working",akki);
    // let index=content.indexOf(akki)
    // alert (index)
    // content.splice(index,1)
    // console.log(content)
    setContent(
    content.filter((e)=>{
      return e!==akki;
    }));
    localStorage.setItem("content",JSON.stringify(content));
  }
const[content,setContent]=useState(initList);

  useEffect(() => {
   localStorage.setItem("content",JSON.stringify(content)); 
  },[content])
    

  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
            <ContentList content={content} onDelete={onDelete}/>
            <AddContents AddContents={addcontents}/>
          </>   
        }
        /> 
        <Route path='/about' element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
