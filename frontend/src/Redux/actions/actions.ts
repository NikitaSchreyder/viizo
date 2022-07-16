import { Todo } from "../../types"
import { actionsTypes } from "../types/todoTypes"

export const updateTodoslist = (payload: Todo[]) => ({
    type: actionsTypes.UPDATE_TODO_LIST,
    payload
})