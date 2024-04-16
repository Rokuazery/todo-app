import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dateFormat } from "../../App";
import dayjs from "dayjs";
import React from "react";

const TodoItem = ({ task, deleteTodo, editTodo, toggleTodo }) => {
  var relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);

  const dueDate = dayjs(task.dueDate);

  return (
    <div
      className="bg-gray-100 rounded-md p-3 flex justify-between items-center cursor-pointer  hover:bg-gray-500 hover:text-white hover:text-lg transition-all text-sm relative duration-[350ms]"
      onClick={() => toggleTodo(task.id)}
    >
      <div
        className={
          (task.completed ? "bg-green-400" : "bg-yellow-400") +
          " px-[2px] h-full w-fit absolute left-0"
        }
      ></div>
      <div className="flex flex-col gap-1 ml-[2px]">
        <p className="font-semibold">{task.task}</p>
        <p className="text-xs">
          {task.dueDate ? (
            <span>
              {dueDate.fromNow()}
              {" - "}
              <span className="text-xs">
                {dayjs(task.dueDate).format(dateFormat)}
              </span>
            </span>
          ) : (
            "There's no specific deadline for this task."
          )}
        </p>
      </div>
      <div className="space-x-3">
        <FontAwesomeIcon
          className="text-gray-600 hover:text-black transition-all ease-in-out bg-white shadow-sm rounded-md p-2 text-sm"
          icon={faEdit}
          onClick={(e) => {
            e.stopPropagation();
            editTodo(task.id);
          }}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="text-gray-600 hover:text-black transition-all ease-in-out bg-white shadow-sm rounded-md p-2 text-sm"
          icon={faTrash}
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(task.id);
          }}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default TodoItem;
