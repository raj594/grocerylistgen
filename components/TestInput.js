import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TextInput,
  View,
  Button
} from 'react-native';

export default class TestInput extends Component {
	constructor(props){
		super(props);
    this.state = {
      text: 'enter item'
    }

	}
  render() {
    return (
      <TextInput
        style = {{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText = {(text) => this.setState({text})}
        value = {this.state.text}
        onSubmitEditing = {(e) => this.props.handleItemInput(e, this.state.text)}
      />
    );
  }
}