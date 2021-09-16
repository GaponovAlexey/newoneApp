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
}