import React, { useState, FC } from "react";
import { Todo } from "../../../types";

import './AddTodoForm.css'

interface AddTodoForm {
    addTodo: (todo: Todo) => void
}

const AddTodoForm: FC<AddTodoForm> = ({addTodo}) => {
    const [todoName, setTodoName] = useState<string>("");
    const [todoFinishDate, setTodoFinishDate] = useState<string>("");

    function changeTodoNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setTodoName(value)
    }

    function changeTodoFinishDateHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const finishDate = new Date(value).toDateString().toString();
        setTodoFinishDate(finishDate);
    }

    function addTodoHandler(e: React.FormEvent) {
        e.preventDefault()

        // Для примера как id используем неотформатированное время
        // В дальнейшем понадобится для использования как ключ
        const todoId: number = new Date().getTime();
        
        const todoInfo: Todo = {
            id: todoId,
            name: todoName,
            date: todoFinishDate
        }

        addTodo(todoInfo);
    }

    return (
        <form className="add-todo-form" onSubmit={addTodoHandler}>
            <input placeholder="Опишите задачу" className="add-todo-form_input" id="add-todo-form_todo-name" required type="text" onChange={changeTodoNameHandler}/>
            <input className="add-todo-form_date-input" id="add-todo-form_todo-finish-date" required type="date" onChange={changeTodoFinishDateHandler} />
            <input className="add-todo-form_todo-submit" type="submit" value="Добавить" />
        </form>
    )
}

export default AddTodoForm;