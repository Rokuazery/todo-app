import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e =>
    {
        e.preventDefault();
        addTodo(value);
        
        setValue("");
    }
  return (
    <form className='flex gap-3 h-fit min-w-36 w-full' onSubmit={handleSubmit}>
      <input type='text' className='border-2 rounded-md outline-none border-blue-200  hover:border-blue-500 px-2 w-full text-sm' placeholder='Add a task...' value={value} onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='text-sm bg-blue-600 text-white p-2 rounded-md w-fit text-nowrap'>Add <FontAwesomeIcon icon={faPlus}/></button>
    </form>
  )
}

export default TodoForm
