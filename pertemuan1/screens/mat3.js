import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from 'react-native';

export default class mat3 extends Component 
{
	state = {
		password: 'oh tidak',
	}

	handleTouch(pesan) {
		this.setState({
			password: pesan,
		});
	}

	handleInput = (isi_input) => {
		this.setState({
			password: isi_input,
		});
	}

	render() {
		return(
			<View style={styles.container}>
				<Text>{ this.state.password }</Text>
				<TextInput
					 style={styles.textInput}
					 secureTextEntry={true}
					 onChangeText={ text => this.handleInput(text)}
				 />

				 <View style={styles.buttonWrapper}>
				 	<Text style={styles.buttonText}> COVID-19 </Text>
				 </View>

				 <TouchableNativeFeedback  onPress={ () =>  this.handleTouch('kesenggol') }>
				 <View style={styles.buttonWrapper}>
				 	<Text style={styles.buttonText}> Native Feedback </Text>
				 </View>
				 </TouchableNativeFeedback>

				 <TouchableOpacity onPress={() => this.handleTouch('kesenggol')}>
				 <View style={styles.buttonWrapper}>
				 	<Text style={styles.buttonText}> Opacity </Text>
				 </View>
				 </TouchableOpacity>

				 <TouchableWithoutFeedback>
				 <View style={styles.buttonWrapper}>
				 	<Text style={styles.buttonText}> Without Feedback </Text>
				 </View>
				 </TouchableWithoutFeedback>
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

	textInput: {
		borderColor: '#555',
		borderWidth: 1,
		width: '90%'
	},

	buttonWrapper: {
		paddingVertical: 10,
		paddingHorizontal: 30,
		marginTop: 20,
		backgroundColor: '#00FFB6',
		elevation: 5,
	},

	buttonText: {
		color: 'white',
		fontSize: 17,
		letterSpacing: 10,
	}
})