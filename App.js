import { createStackNavigator } from 'react-navigation'
import { PeoplePage } from './src/pages'

export default createStackNavigator({
	'Main': {
		screen: PeoplePage
	}
})
