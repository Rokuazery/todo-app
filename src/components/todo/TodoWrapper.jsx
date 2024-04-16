import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faTasksAlt } from "@fortawesome/free-solid-svg-icons";
import EditTodoForm from "./EditTodoForm";
import { dateFormat } from "../../App";
import TodoPanel from "./TodoPanel";
import dayjs from "dayjs";
import GithubLink from "../github-link/GithubLink";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(null);

  const [loaded, setLoaded] = useState(false);
  const [newTask, setNewTask] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    console.log("loading data");
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
      console.log("saving data");
    }
  }, [todos, loaded]);

  const toggleAddTodo = () => setNewTask(!newTask);

  const addTodo = (todo, dueDate) => {
    if (todo.trim() === "") {
      alert("Todo task cannot be empty!");
      return;
    }

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        dueDate: dueDate,
        completed: false,
        isEditing: false,
      },
    ]);

    setNewTask(false);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const editTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  const cancelEditingTodo = (e) => editTodo(e);

  const editTask = (task, dueDate, id) => {
    if (task.length === 0) {
      alert("Todo task cannot be empty!");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              task: task,
              dueDate: dueDate,
              isEditing: !todo.isEditing,
            }
          : todo
      )
    );
  };

  const toggleTodo = (id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const filterTodo = (search) => {
    if (search.trim() === "") {
      setFilteredTodos(null);
      return;
    }

    const filtered = todos.filter((todo) => {
      const taskMatch = todo.task.toLowerCase().includes(search.toLowerCase());
      const dueDateMatch = dayjs(todo.dueDate)
        .format(dateFormat)
        .toLowerCase()
        .includes(search.toLowerCase());
      return taskMatch || dueDateMatch;
    });

    setFilteredTodos(filtered);
  };

  const displayTodos = filteredTodos !== null ? filteredTodos : todos;

  return (
    <div className="p-5 bg-white shadow-md rounded-md w-3/6 min-w-96 flex flex-col max-h-[calc(100dvh-6rem)] min-h-[calc(100dvh-6rem)] border-2 border-blue-300 justify-between">
      <header className="w-fit flex items-center gap-2 mb-5">
        <div className="space-y-1">
          <h1 className="font-semibold">Todo-App</h1>
          <div className="border-t-2 border-blue-500"></div>
        </div>
        <FontAwesomeIcon icon={faTasksAlt}></FontAwesomeIcon>
      </header>

      <div className="flex flex-col flex-1 overflow-y-hidden">
        <TodoPanel toggleAddTodo={toggleAddTodo} filterTodo={filterTodo} />

        <div className="overflow-scroll max-h-full flex-1 space-y-5 mt-5">
          {todos.length === 0 ? (
            <p className="absolute w-fit h-fit left-0 right-0 m-auto top-0 bottom-0 text-gray-700 p-2 rounded-md bg-red-100 text-centertext-sm shadow-md">
              Looks like you haven't added any tasks yet!{" "}
              <FontAwesomeIcon icon={faFrown}></FontAwesomeIcon>
            </p>
          ) : (
            displayTodos.map((todo, i) =>
              todo.isEditing ? (
                <EditTodoForm
                  key={i}
                  editTodo={editTask}
                  task={todo}
                  cancelEditingTodo={cancelEditingTodo}
                />
              ) : (
                <TodoItem
                  key={i}
                  task={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleTodo={toggleTodo}
                ></TodoItem>
              )
            )
          )}
        </div>
      </div>

      <GithubLink />

      {newTask ? (
        <div className="z-50 w-full h-full absolute backdrop-brightness-50 left-0 right-0 top-0 bottom-0 flex items-center justify-center p-10">
          <TodoForm
            className="flex-1 max-w-96"
            addTodo={addTodo}
            cancelAddTodo={toggleAddTodo}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoWrapper;
