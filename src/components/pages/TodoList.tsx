import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodos, Todo } from "../../features/todoSlice";
import PrevButton from "../PrevButton";
import TodoInput from "../TodoInput";
import TodoItem from "../TodoItem";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";

const TodoList: React.FC<any> = () => {
  const todos = useAppSelector((state) => state.todos);
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");

  React.useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap mt-2">
      {status === "loading" ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center flex-wrap ">
          <p className=" font-bold text-4xl text-green-500 dark:text-black">
            {" "}
            Welcome: {userName}{" "}
          </p>
          <div className="flex justify-start items-center mt-6">
            <div className="absolute left-28">
              <PrevButton navigate={navigate} />
            </div>

            <TodoInput />
          </div>

          <div className="flex justify-center items-center flex-wrap">
            <ul className="flex justify-center items-center flex-wrap">
              {todos.todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
