import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

import { Line } from '../components/'

export default class PeopleDetailPage extends React.Component {
	render() {
		const { person } = this.props.navigation.state.params

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: person.picture.large }}
					style={styles.avatar}/>
				<View style={styles.detailContainer}>
					<Line label="Email" content={ person.email } />
					<Line label="Estado" content={ person.location.state } />
					<Line label="Phone" content={ person.phone } />
					<Line label="Cell" content={ person.cell } />
					<Line label="Nacionalidade" content={ person.nat } />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 128
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1
	},
});
