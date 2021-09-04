import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Todo({ value }) {
	return (
		<View>
			<Text style={ styles.text }>{ value }</Text>
		</View>
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
