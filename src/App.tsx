import { useState } from 'react';
import { NewTodo } from './components/new-todo';
import { Todolist } from './components/todolist';

interface Todo {
    id: string;
    content: string;
    checked: boolean;
}

export function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function onNewTodo(content: string) {
        const newTask: Todo = {
            id: crypto.randomUUID(),
            content: content,
            checked: false,
        };

        const tasksArray = [newTask, ...todos];

        setTodos(tasksArray);
    }

    function handleCheckedTask(id: string) {
        let updatedTasks = todos.map((task) =>
            task.id === id ? { ...task, checked: !task.checked } : task,
        );
        setTodos(updatedTasks);
    }

    function handleDeletedTask(id: string) {
        const filteredTasks = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(filteredTasks);
    }

    return (
        <section className="block max-w-[480px] my-0 mx-auto p-4">
            <header>
                <h1 className="text-secundary text-[64px] font-thin text-center">
                    todo
                </h1>
            </header>

            <section className="bg-white shadow-section">
                <NewTodo onNewTodo={onNewTodo} />

                {todos.map((todo) => {
                    return (
                        <Todolist
                            key={todo.id}
                            todo={todo}
                            onCheckTask={handleCheckedTask}
                            onTaskDeleted={handleDeletedTask}
                        />
                    );
                })}
            </section>
        </section>
    );
}
