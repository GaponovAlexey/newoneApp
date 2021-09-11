import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from './type'

const handlers = {
	[ADD_TODO]: (state, { title }) => ({
		...state,
		todos: [{
			id: Date.now().toString(),
			title: title
		}, ...state.todos]
	}),
	[REMOVE_TODO]: (state, { id }) => ({
		...state,
		todos: state.todos.filter(e => e.id !== id)
	}),
	[UPDATE_TODO]: (state, { id, title }) => ({
		...state,
		todos: state.todos.map(todo => { if (todo.id === id) { todo.title = title } return todo })
	}),
	DEFAULT: state => state

}

export const TodoReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	return handler(state, action)
}