import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3000/add',{task:task})
        .then(result => {location.reload()})
        .catch(err => console.log(err))
    }
  return (
    <div>
        <input type="text" placeholder='Enter Task' className='create-form' onChange={(e) => setTask(e.target.value)}/>
        <button type="button" onClick={handleAdd} className='create-btn'>Add</button>
    </div>
  )
}

export default Create