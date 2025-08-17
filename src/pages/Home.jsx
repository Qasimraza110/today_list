import React, { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  const API_URL = "https://backend-production-9a2b.up.railway.app/";

  const fetchTodos = async () => {
   
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data)
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  const Finished = () => {
    setShowFinished(!showFinished);
  };

  const Edit = async (e, id) => {
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchTodos();
  };

  const Delete = async (e, id) => {
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    fetchTodos();
  };

  const Add = async () => {
    const newTask = { id: uuidv4(), todo, isCompleted: false };
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
    });
    setTodo("");
    fetchTodos();
  };

  const Change = (e) => {
    setTodo(e.target.value);
  };

  const Checkbox = async (e) => {
    let id = e.target.name;
    let task = todos.find(item => item.id === id);
    task.isCompleted = !task.isCompleted;

    await fetch(API_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    fetchTodos();
  };

 return (
    <div className="mx-auto my-4 sm:my-10 max-w-full sm:max-w-2xl p-2 sm:p-8 bg-gradient-to-br from-violet-200 to-purple-300 shadow-2xl rounded-3xl">
      <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-violet-900 mb-4 sm:mb-6">
        ✨ Daily Task - Manage Your Task
      </h1>

      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-violet-800 mb-2">Add a Task</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            onChange={Change}
            value={todo}
            type="text"
            placeholder="Write your task..."
            className="flex-1 rounded-full px-4 sm:px-5 py-2 shadow-md focus:ring-2 focus:ring-violet-500 outline-none text-sm sm:text-base"
          />
          <button
            onClick={Add}
            disabled={todo.length <= 3}
            className="bg-violet-700 hover:bg-violet-900 disabled:bg-gray-400 px-4 sm:px-5 py-2 text-white font-semibold rounded-full shadow-md transition text-sm sm:text-base mt-2 sm:mt-0"
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <input type="checkbox" onChange={Finished} checked={showFinished} />
        <span className="text-xs sm:text-sm text-gray-700">Show Completed Tasks</span>
      </div>

      <h2 className="text-base sm:text-lg font-bold text-violet-800 mb-2 sm:mb-3">Your Task</h2>
      <div className="space-y-3 sm:space-y-4">
        {todos.length === 0 && (
          <p className="text-gray-500 text-center text-sm sm:text-base">No Todos to display 🎯</p>
        )}
        {todos.map(item => {
          return (showFinished || !item.isCompleted) && (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white/70 backdrop-blur-lg rounded-lg shadow-md p-3 sm:p-4 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
                <input
                  name={item.id}
                  onChange={Checkbox}
                  type="checkbox"
                  checked={item.isCompleted}
                />
                <span
                  className={`text-base sm:text-lg ${item.isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}
                >
                  {item.todo}
                </span>
                {item.isCompleted && (
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                    Done
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={(e) => Edit(e, item.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full text-white shadow-md text-base"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={(e) => Delete(e, item.id)}
                  className="bg-red-500 hover:bg-red-700 p-2 rounded-full text-white shadow-md text-base"
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default Home;
