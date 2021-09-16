import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'
import { ScreenContext } from '../context/changeScreen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

export default function MainApp() {	
	const { todoId, setTodoId } = useContext(ScreenContext)
	const { todos, addTodo } = useContext(TodoContext)
	return (
		<View >
			<TopTodo addTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) =>
					<Todo
						value={ item }
						goOpenTodo={ setTodoId }
					/> }
				keyExtractor={ item => item.id }
			/>
		</View >
	)
}

const styles = StyleSheet.create({

})
