import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

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
		}, 1500)
	}

	render () {
		return (
			<View>
				{
					this.state.loading
						? <ActivityIndicator size="large" color="#6ca2f7" />
						: null
				}
				<PeopleList
					people={this.state.people}
					onPressItem={pageParams => {
						this.props.navigation.navigate('PeopleDetail', pageParams);
					}}/>
			</View>
		);
	}
}
