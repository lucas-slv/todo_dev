import * as icon from 'react-icons/md';

interface TodoType {
    todo: {
        id: string;
        content: string;
        checked: boolean;
    };

    onTaskDeleted: (id: string) => void;
    onCheckTask: (id: string, isChecked: boolean) => void;
}

export function Todolist({ todo, onTaskDeleted, onCheckTask }: TodoType) {
    return (
        <ul>
            <li key={todo.id} className="flex border-y border-y-[#dfe6e9]">
                <span
                    onClick={() => onCheckTask(todo.id, todo.checked)}
                    className={`flex-1 outline-none cursor-pointer text-2xl break-all transition-colors duration-300 pt-[15px] px-[15px] pb-[17px] ${todo.checked ? 'text-[#b2bec3] line-through' : 'text-black no-underline'}`}
                >
                    {todo.content}
                </span>

                <button
                    type="button"
                    onClick={() => onTaskDeleted(todo.id)}
                    className="bg-transparent border-none cursor-pointer outline-none w-12 text-red-400"
                >
                    <icon.MdDelete size={30} />
                </button>
            </li>
        </ul>
    );
}
