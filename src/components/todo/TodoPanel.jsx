import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../button/Button";

const TodoPanel = ({ toggleAddTodo, filterTodo }) => {
  return (
    <div className="flex gap-3 text-sm">
      <div className="relative w-full">
        <input
          type="text"
          className="border-2 rounded-md outline-none border-blue-200 p-2 hover:border-blue-500 w-full pl-8"
          placeholder="Search..."
          onChange={(e) => filterTodo(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
        </div>
      </div>
      <Button onClick={toggleAddTodo} type="button" className="md:block hidden">
        Add new <FontAwesomeIcon className="ml-1" icon={faPlus} />
      </Button>

      <Button
        onClick={toggleAddTodo}
        type="button"
        className="md:hidden size-10 w-11"
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

export default TodoPanel;
