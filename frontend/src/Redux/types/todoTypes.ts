import { Todo } from "../../types";

export enum actionsTypes {
    UPDATE_TODO_LIST = 'UPDATE_TODO_LIST'
}

interface updateTodoAction {
    type: actionsTypes.UPDATE_TODO_LIST
    payload: Todo[]
}

export const initialState: Todo[] = [] 
export type todosAction = updateTodoAction