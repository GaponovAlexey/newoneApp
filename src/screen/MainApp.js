<<<<<<< HEAD
import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'
import { ScreenContext } from '../context/changeScreen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

export default function MainApp() {	
	const { todoId, setTodoId } = useContext(ScreenContext)
	const { todos, addTodo } = useContext(TodoContext)
=======
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

export default function MainApp({ goOpenTodo }) {
	const { todos, addTodo, fetchTodo, clearError } = useContext(TodoContext)
	const { changeScreen } = useContext(ScreenContext)
	console.log(todos);

	const calbek = useCallback(
		() => {
			fetchTodo()
		},
		[fetchTodo],
	)

	useEffect(() => {
		calbek()
	}, [])

	const [diviceWidth, setDiviceWidth] = useState(Dimensions.get('window').width - 30 * 2)
	useEffect(() => {
		const update = () => {
			const width = Dimensions.get('screen').width - 30 * 2
			setDiviceWidth(width)
		}
		Dimensions.addEventListener('change', update)
		return () => {
			Dimensions.removeEventListener('change', update)
		}
	})

>>>>>>> 8d2c8ef980988e4838859493871b1e0fbee65984
	return (
		<View style={ {...styles.body, width: diviceWidth } } >
			<TopTodo addTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) =>
					<Todo
						value={ item }
<<<<<<< HEAD
						goOpenTodo={ setTodoId }
=======
						goOpenTodo={ changeScreen }
>>>>>>> 8d2c8ef980988e4838859493871b1e0fbee65984
					/> }
				keyExtractor={ item => item.id }
			/>
		</View >
	)
}

const styles = StyleSheet.create({
	body: {
		height: 670,
	}
})