import React, { useReducer } from "react"
import { useContext } from "react/cjs/react.development"
import { ScreenContext } from "../screen/screenContext"
import { TodoContext } from "./todoContext"
import { TodoReducer } from "./todoReducer"
import { UPDATE_TODO, REMOVE_TODO, ADD_TODO } from './type'

const initialState = {
	todos: [
		{ id: '1', title: 'best at the best' },
		{ id: '2', title: 'best at the best two' },
	]
}

export default TodoState = ({ children }) => {
	const [state, dispatch] = useReducer(TodoReducer, initialState)

	const { changeScreen } = useContext(ScreenContext)


	const addTodo = title => dispatch({ type: ADD_TODO, title })
	const removeTodo = id => dispatch({ type: REMOVE_TODO, id })
	const updateTodo = (id, title) => {
		dispatch({ type: UPDATE_TODO, id, title })
		changeScreen(null)
	}


	return (
		<TodoContext.Provider
			value={ {
				todos: state.todos,
				addTodo, removeTodo, updateTodo
			} }
		>{ children }</TodoContext.Provider>
	)
}