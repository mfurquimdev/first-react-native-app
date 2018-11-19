import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

import { Line } from '../components/'

export default class PeopleDetailPage extends React.Component {
	render() {
		//const { person } = this.props.navigation.state.params
		const person = {"gender":"female","name":{"title":"miss","first":"bianca","last":"ferreira"},"location":{"street":"8384 rua vinte e quatro de outubro","city":"são joão de meriti","state":"piauí","postcode":66449,"coordinates":{"latitude":"-0.8658","longitude":"141.9979"},"timezone":{"offset":"-11:00","description":"Midway Island, Samoa"}},"email":"bianca.ferreira@example.com","login":{"uuid":"1710dfda-a4a8-4dd9-ad6c-1833a08b03d7","username":"silverbutterfly584","password":"hastings","salt":"tMI22IPZ","md5":"b5516afec2a97c1235dfe4baf06dbc03","sha1":"d167ae213765fc7820c23fe1ac16f3949272798a","sha256":"1ac148bd72d72c5c7732b602f058675d122c8debaab20ec9c93633be7ac1a37a"},"dob":{"date":"1956-10-29T17:20:43Z","age":62},"registered":{"date":"2005-05-13T20:57:27Z","age":13},"phone":"(05) 7028-4137","cell":"(16) 9247-6232","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/65.jpg","medium":"https://randomuser.me/api/portraits/med/women/65.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/65.jpg"},"nat":"BR"};

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
