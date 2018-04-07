import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image
} from 'react-native';

export default class List extends Component {
	constructor(props){
		super(props);

	}
  render() {
  	if(this.props.pic){
	    return (
	      <View>
	      	<Button 
	      		onPress = {this.props.handleCamButtonClick}
	      		title = 'Cam'
	      		color = '#841584'
	      	/>
	      	<Button 
	      		onPress = {this.props.handleTestClick}
	      		title = 'Test'
	      		color = '#841584'
	      	/>
	      	<Text>{this.props.list}</Text>
	      	<Image
	          style={{width: 300, height: 500}}
	          source={{uri: this.props.pic}}
	        />
	      	<Text>{this.props.testText}</Text>
	      </View>
	    );
	  } else {
		  	return (
		      <View>
		      	<Button 
		      		onPress = {this.props.handleCamButtonClick}
		      		title = 'Cam'
		      		color = '#841584'
		      	/>
		      	<Button 
		      		onPress = {this.props.handleTestClick}
		      		title = 'Test'
		      		color = '#841584'
		      	/>
		      	<Text>{this.props.list}</Text>
		      </View>
		    );
	  }
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: .25,
    alignItems: 'center',
  }
});