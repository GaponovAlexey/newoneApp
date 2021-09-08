import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'

export default function MainApp({ todos, addTodo, goOpenTodo }) {
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
			<TopTodo addTodo={ addTodo } />
			<FlatList
				data={ todos }
				renderItem={ ({ item }) =>
					<Todo
						value={ item }
						goOpenTodo={ goOpenTodo }
					/> }
				keyExtractor={ item => item.id }
			/>
		</View >
	)
}

const styles = StyleSheet.create({

})
