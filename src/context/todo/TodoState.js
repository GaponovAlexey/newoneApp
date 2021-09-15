import React, { useReducer } from "react"
import {
	UPDATE_TODO, REMOVE_TODO, ADD_TODO,
	SHOW_LOADER,
	HIDE_LOADER,
	SHOW_ERROR,
	CLEAR_ERROR,
	FETCH_TODOS
} from './type'

import { useContext } from "react/cjs/react.development"
import { ScreenContext } from "../screen/screenContext"
import { TodoContext } from "./todoContext"
import { TodoReducer } from "./todoReducer"

const Url = 'https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json'

const initialState = {
	todos: [],
	loading: false,
	error: null
}

export default TodoState = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer, initialState)
	const { changeScreen } = useContext(ScreenContext)

	const addTodo = async title => {
		const response = await fetch(Url, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ title })
		})
		const data = await response.json()
		dispatch({ type: ADD_TODO, id: data.name, title })
	}




	const removeTodo = id => dispatch({ type: REMOVE_TODO, id })

	const updateTodo = async (title, id) => {
		await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ title })
		})
		dispatch({ type: UPDATE_TODO, title, id })
		TodoContext(null)
	}


	const fetchTodo = async () => {
		const response = await fetch(Url, {
			method: 'GET',
			headers: { 'Content-type': 'application/json' },
		})
		const data = await response.json()
		const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
		dispatch({ type: FETCH_TODOS, todos: todos })
	}



	const showLoader = () => dispatch({ type: SHOW_LOADER })
	const hideLoader = () => dispatch({ type: HIDE_LOADER })
	const showError = error => dispatch({ type: SHOW_ERROR, error })
	const clearError = async (id) => {
		await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' },
		})
		dispatch({ type: CLEAR_ERROR, id })
	}

	return (
		<TodoContext.Provider
			value={ {
				todos: state.todos,
				fetchTodo,
				addTodo, removeTodo, updateTodo, clearError
			} }
		>{ children }</TodoContext.Provider>
	)
}