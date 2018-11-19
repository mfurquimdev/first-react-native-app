import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import PeopleList from '../components/PeopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: [],
			loading: false,
		}
	}

	componentDidMount() {
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get('https://randomuser.me/api?nat=br&results=15')
				.then(response => {
					const {results} = response.data
					this.setState({
						people: results,
						loading: false,
					})
				})
		}, 500)
	}

	render () {
		return (
			<View style={styles.container}>
				{
					this.state.loading
						? <ActivityIndicator style={styles.loading} size="large" color="#6ca2f7" />
						: <PeopleList
							people={this.state.people}
							onPressItem={pageParams => {
								this.props.navigation.navigate('PeopleDetail', pageParams);
							}}/>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
})
