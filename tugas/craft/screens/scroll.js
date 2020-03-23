import React, { Component } from 'react';
import {
	View,
	StatusBar,
	Text,
	Image,
	StyleSheet,
	ScrollView
} from 'react-native';

class scroll extends Component {
	render() {
		return(
			<View style={{flex: 1}}>	
				<View style={styles.header}>
					<Text style={styles.text1}>Ini Header</Text>
				</View>
				<View style={{flex: 1}}>
					<View style={styles.hoz}>
							<ScrollView horizontal={true}>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
								<Text style={styles.text2}> Hello </Text>
							</ScrollView>
					</View>
					<View style={styles.ver}>
							<ScrollView>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							<Text style={styles.text3}> Hello World</Text>
							</ScrollView>
					</View>
				</View>
				<View style={styles.footer}>
					<Text style={styles.text1}>Ini footer</Text>
				</View>
			</View>
		)
	}
}

export default scroll;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
	},

	header: {
		backgroundColor: '#2BC9FC',
		height: 50,
		marginTop: 33,
	},

	text1: {
		fontWeight: 'bold',
		fontSize: 25,
		alignSelf: 'center',
		paddingTop: 5,
	},

	text2: {
		padding: 5,
		borderLeftColor: 'black',
		borderLeftWidth: 1,
		fontSize: 25,
	},

	ver: {
		paddingTop: 3,
	},

	text3: {
		alignSelf: 'center',
		fontSize: 20,
		paddingTop: 3,
		paddingBottom: 3,
	},

	footer: {
		backgroundColor: '#2BC9FC',
		height: 50,
		bottom: 0,
	},
});