import React, { useContext, useReducer } from "react"
import { ScreenContext } from "../changeScreen/screenContext"
import { ADD_TODO, FETCH_TODO, REMOVE_TODO, UPDATE_TODO } from "../Types"
import { TodoContext } from "./todoContext"
import { TodoReucer } from "./todoReducer"
const url = 'https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
export const TodoState = ({ children }) => {
	const initialState = {
		todos: []
	}
	const [state, dispatch] = useReducer(TodoReucer, initialState)
	const { setTodoId } = useContext(ScreenContext)
	const fetchTodo = async () => {
		const response = await fetch('https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
			method: 'GET',
			headers: { 'Content-type': 'application/json' },
		})
		const data = await response.json()
		const todos = Object.keys(data).map(key => ({ ...data[key], id: key }))
		dispatch({ type: FETCH_TODO, todos })
	}

	const addTodo = async (title) => {
		const response = await fetch('https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ title })
		})
		const data = response.json()
		dispatch({ type: ADD_TODO, title, id: data })
	}

	const updateTodo = async (id, title) => {
		await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
			method: 'PATCH',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ title })
		})
		dispatch({ type: UPDATE_TODO, title, id })
	}
	const removeTodo = async (id) => {
		await fetch(`https://mobapp-c8e18-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`, {
			method: 'DELETE',
			headers: { 'Content-type': 'application/json' },
		})
		dispatch({ type: REMOVE_TODO, id })
	}
	return (
		<TodoContext.Provider
			value={ {
				todos: state.todos,
				fetchTodo, addTodo, updateTodo, removeTodo
			} }
		>{ children }</TodoContext.Provider>
	)
}