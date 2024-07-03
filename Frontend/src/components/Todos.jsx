/* todos = [
{
    title:"go to gym"
    description:"go to gym and have a healthy diet"
}
]
  
*/
import React from 'react';

const TodoItem = ({ todo, onMarkCompleted }) => {
    const input = todo.completed ? "Completed" : "Mark as Completed"
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => onMarkCompleted(todo)}>{input}</button>
        </div>
    );
};

export function Todos({todos}){

    const markCompleted = async (todo) => {
        try {
            const response = await fetch('http://localhost:3000/completed', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: todo._id }),
            });

            if (!response.ok) {
                throw new Error('Failed to mark todo as completed');
            }

            const data = await response.json();
            console.log(data.msg);

        } catch (error) {
            console.error('Error marking todo as completed:', error.message);
        }
    };

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} onMarkCompleted={markCompleted} />
            ))}
        </div>
    );
};

