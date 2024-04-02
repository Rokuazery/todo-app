import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TodoItem = ({index, task, deleteTodo, editTodo, toggleTodo}) => {
  return (
    <div className='bg-gray-100 rounded-md p-3 flex justify-between items-center cursor-pointer  hover:bg-gray-200 hover:text-lg transition-all text-sm relative duration-[350ms]' onClick={() => toggleTodo(task.id)}>

      <div className={(task.completed ? 'bg-green-400': 'bg-yellow-400') + ' px-[2px] h-full w-fit absolute left-0'}></div>
      <p className='ml-[2px]'>{task.task}</p>
      <div className='space-x-3'>
        <FontAwesomeIcon className='text-gray-600 hover:text-black transition-all ease-in-out bg-white shadow-sm rounded-md p-2 text-sm' icon={faEdit} onClick={(e) => {e.stopPropagation(); editTodo(task.id)}}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-gray-600 hover:text-black transition-all ease-in-out bg-white shadow-sm rounded-md p-2 text-sm' icon={faTrash} onClick={(e) => {e.stopPropagation(); deleteTodo(task.id);}}></FontAwesomeIcon>
      </div>
  </div>
  )
}

export default TodoItem
