import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
    todos: todosReducer
})

export type todoState = ReturnType<typeof rootReducer>