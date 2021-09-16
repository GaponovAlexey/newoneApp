<<<<<<< HEAD
import { FETCH_TODO, REMOVE_TODO, UPDATE_TODO } from "../Types"

const headers = {
	[FETCH_TODO]: (state, { todos }) => ({ ...state, todos }),
	[UPDATE_TODO]: (state, { id, title }) => ({ ...state, todos: state.todos.map(todo => { if (todo.id === id) { todo.title = title } return todo }) }),
	[REMOVE_TODO]: (state, { id }) => ({ ...state, todos: state.todos.filter(e => e.id !== id) }),
	DEFAULT: state => state
}


export const TodoReucer = (state, action) => {
	const header = headers[action.type] || headers.DEFAULT
	return header(state, action)
=======
import {
	ADD_TODO, UPDATE_TODO, REMOVE_TODO,
	SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_TODOS
} from './type'

const handlers = {
	[ADD_TODO]: (state, { id, title }) => ({
		...state,
		todos: [{ id, title }, ...state.todos]
	}),
	[REMOVE_TODO]: (state, { id }) => ({
		...state,
		todos: state.todos.filter(e => e.id !== id)
	}),
	[UPDATE_TODO]: (state, { id, title }) => ({
		...state,
		todos: state.todos.map(todo => { if (todo.id === id) { todo.title = title } return todo })
	}),
	[SHOW_LOADER]: state => ({ ...state, loading: true }),
	[HIDE_LOADER]: state => ({ ...state, loading: false }),
	[CLEAR_ERROR]: state => ({ ...state, error: null }),
	[SHOW_ERROR]: (state, { error }) => ({ ...state, error }),
	[FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
	DEFAULT: state => state

}

export const TodoReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action)
>>>>>>> 8d2c8ef980988e4838859493871b1e0fbee65984
}