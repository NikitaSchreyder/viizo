/*
  Это мой первый опыт использования react redux совместно с typescript
  Да и в принципе первый опыт использования typescript
  Во время рабочего процесса всему научусь на задачах)
*/
import { bindActionCreators } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateTodoslist } from '../../../Redux/actions/actions'
import { AddTodo, DeleteTodo, GetTodos } from '../../../Services/api'
import { Todo } from '../../../types'
import AddTodoForm from '../../Dumb/AddTodoForm/AddTodoForm'
import TodosList from '../../Dumb/TodosList/TodosList'

import './App.css'

function App(props: any) {
  const { todos, updateTodoList } = props;
  
  useEffect(() => {   
    GetTodos()
      .then(result => {
        updateTodoList(result);
      })
        .catch(err => console.log(err))
  }, [])

  function addTodoHandler(todo: Todo) {
    AddTodo(todo)
      .then(result => {
        if(result === 200) {
          GetTodos()
            .then(result => {
              updateTodoList(result);
            })
              .catch(err => console.log(err))
        }
      })
        .catch(err => console.log(err))
  }
  
  function deleteTodoHandler(id: number) {
    DeleteTodo(id)
      .then(result => {
        if(result === 200) {
          GetTodos()
            .then(result => {
              updateTodoList(result);
            })
              .catch(err => console.log(err))
        }
      })
        .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <AddTodoForm addTodo={(todo: Todo) => addTodoHandler(todo)} />
      <TodosList deleteTodo={(id: number) => deleteTodoHandler(id)} todos={todos} />
    </div>
  )
}

function mapStateToProps(state: any) {
  return state
}

function mapActionsToProps(dispatch: any) {
  return {
    updateTodoList: bindActionCreators(updateTodoslist, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(App);