import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = React.useState<string>("");

  const navigate = useNavigate();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const setLocalStorage = () => {
    localStorage.setItem("name", name);
    navigate("/todos");
  };

  return (
    <div className="flex justify-center items-center p-3 mt-12">
      <form className="p-3 flex justify-center items-center gap-8">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="bg-blue-300 border-blue-600 px-8 py-2 rounded-md dark:bg-black dark:text-white"
          onChange={onNameChange}
        ></input>
        <button
          className="bg-blue-300 border-blue-600 px-8 py-2 rounded-md dark:bg-black dark:text-white"
          onClick={() => setLocalStorage()}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
