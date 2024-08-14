import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const TodoApp = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (input.trim() === '') {
            alert('Please enter a task');     // if the input is blank
            return;
        }
        if (todos.includes(input)) {
            alert('Task already exists');     // if the task already exists
            setInput('');
            return;
        }
        setTodos([...todos, input]);
        toast.success('Task Added');
        setInput('');              // Clear the input field after adding the item
    };

    const deleteTask = (index) => {
        const newItems = todos.filter((elem, i) => i !== index);
        setTodos(newItems);
    };

    return (
        <>
            <div className="todoContainer">
                <div className="title">
                    <h1>TODO APP</h1>
                </div>
                <div className="addTask">
                    <input
                        type="text"
                        placeholder="Add a task........"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="addtask-btn" onClick={addTask}>Add Task</button>
                </div>
                <div className="todolists">
                    <ul className="todolist">
                        {todos.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button className="deleteBtn" onClick={() => deleteTask(index)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
