import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'
import { ScreenContext } from '../context/screen/screenContext'
import { TodoContext } from '../context/todo/todoContext'

export default function MainApp({ goOpenTodo }) {
	const {todos, addTodo} = useContext(TodoContext)
	const { changeScreen } = useContext(ScreenContext)



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

	return (
		<View style={ { width: diviceWidth } } >
			<TopTodo  addTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) =>
					<Todo
						value={ item }
						goOpenTodo={ changeScreen }
					/> }
				keyExtractor={ item => item.id }
			/>
		</View >
	)
}
