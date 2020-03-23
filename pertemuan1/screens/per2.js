import React, { Component } from 'react'; import {View, StatusBar,
	Text,
	Image,
	Alert,
	Button,
	Platform,
	StyleSheet
} from 'react-native';

class per2 extends Component {
	render() {
		return(
			<View style={{flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight || 0}}>
				<StatusBar barStyle="light-content" />
			
				{/*Header*/}
				<View style={styles.header}>
					<Text style={styles.title}> Ini Header </Text>
				</View>
				
				{/*Content*/}
				<View style={{flex: 1,}}>
					<Text> Content </Text>
					<View style={styles.content}>
						<Button 
							title= "This is Button"
							onPress={() => {Alert.alert('')}}
						/>
						
						<Image
							source={{uri: 'https://images.unsplash.com/photo-1542208480-1b251f025175?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80'}}
							style={{ width: '100%', height: '100%', marginBottom: 20, }}
						 />
					</View>
				</View>
				
				{/*Footer*/}
				<View>
					<Text style={styles.footer}> Footer </Text>
				</View>
			</View>
		)
	}
}

export default per2;

const styles = StyleSheet.create({
	header: {
		height: 60,
		flexDirection: 'row',
		paddingHorizontal: 20,
		justifyContent: 'center',
		backgroundColor: '#eee',
	},

	title: {
		fontSize: 35,										
		color: '#2196f3',
		fontWeight: 'bold',
		alignSelf: 'center',
	},

	footer: {
		bottom: 0,
		height: 50,
		borderTopWidth: 2,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#eee',
		borderTopColor: '#2e2e2e'
	}
});