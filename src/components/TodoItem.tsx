import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAppDispatch } from "../app/hooks";
import {
  deleteTodo,
  fetchTodos,
  Todo,
  updateTodo,
} from "../features/todoSlice";
import { toggleTodo } from "../features/todoSlice";

const TodoItem: React.FC<any> = (todo) => {
  const [editInput, setEditInput] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const onDelete = (event: any, data: any) => {
    event.preventDefault();
    dispatch(deleteTodo(data)).then(() => dispatch(fetchTodos()));
  };

  const onEditInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInput(e.target.value);
  };

  const onEdit = (event: any, data: any) => {
    event.preventDefault();
    dispatch(updateTodo(data)).then(() => dispatch(fetchTodos()));
    setEditInput("");
  };

  const onToggle = () => {
    dispatch(toggleTodo(todo.todo.id));
  };

  return (
    <div className="flex flex-col justify-center items-center px-6 py-2 m-3 bg-blue-300 max-h-2xl rounded-xl overflow-hidden max-w-2xl dark:bg-black dark:text-white">
      {todo.todo.isCompleted ? (
        <s className="text-xl font-semibold">{todo.todo.content}</s>
      ) : (
        <div className="font-semibold text-xl  ">{todo.todo.content}</div>
      )}
      <div className="flex  justify-center items-center mt-2">
        <div className="p-4">
          <div className="flex items-center mr-4 mb-2">
            <button onClick={() => onToggle()}>
              {todo.todo.isCompleted ? (
                <FontAwesomeIcon icon={solid("square")} />
              ) : (
                <FontAwesomeIcon icon={solid("check-square")} />
              )}
            </button>
          </div>
        </div>
        <input
          placeholder="Edit Todo"
          onChange={onEditInput}
          className="bg-white border-blue-600 px-8 py-2 rounded-md dark:text-black"
        ></input>
        <button className="m-2">
          <FontAwesomeIcon
            icon={solid("pen")}
            onClick={(event: any) =>
              onEdit(event, {
                id: todo.todo.id,
                content: editInput,
                isCompleted: todo.todo.isCompleted,
              })
            }
          />
        </button>
        <button
          className="m-2"
          onClick={(event) => onDelete(event, todo.todo.id)}
        >
          <FontAwesomeIcon icon={solid("trash")} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
