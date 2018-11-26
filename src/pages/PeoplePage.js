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
			error: false,
			errorMessage: "",
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
				}).catch(e => {
					this.setState({
						loading: false,
						error: true,
						errorMessage: e,
					})
					console.log(e.toString())
				});
		}, 500)
	}

	renderLoading() {
		if (this.state.loading) {
			return <ActivityIndicator style={styles.loading} size="large" color="#6ca2f7" />
		}
		else if (this.state.error) {
				return <Text style={styles.error}>{this.state.errorMessage.toString()}</Text>
		}

		return  <PeopleList
			people={this.state.people}
			onPressItem={pageParams => {
				this.props.navigation.navigate('PeopleDetail', pageParams);
			}}/>
	}


	render () {
		return (
			<View style={styles.container}>
				{this.renderLoading()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	error: {
		color: 'red',
		alignSelf: "center",
		fontSize: 18,
	},
})
