import { faArrowUpFromGroundWater, faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const EditTodoForm = ({editTodo, cancelEditingTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e =>
    {
        e.preventDefault();
        
        editTodo(value, task.id);
        
        setValue("");
    }

  return (
    <form className='space-y-2 h-fit min-w-36 w-full p-2 bg-gray-100 rounded-md' onSubmit={handleSubmit}>
      <p className='font-semibold'>Original: <span className='font-normal text-gray-600'>{task.task}</span></p>
      <div className='flex w-full gap-3 text-ellipsis text-nowrap whitespace-nowrap'>
      <input type='text' className='border-2 rounded-md outline-none border-blue-200  hover:border-blue-500 px-2 w-full text-sm' placeholder='Update task...' value={value} onChange={(e) => setValue(e.target.value)} />
      <div className='flex gap-2'>
        <button type='submit' className='text-sm bg-blue-600 text-white p-2 rounded-md w-fit text-nowrap'>Update <FontAwesomeIcon icon={faArrowUpFromGroundWater}/></button>
        <button type='button' className='text-sm bg-red-500 text-white p-2 rounded-md w-fit text-nowrap' onClick={() => cancelEditingTodo(task.id)}>Cancel <FontAwesomeIcon icon={faCancel}/></button>
      </div>
      </div>
    </form>
  )
}

export default EditTodoForm
