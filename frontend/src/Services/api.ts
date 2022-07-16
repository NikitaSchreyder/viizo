import axios from 'axios';
import { Todo } from '../types';

const SERVER_URL:string = "http://localhost:3001";

export function AddTodo(newTodo: Todo) {
    return axios.put(`${SERVER_URL}/todos`, newTodo)
        .then(result => {
            const { status } = result;
            return status;
        })
            .catch(err => {
                console.error(err);
            })
}

export function GetTodos() {
    return axios.get(`${SERVER_URL}/todos`)
        .then(result => {
            const {status} = result;
            if(status === 200) {
                const { data } = result
                return data
            }
            return status;
        })
            .catch(err => {
                console.error(err);
            })
}

export function DeleteTodo(id: number) {
    return axios.delete(`${SERVER_URL}/todos`, {
        data:{
            id
        }
    })
        .then(result => {
            const { status } = result;
            return status;
        })
            .catch(err => {
                console.error(err);
            })
}