import React, {FC} from "react";
import { Todo } from "../../../types";
import TodoItem from "../TodoItem/TodoItem";

import './TodosList.css'

interface TodosListProps {
    todos: Todo[],
    deleteTodo: (id: number) => void
}

const TodosList:FC <TodosListProps> = ({todos, deleteTodo}) => {
    const sortedTodos = [...todos].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    })    

    const Todos = () => sortedTodos.map((todo: Todo) => <TodoItem key={todo.id} deleteTodo={(id: number) => deleteTodo(id)} id={todo.id} name={todo.name} date={todo.date} />)

    const EmrptyTodosList = () => {
        return(
            <p>Нет задач</p>
        )
    }

    return(
        <div className="todos">
            {
                todos.length > 0
                    ? 
                        Todos()
                    : 
                        <EmrptyTodosList />
            }
        </div>
    )
}

export default TodosList;