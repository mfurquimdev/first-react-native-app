import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirstLetter } from '../util'

const PeopleListItem = props => {
	const { person, navigateToPeopleDetail } = props
	const { title, first, last } = person.name
	const { thumbnail } = person.picture

	return (
		<TouchableOpacity onPress={() => {
			console.log("Clicou em: " + first)
			navigateToPeopleDetail();
		}}>
		<View style={styles.line}>
			<Image style={styles.avatar} source={{ uri: thumbnail }} />
			<Text style={styles.lineText}>
				{`${capitalizeFirstLetter(title)} ${capitalizeFirstLetter(first)} ${capitalizeFirstLetter(last)}`}
			</Text>
		</View>
		</TouchableOpacity>
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
		flex: 6
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 15,
		borderRadius: 50

	}
})


export default PeopleListItem;
