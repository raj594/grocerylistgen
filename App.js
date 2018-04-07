/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Cam from './components/Cam';
import List from './components/List';
import TestInput from './components/TestInput';
import RNTesseractOcr from 'react-native-tesseract-ocr';

const tessOptions = {

};

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      masterList: [],
      camOrList: 'list',
      picPath: '',
      picText: ''
    }
  }

  render() {
    if ( this.state.camOrList === 'list' ) {
      return ( 
        <List 
          list = { this.state.masterList } 
          handleCamButtonClick = { this.handleCamButtonClick }
          handleTestClick = { this.handleTestClick }
          pic = { this.state.picPath }
          testText = { this.state.picText }
        />
      );
    } else if ( this.state.camOrList === 'cam' ){
      return (
        <Cam 
          handlePictureCapture = { this.handlePictureCapture }
        />
      );
    } else if ( this.state.camOrList === 'test' ){
      return (
        <TestInput 
          handleItemInput = { this.handleItemInput }
        />
      );
    }
  }

  handleCamButtonClick = event => {
    event.preventDefault()
    this.setState({
      camOrList: 'cam'
    })
  }

  handleTestClick = event => {
    event.preventDefault()
    this.setState({
      camOrList: 'test'
    })
  }

  handleItemInput = (event, newItem) => {
    event.preventDefault();
    this.setState({
      camOrList: 'list',
      masterList: [...this.state.masterList, newItem + "\n"]
    })
  }

  handlePictureCapture = pic => {
    this.setState({
      camOrList: 'list',
      picPath: pic,
    });

    this.readTextFromPic(pic);
  }

  readTextFromPic (pic) {

    picPath = pic.replace('file://', '');

    RNTesseractOcr.recognize(picPath, 'LANG_ENGLISH', tessOptions)
      .then((result) => {
        this.setState({
          picText: result
        })
      })
      .catch((err) => {
        console.log("OCR Error: ", err);
      })
      .done();
    }
}