import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableNativeFeedback,
	ScrollView,
	KeyboardAvoidingView,
	Alert
} from 'react-native';

export default class event extends Component {

	state = {
		name: '',
		email: '',
		password: '',
	}

	inputName(ambil) {
		this.setState({
			name: ambil,
		});
	}

	inputEmail(ambil) {
		this.setState({
			email: ambil,
		});
	}

	password(ambil) {
		var pass 		= ambil.toString();
		var lengthPass	= pass.length;
		var Simbol 		= '*';
		return Simbol.repeat(lengthPass); 
	}

	inputPassword(result) {
		this.setState({
			password: this.password(result),
		});
	}

	submit() {
		Alert.alert(
			'Apakah anda yakin ?',
			'Nama : ' + this.state.name + '\n' +
			'Email : ' + this.state.email + '\n' +
			'password : ' + this.state.password + '\n'
		)
	}

	render() {
		return(
			<KeyboardAvoidingView style={{flex:1}} behavior="height">

				<View style={styles.container}>
					<View style={styles.content}>
						<Text style={styles.register}>REGISTER</Text>
						<View style={styles.textInput}>
							<Text style={styles.text}>
								Name :
							</Text>
							<TextInput 
								style={styles.input}
								onChangeText={ (text) => this.inputName(text) } 
							/>
						</View>
						<View style={styles.textInput}>
							<Text style={styles.text}>
								Email :
							</Text>
							<TextInput 
								style={styles.input}
								onChangeText={ (text) => this.inputEmail(text) }
							 />
						</View>
						<View style={styles.textInput}>
							<Text style={styles.text}>
								Password :
							</Text>
							<TextInput 
								style={styles.input}
								secureTextEntry={true}
								onChangeText={ (text) => this.inputPassword(text) }
							 />
						</View>

						<View style={styles.tom}>
							<TouchableNativeFeedback>
							<View style={styles.button}>
								<Text style={styles.btnText} onPress={ () => this.submit() }>
									Submit
								</Text>
							</View>				
							</TouchableNativeFeedback>
						</View>
					</View>
				</View>
				
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},

	content: {
		backgroundColor: '#FFEAEA',
		padding: 30,
		paddingTop: 30,
		paddingBottom: 20,
		width: '90%',
		borderRadius: 5,
	},

	register: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		letterSpacing: 2,
		color: '#FF607C'

	},

	textInput: {
		marginRight: 10,
		marginLeft: 10,
		paddingTop: 25,
	},

	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#FF607C'
	},

	text: {
		fontSize: 18,
		color: '#FF607C',
		paddingBottom: 6
	},

	tom: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		borderRadius: 5,
	},

	button: {
		width: '30%',
		paddingVertical: 10
	},

	btnText: {
		fontSize: 20,
		color: '#FF607C',
		alignSelf: 'center'
	}

});