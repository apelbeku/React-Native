import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class App extends Component {
	render() {
		return (
			<View style={{flex: 1,}}>
				<Text style={{flex: 1, backgroundColor: 'aqua'}}>Hello Word</Text>
				<Text style={{flex: 2, backgroundColor: '#1400FF'}}>Hello Word</Text>
				<Text style={{flex: 3, backgroundColor: 'rgb{62, 221, 187}'}}>Hello Word</Text>
			</View>
		)
	}
}

export default App;