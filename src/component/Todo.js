import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppButton from './Ui/AppButton'

export default function Todo({ value, goOpenTodo }) {
	return (
		<TouchableOpacity
			onPress={ () => goOpenTodo(value.id) }
		>
			<View style={ styles.block } >
				<AppButton style={ styles.text } >{ value.title }</AppButton>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	text: {
		padding: 10,
		backgroundColor: '#eee',
		borderRadius: 3,
		marginBottom: 4,
		elevation: 1,
	},
})
