import { initialState, todosAction, actionsTypes } from "../types/todoTypes";

export const todosReducer = (state = initialState, action: todosAction) => {
    const { type, payload } = action;
    switch (type) {
        case actionsTypes.UPDATE_TODO_LIST:
            return [
                ...payload
            ]
        default:
            return state;
    }
}