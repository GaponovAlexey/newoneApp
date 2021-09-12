import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from './component/Navbar';
import TodoOpen from './screen/TodoOpen'
import MainApp from './screen/MainApp'
import { TodoContext } from './context/todo/todoContext';
import { ScreenContext } from './context/screen/screenContext';


export default function MainPayload() {
	const { todoId } = useContext(ScreenContext)

	
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