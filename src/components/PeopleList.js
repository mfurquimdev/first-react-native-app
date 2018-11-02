import React from 'react';
import {View, Text} from 'react-native';

const PeopleList = (props) => {
	const {people} = props;

	const textElements = people.map(person => {
		const {first} = person.name;
		return <Text key={first}>{first}</Text>
	})

	return (
		<View>
			{textElements}
		</View>
	)
};

export default PeopleList;
