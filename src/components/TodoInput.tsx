import React from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodo, fetchTodos } from "../features/todoSlice";

const TodoInput: React.FC<any> = () => {
  const [content, setContent] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onAddTodo = (event: any, data: any) => {
    event.preventDefault();
    if (content.length > 3) {
      dispatch(addTodo(data));
      dispatch(fetchTodos());
      setContent("");
    } else {
      alert("Todo must be more than 3 characters");
    }
  };

  return (
    <div className="flex justify-center items-center p-3">
      <form className="p-3 flex justify-center items-center gap-8">
        <input
          type="text"
          placeholder="Enter Todo"
          className="bg-blue-300 border-blue-600 px-8 py-2 rounded-md dark:bg-black dark:text-white"
          onChange={onContentChange}
        ></input>
        <button
          className="bg-blue-300 border-blue-600 px-8 py-2 font-semibold rounded-md dark:bg-black dark:text-white"
          onClick={(event: any) => onAddTodo(event, { content: content })}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
