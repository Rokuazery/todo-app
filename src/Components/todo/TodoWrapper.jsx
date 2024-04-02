import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faTasksAlt } from '@fortawesome/free-solid-svg-icons';
import EditTodoForm from './EditTodoForm';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // this just to avoid the security risk warning
  const openGithubInNewTab = (e) => {
    e.preventDefault();
    const url = 'https://github.com/Rokuazery';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    console.log('loading data');
    setLoaded(true);
  }, []);
  
  useEffect(() => {
    if (loaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log('saving data');
    }
  }, [todos, loaded]);
  

  const addTodo = todo => {
    if(todo.length === 0)
    {
      alert("Todo task cannot be empty!");
      return;
    }
      
    setTodos([...todos, {
      id: uuidv4(), 
      task: todo, 
      completed: false, 
      isEditing: false}])
  };

  const deleteTodo = id =>  setTodos(todos.filter((todo) => todo.id !== id));
  const editTodo = id => setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
  const cancelEditingTodo = e => editTodo(e);

  const editTask = (task, id) => {
    if(task.length === 0)
    {
      alert("Todo task cannot be empty!");
      return;
    }

    setTodos(todos.map((todo) => todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo));
  };

  const toggleTodo = id => {
    console.log('toggled');
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  return (
    <div className='p-5 bg-white shadow-md rounded-md relative w-3/6 min-w-96 flex flex-col gap-5 max-h-[calc(100dvh-6rem)] min-h-[calc(100dvh-6rem)] border-2 border-blue-300 justify-between'>

      <header className='w-fit flex items-center gap-2'>
       <div className='space-y-1'>
        <h1 className='font-semibold'>Todo-App</h1>
        <div className='border-t-2 border-blue-500'></div>
      </div> 
        <FontAwesomeIcon icon={faTasksAlt}></FontAwesomeIcon>
      </header>

      <div className='flex flex-col space-y-5 flex-1 overflow-y-hidden'>
        <TodoForm addTodo={addTodo}/>
        <div className='overflow-y-auto overflow-x-hidden max-h-full flex-1'>
        {todos.length === 0 ? (
        <p className='absolute w-fit h-fit left-0 right-0 m-auto top-0 bottom-0 text-gray-700 p-2 rounded-md bg-red-100 text-centertext-sm shadow-md'>Looks like you haven't added any tasks yet! <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon></p>
        ) : (
              <div className='max-h-full flex flex-col gap-4 overflow-y-scroll mb-5'>
              {todos.map((todo, i) => (
                todo.isEditing ?
                (
                  <EditTodoForm key={i} editTodo={editTask} task={todo} cancelEditingTodo={cancelEditingTodo}/>
                ) : (
                  <TodoItem key={i} index={i} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo}></TodoItem>
                )
              ))}
            </div>
        )}
        </div>
      </div>
      

      <div className='flex justify-center flex-col items-center'>
        <hr className='w-full mb-2'></hr>
        <p><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Visit my Github page <a className='text-blue-600 underline font-semibold' href='https://github.com/Rokuazery' onClick={openGithubInNewTab}>@Rokuazery</a> ❤️</p>
      </div>
    </div>
  )
}

export default TodoWrapper
