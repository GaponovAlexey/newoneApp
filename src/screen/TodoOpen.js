import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function TodoOpen({ BackTodo }) {
	return (
		<View>
			<Text>You</Text>
			<Button title='you back' onPress={BackTodo} />
		</View>
	)
}

const styles = StyleSheet.create({})
