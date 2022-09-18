import "./App.css";
import TodoList from "./components/pages/TodoList";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";

const App: React.FC<any> = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="h-screen">
      <button
        className="absolute right-28 top-2 bg-blue-300 px-5 py-2 font-semibold rounded-md dark:bg-black dark:text-white mt-1"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
