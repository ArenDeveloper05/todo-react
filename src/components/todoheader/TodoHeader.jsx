import React, { useEffect, useRef, useState } from 'react'
import './TodoHeader.scss'

const TodoHeader = ({setItems}) => {

  const [inputValue,setInputValue] = useState("");

  const onAddTodos = () =>{
    if(inputValue){
      setItems((prev) => 
    [
       ...prev,
       {
         id: prev.length!==0? prev[prev.length-1].id+1:"0",
         title: inputValue,
         isCompleted :false
       }
     ]
 );
  setInputValue("");
}  
};
const inputRef = useRef(null);

useEffect(()=>{

  if(!inputValue){
    inputRef.current.style.border = "5px solid red"
  }else{
    inputRef.current.style.border = "5px solid green"
  }

},[inputValue])


  return (
    
    <div className='todo-header'>
      <input type="text" ref={inputRef} className={'todo-header-input'} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e)=> e.keyCode===13 && inputValue?onAddTodos():undefined}/>
      <button className='todo-header-button' onClick={onAddTodos}>Add</button>
    </div>
  )
}

export default TodoHeader