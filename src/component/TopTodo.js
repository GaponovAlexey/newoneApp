import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function TopTodo({ value, addTodo }) {
	const [todo, setTodo] = useState(value)
	return (
		<View style={ styles.cont } >
			<TextInput
				style={ styles.text }
				value={ todo }
				onChangeText={ setTodo }
				placeholder='your todo'
			/>
			<Button title='send' onPress={ () => {
				if (todo.trim()) {
					addTodo(todo)
					setTodo('')
				}
			} } />
		</View>
	)
}

const styles = StyleSheet.create({
	cont: {
		flexDirection: 'row',
		justifyContent: 'space-between',

	},
	text: {
		borderBottomWidth: 2,
		width: '70%',
	}
})
