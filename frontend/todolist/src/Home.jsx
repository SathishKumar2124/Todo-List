import React, { useEffect, useState } from 'react'
import Create from './Create'
import './App.css'
import axios from 'axios'


const Home = () => {
    const [todos,setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
        
    },[])
    const handleEdit = (id) =>{
        axios.put('http://localhost:3000/update/'+id)
        .then( result => {
            location.reload()
        }) 
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/delete/'+id) 
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='home'>
        <h2>Todo List</h2>
        <Create />
        {
            todos.length === 0 ? 
            <div><h1>No Record</h1></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                    <input type="checkbox" checked={todo.done?"checked":""} />
                    </div>
                    <p className={todo.done ? "line" : ""}>{todo.task}</p>
                    <div>
                        <button type="button" className='del-btn' onClick={()=>handleDelete(todo._id)} >X</button>
                    </div>
                </div>
            ))
           
        }
    </div>
  )
}

export default Home