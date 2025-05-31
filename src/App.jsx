import React, { useState } from 'react'
import icon from "./assets/icon.png"
import "./App.css"

const App = () => {
      
     const[todos,setTodos]=useState([])
     const[input,setInput]=useState("")
     const[edit ,setEdit]=useState(null)
     const[ update,setUpdate]=useState("")
      
     const addTodos=()=>{
      if(input.trim() === ""){
        alert ("Add your ToDo...")
      }else{
       setTodos([...todos,{id:Date.now(),text:input,completed:false}]);
       setInput("");
      }};

      const handleEdit = (id,curText)=>{
        setEdit(id);
        setUpdate(curText)
      };

      const handleUpdate= ()=>{
        if(update.trim() === "") return
       const textValue=todos.map(todo=>(
           todo.id === edit ?
           {...todo,text:update,completed:false}:todo
       ))
       setTodos(textValue)
       setEdit(null)
       setUpdate("")
      };

      const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>
          todo.id !== id ))
      };
      
      return (
    <div className=' min-h-screen flex justify-center  bg-gradient-to-r from-pink-400 to-red-100 items-center flex-col '>
      <div className="card w-[41rem] bg-amber-50 flex flex-col items-center rounded-3xl my-10 py-5 px-20 ">
         <div className=" my-5 ">
          <h1 className='title text-[50px] flex items-center gap-5 font-semibold font-sans'>
            Your To Do List <img className='icon size-15' src={icon} alt="" /> </h1>
         </div>
         <div className="top my-10 flex justify-center">
          <input type="text" value={input}
          onChange={e=>setInput(e.target.value)} 
          placeholder=" Add Your ToDo's..." 
          className=' text-2xl focus:outline-blue-500 flex-grow-1
           border-1 border-black-500 p-4 rounded-l-xl  '/>
          <button onClick={addTodos} className='text-amber-50 font-bold bg-blue-600 py-4 px-6 rounded-r-xl hover:bg-blue-800 '>Add</button>
         </div>
         <div className="bottom flex justify-center ">
          <ul className=''>
            { todos.map((todo)=> (
            <li key={todo.id} >
               {
                edit === todo.id ? (
                  <div className='up-date flex flex-row gap-3 my-5 justify-center'>
                  <input className='focus:outline-blue-500 p-3 text-2xl font-normal flex-grow truncate w-[300px]  rounded-2xl' 
                   value={update}
                   onChange={e=>setUpdate(e.target.value)}/>
                  <button
                    className="but-1 bg-blue-600 px-3 hover:bg-blue-900 rounded-3xl text-white focus:outline-neutral-100 border-amber-100"
                    onClick={handleUpdate}>save
                  </button>
                  <button
                     className='but-2 bg-red-600 px-3 rounded-3xl text-white hover:bg-red-800' 
                     onClick={()=>setEdit(null)}>cancel
                  </button>
                  </div>
                  ) : (
                    <div className='bottom flex gap-4 py-3 px-6 items-center border-1 border-blue-100  hover:bg-pink-50 my-2 bg-amber-50 rounded-3xl'>
                      <input type="checkbox"
                       checked={todo.completed}
                       onChange={
                        ()=>setTodos(todos.map((t=>(
                          t.id===todo.id ? {...todo,completed:!t.completed}:t
                        ))))
                       }
                       className='mt-2 mr-1 accent-blue-400' />
                      <span 
                       className={`text-2xl font-normal flex-grow truncate w-[300px] ${todo.completed ? "line-through text-gray-400" : "text-black-200"}`}>
                       {todo.text}
                      </span>
                      <button onClick={()=>handleEdit(todo.id,todo.text)}
                       className='bg-green-400 hover:bg-green-700 p-2 rounded-3xl'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                      </button>
                      <button onClick={()=>deleteTodo(todo.id)}
                       className='bg-red-600 rounded-3xl hover:bg-red-800 p-1.5'>
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                      </button>
  
                    </div>
                  )
               } </li>
            ))}
            
          </ul>
         </div>
      </div>
    </div>
  )
}

export default App
