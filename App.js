import { createStackNavigator } from 'react-navigation'
import { PeoplePage, PeopleDetailPage } from './src/pages'

import { capitalizeFirstLetter} from './src/util';

export default createStackNavigator({
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({ navigation }) => {
			//const  personName = capitalizeFirstLetter(
			//	navigation.state.params.person.name.first
			//);
			const personName = "@todo GAMBIARRA"
			return ({
				title: personName,
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
					textAlign: 'center',
					flex:1,
				}
			});
		}
	},
	'Main': {
		screen: PeoplePage
	},
}, {
	navigationOptions: {
		title: 'Pessoas',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
			borderBottomColor: '#c5c5c5',
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 30,
			textAlign: 'center',
			flex:1,
		},
	}
});
