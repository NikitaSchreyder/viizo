import React, {FC} from "react";
import { Todo } from "../../../types";
import './TodoItem.css'

interface TodoItem extends Todo  {
    deleteTodo: (id: number) => void
}

const TodoItem: FC <TodoItem> = ({id, name, date, deleteTodo}) => {
    const formatedDate = new Date(date).toLocaleDateString();
    return(
        <div className="todo">
            <p className="todo_name">{name}</p>
            <p className="todo_finish-date">{`Выполнить до: ${formatedDate}`}</p>
            <button onClick={() => deleteTodo(id)} className="todo-delete">Удалить</button>
        </div>
    )
}

export default TodoItem;