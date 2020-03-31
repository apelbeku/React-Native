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
					<View style={styles.right}>
						<Text style={styles.tright}>Pulang...!!!!</Text>
					</View>
						<Image source={{uri: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1535337804/attached_image/jarang-bertemu-dokter-berkat-manfaat-apel-alodokter.jpg'}} style={styles.himage} />
					<View style={styles.left}>
					</View>
				</View>
				<View style={{flex: 1}}>
					<View style={styles.hoz}>
							<ScrollView horizontal={true}>
								<Image source={{uri: 'https://images.unsplash.com/photo-1510951366214-f8ce654864ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1533647326420-d4097513dc42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1554610975-1fa324cfb60b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584645511189-2a471d586ac2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=782&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1496347646636-ea47f7d6b37b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584267385289-81fdaa6efe7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=728&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1571903753771-ce22acbc441c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1546423237-abf72876d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1545911678-09d0843ccef1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584543738381-0ee650a7bcaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584543738381-0ee650a7bcaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584545848939-e1bfaaa499fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1583307573996-6e7d484919a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=805&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1584608354188-fa95b8514f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1501879779179-4576bae71d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1502065818465-68b2b73e85aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=794&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1566245172841-7fc57afb31d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1569315616076-70bf41b594c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1575403052258-f92b24125eb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
								<Image source={{uri: 'https://images.unsplash.com/photo-1513165533842-2a0dd8b51a74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'}} style={styles.image} />
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
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center ',
	},



	himage: {
		width: 100,
		height: 100,
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

	image: {
		width: 300,
		height: 150,
		margin: 18,
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