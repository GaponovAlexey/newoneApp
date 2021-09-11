import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './component/Navbar';
import TodoOpen from './screen/TodoOpen'
import MainApp from './screen/MainApp'
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';


export default function MainPayload() {
	//const [todoId, setTodoId] = useState(null)
	const { todos, addTodo, updateTodo, removeTodo } = useContext(TodoContext)
	const {todoId, } = useContext(ScreenContext)


	let content = (
		<MainApp
			todos={ todos }
			addTodo={ addTodo }
			//goOpenTodo={ setTodoId }
		/>
	)


	if (todoId) {
		const todoIDm = todos.find(e => e.id == todoId)
		content = <TodoOpen
			value={ todoIDm }
			corect={ updateTodo }
			BackTodo={ () => setTodoId(null) }
			deletTodo={ () => {
				removeTodo(todoIDm.id)
				setTodoId(null)
			} }
		/>
	}


	return (
		<View>
			<Navbar />
			<View style={ styles.container }>
				{ content }
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
});