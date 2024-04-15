import {
  faArrowUpFromGroundWater,
  faCancel,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";
import Button from "../button/Button";

const EditTodoForm = ({ editTodo, cancelEditingTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const [dateValue, setDateValue] = useState(dayjs(task.dueDate));

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, dateValue, task.id);

    setValue("");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        className="space-y-2 h-fit min-w-36 w-full p-2 bg-gray-100 rounded-md"
        onSubmit={handleSubmit}
      >
        <p className="font-semibold">
          Original:{" "}
          <span className="font-normal text-gray-600">{task.task}</span>
        </p>

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

        <div className="flex w-full gap-3 text-ellipsis text-nowrap whitespace-nowrap">
          <input
            type="text"
            className="border-2 rounded-md outline-none border-blue-200  hover:border-blue-500 px-2 w-full text-sm"
            placeholder="Update task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-2">
            <Button type="submit">
              Update <FontAwesomeIcon icon={faArrowUpFromGroundWater} />
            </Button>
            <Button color="red" onClick={() => cancelEditingTodo(task.id)}>
              Cancel <FontAwesomeIcon icon={faCancel} />
            </Button>
          </div>
        </div>
      </form>
    </LocalizationProvider>
  );
};

export default EditTodoForm;
