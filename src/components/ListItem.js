import React, { Component } from 'react';
import {CardSection} from './common';
import { Text } from 'react-native';

export default class ListItem extends Component {
    
    render(){
        const { textStyle } = styles;
        console.log(this.props.library.item.title)
        return(
        <CardSection>
         <Text style={textStyle}>{this.props.library.item.title}</Text>
        </CardSection>)
    }
}

const styles = {
    textStyle:{
        fontSize:18,
        paddingLeft:15
    }
}