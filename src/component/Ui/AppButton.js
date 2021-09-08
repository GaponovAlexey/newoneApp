import React from 'react'
import { StyleSheet, Text, View, Platform ,TouchableNativeFeedback, TouchableOpacity } from 'react-native'

export default function AppButton(props) {
	return (
		<View>
			<Text style={{ ...styles.default, ...props.style }} >{props.children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'JBRegular',
	}
})
