import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function TopTodo({  addTodo }) {
	const [todo, setTodo] = useState('')



	return (
		<View style={ styles.cont } >
			<TextInput
				style={ styles.text }
				value={ todo }
				onChangeText={ setTodo }
				placeholder='your todo'
			/>
			<MaterialCommunityIcons name='file-send-outline' size={25} onPress={ () => {
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
		width: '90%',
	}
})
