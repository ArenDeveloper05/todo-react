import React, { useEffect } from 'react'
import './TodoBody.scss'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {MdOutlineDoneAll} from 'react-icons/md'
// import { isDocument } from '@testing-library/user-event/dist/utils'

const TodoBody = ({items,setItems}) => {

    const deleteItem = (id) => {
        
       setItems( ()=> items.filter((item) => item.id !== id))
    }
    const doneItem = (id) => {
        const currentItem = items.filter((todo)=>todo.id === id );
        const mayChanhge = Boolean(currentItem[0].isCompleted);

        if(!mayChanhge){
            setItems(items.map((item)=> {

            if(item.id === id ){
                return {
                        ...item,
                        isCompleted:true
                        } 
            }
            return item
            }))
        }
     }
    

    useEffect(()=>{
        console.log(items);
    },[items])

  return (
    <div className='todo-body'>
        {
            items.map((item) => {
                
                    return(
                    <div className="todos" key={item.id}>
                            <h1 className={item.isCompleted?"done":undefined}>{item.title}</h1>
                            {/* <p>{item.isCompleted?"todos-done done":"todos-done"}</p> */}
                            <RiDeleteBin6Line className='todos-delete' onClick={()=>deleteItem(item.id)}/>
                            <MdOutlineDoneAll className={"todos-done"} onClick={()=>doneItem(item.id) }/>
                    </div>
                    )
            })
        }
    </div>
  )
    }

export default TodoBody