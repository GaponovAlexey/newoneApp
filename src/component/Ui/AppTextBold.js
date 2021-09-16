import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AppTextBold(props) {
	return (
		<View>
			<Text style={ { ...styles.default, ...props.style } } >{ props.children }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	default: {
		fontFamily: 'JBBold',
	}
})
