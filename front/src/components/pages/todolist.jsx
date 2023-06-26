import React, { useState, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const handleToggleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen w-[400px]">
      <h2 className="text-center text-5xl my-4">GOALS</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs bg-white"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-active btn-primary ml-3"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`shadow-2xl rounded-lg p-4 ${
              todo.done ? 'line-through' : ''
            }`}
          >
            <div className="flex justify-between">
              <span className="my-auto text-2xl">{todo.text}</span>
              <div>
                <button
                  className={`btn btn-sm btn-outline ${
                    todo.done ? 'btn-warning' : 'btn-success'
                  }`}
                  onClick={() => handleToggleDone(index)}
                >
                  {todo.done ? <IoIosArrowBack /> : <AiFillLike />}
                </button>
                <button
                  className="btn btn-sm btn-outline btn-error ml-2 mt-[-20px]"
                  onClick={() => handleDeleteTodo(index)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
