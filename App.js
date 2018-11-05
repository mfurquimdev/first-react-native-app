import { createStackNavigator } from 'react-navigation'
import { PeoplePage, PeopleDetailPage } from './src/pages'

export default createStackNavigator({
	'Main': {
		screen: PeoplePage
	},
	'PeopleDetail': {
		screen: PeopleDetailPage
	}
}, {
	navigationOptions: {
		title: 'Pessoas',
		headerStyle: {
			backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
			borderBottomColor: '#c5c5c5',
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 30,
			alignSelf: 'center', // Not working!
		}
	}
});
