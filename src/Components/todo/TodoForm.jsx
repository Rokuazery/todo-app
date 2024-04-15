import { faAdd, faCancel, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import React, { useState } from "react";
import Button from "../button/Button";

const TodoForm = ({ addTodo, className, cancelAddTodo }) => {
  const [value, setValue] = useState("");
  const [dateValue, setDateValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, dateValue);

    setValue("");
    setDateValue(null);
  };

  return (
    <div className={className}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form
          className="flex gap-3 h-fit min-w-36 w-full py-3 text-sm flex-col items-end p-5 bg-white rounded-md"
          onSubmit={handleSubmit}
        >
          <header className="flex items-center gap-2 w-full mb-3">
            <div className="space-y-1">
              <h1 className="font-semibold">Add new task</h1>
              <div className="border-t-2 border-blue-500"></div>
            </div>
            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
          </header>
          <input
            type="text"
            className="border-2 rounded-md outline-none border-blue-200 p-2 hover:border-blue-500 w-full px-3 py-4"
            placeholder="Add a task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <MobileDateTimePicker
            className="w-full"
            label="Due date time..."
            value={dateValue}
            sx={{
              "& .MuiOutlinedInput-root": {
                background: "#fff",
                fontSize: "0.875rem",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderWidth: "2px",
                borderColor: "#BFDBFE",
              },
              ".MuiFormLabel-root": {
                fontSize: "0.875rem", // Change the font size of the label
              },

              ".MuiInputBase-root": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
              },
            }}
            onChange={(value) => setDateValue(value)}
          />
          <div className="flex gap-3">
            <Button onClick={cancelAddTodo} color="red">
              Cancel <FontAwesomeIcon icon={faCancel} />
            </Button>
            <Button type="submit">
              Add <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </form>
      </LocalizationProvider>
    </div>
  );
};

export default TodoForm;
