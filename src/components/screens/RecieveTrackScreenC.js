import React from 'react';
import { View, Text, StyleSheet, Constants } from 'react-native';

// package Menu

export default class RecieveTrack extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text> This is the Recieve Track Screen! </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
