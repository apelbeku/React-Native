import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	TouchableOpacity
} from 'react-native';

export default class event extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.register}>Register</Text>
				
				<View>
				<Text>nama</Text>
				<TextInput style={styles.textInput}/>
				</View>

				<View>
				<Text>nama</Text>
				<TextInput style={styles.textInput}/>
				</View>

				<View>
				<Text>nama</Text>
				<TextInput style={styles.textInput}/>
				</View>


				 <TouchableNativeFeedback>
				 <View style={styles.buttonWrapper}>
				 	<Text style={styles.buttonText}> Submit </Text>
				 </View>
				 </TouchableNativeFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	scrollView: {
		height: '100%'
	},

	register: {
		fontSize: 40,
		fontWeight: 'bold',
		paddingBottom: 15,
	},

	textInput: {
		borderColor: '#555',
		borderWidth: 1,
		paddingVertical: 10,
	},

	buttonWrapper: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		marginTop: 20,
		backgroundColor: '#0786DF',
		elevation: 5,
		borderRadius: 10,
	},

	buttonText: {
		color: 'white',
		fontSize: 17,
		letterSpacing: 3,
		fontSize: 19,
	}
})