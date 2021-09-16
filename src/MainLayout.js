import React, { useCallback, useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './component/Navbar'
import { ScreenContext } from './context/changeScreen/screenContext'
import { TodoContext } from './context/todo/todoContext'
import MainApp from './screen/MainApp'
import TodoOpen from './screen/TodoOpen'

export default function MainLayout() {
	const { todoId } = useContext(ScreenContext)
	const { fetchTodo } = useContext(TodoContext)

	const calbek = useCallback(async () => await fetchTodo(), [fetchTodo],)
	useEffect(() => {
		calbek()
	}, [])


	return (
		<View>
			<Navbar />
			<View style={ styles.container }>
				{ todoId ? <TodoOpen /> : <MainApp /> }
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
