import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Todo from '../component/Todo'
import TopTodo from '../component/TopTodo'

export default function MainApp({ todos, addTodo }) {
	return (
		<View >
			<TopTodo addTodo={ addTodo }/>
			<FlatList
				data={ todos }
				renderItem={ ({ item }) => <Todo value={ item.title } /> }
				keyExtractor={ item => item.id }
			/>
		</View >
	)
}

const styles = StyleSheet.create({

})
