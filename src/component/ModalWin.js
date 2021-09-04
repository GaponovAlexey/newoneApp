import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export function ModalWin({ onOpen }) {
	return (
		<View>
			<Text>you</Text>
			<Button title='back' onOpen={ onOpen } />
		</View>
	)
}

const styles = StyleSheet.create({})
