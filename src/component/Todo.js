import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Todo({ value, goOpenTodo }) {
	return (
		<TouchableOpacity
			onPress={ () => goOpenTodo(value.id) }

		>
			<Text style={ styles.text }>{ value.title }</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	text: {
		padding: 10,
		backgroundColor: '#ccc',
		borderRadius: 5,
		marginBottom: 3,
		elevation: 2,
	}
})
