import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

interface NewTodoProps {
    onNewTodo: (title: string) => void;
}

export function NewTodo({ onNewTodo }: NewTodoProps) {
    const [value, setValue] = useState('');

    function handleInputValue(event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value;
        setValue(query);
    }

    function handleSubmit() {
        onNewTodo(value);
        setValue('');
    }

    function addTaskOnEnter(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (value == '') {
                return toast.error('Please enter a task!');
            }
            handleSubmit();
            toast.success(`Added "${value}"  task!`);
        } else if (event.key === 'Escape') {
            setValue('');
        }
    }

    return (
        <input
            className="bg-black bg-opacity-[3%] shadow-input text-2xl italic w-full px-4 pt-4 pb-[18px] outline-none border-none"
            type="text"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={handleInputValue}
            onKeyDown={addTaskOnEnter}
        />
    );
}
