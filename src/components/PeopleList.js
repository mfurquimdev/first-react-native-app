import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = (props) => {
	const { people, onPressItem } = props

	return (
		<FlatList
			style={styles.container}
			data={people}
			renderItem={({item}) => (
				<PeopleListItem
					person={item}
					navigateToPeopleDetail={onPressItem}
				/>
			)}
			keyExtractor={item => item.login.uuid}
		/>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	}
})

export default PeopleList;
