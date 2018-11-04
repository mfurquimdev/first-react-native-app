import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
	const {person} = props
	const {title, first, last} = person.name
	const {thumbnail} = person.picture

	return (
		<View style={styles.line}>
			<Image style={styles.avatar} source={{ uri: thumbnail }} />
			<Text style={styles.lineText}>
				{`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',

		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
	},
	avatar: {
		aspectRatio: 1,
		width: 200
	}
})


export default PeopleListItem;
