import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = (props) => {
	const { people, onPressItem } = props

	const items = people.map(person =>
		<PeopleListItem
			key={person.name.first}
			person={person}
			navigateToPeopleDetail={onPressItem} />
	)

	return (
		<ScrollView style={styles.container}>
			{items}
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	}
})

export default PeopleList;
