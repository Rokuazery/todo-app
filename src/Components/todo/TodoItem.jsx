import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TodoItem = ({index, task, deleteTodo, editTodo}) => {
  return (
    <div className='bg-gray-100 rounded-md p-3 flex justify-between items-center'>
    <p className='text-sm'>{task.task}</p>
    <div className='space-x-3'>
      <FontAwesomeIcon className='text-gray-600 hover:text-black transition-all' icon={faEdit} onClick={() => editTodo(task.id)}></FontAwesomeIcon>
      <FontAwesomeIcon className='text-gray-600 hover:text-black transition-all' icon={faTrash} onClick={() => deleteTodo(task.id)}></FontAwesomeIcon>
    </div>
  </div>
  )
}

export default TodoItem
