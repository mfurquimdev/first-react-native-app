import React from 'react';
import {Text, View} from 'react-native';

import PeopleList from '../components/PeopleList'

import axios from 'axios';

export default class PeoplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			people: []
		}
	}

	componentDidMount() {
		axios
			.get('https://randomuser.me/api?nat=br&results=15')
			.then(response => {
				const {results} = response.data
				this.setState({
					people: results
				})
			})
	}

	render () {
		return (
			<View>
				<PeopleList
					people={this.state.people}
					onPressItem={pageParams => {
						this.props.navigation.navigate('PeopleDetail', pageParams);
					}}/>
			</View>
		);
	}
}
