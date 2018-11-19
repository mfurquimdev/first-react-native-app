import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Line = ({ label = "", content = ""}) => {
	return (
					<View style={styles.line}>
						<Text style={[
							styles.cell,
							styles.label,
							label.length > 9 ? styles.longLabel : null
						]}>{ label }: </Text>
						<Text style={[styles.cell, styles.content]}>{ content }</Text>
					</View>
	);
}

const styles = StyleSheet.create({
	line: {
		flexDirection: 'row',
		paddingTop: 3,
		paddingBottom: 3,
		borderWidth: 1,
		borderColor: '#c5c5c5'
	},
	cell: {
		fontSize: 18,
		paddingLeft: 5,
		borderWidth: 1,
	},
	label: {
		fontWeight: 'bold',
		flex: 1,
	},
	content: {
		fontStyle: 'italic',
		flex: 3,
	},
	longLabel: {
		fontSize: 12,
	}
});

export default Line;
