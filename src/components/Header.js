import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => (
	<View style={style.container}>
		<Text style={style.title}>{props.title}</Text>
	</View>
);

/* StyleSheet */
const style = StyleSheet.create({
	container: {
		backgroundColor: '#6ca2f7',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: '#fff'
	}
})

export default Header;

