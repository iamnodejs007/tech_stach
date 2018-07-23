import React, { Component } from 'react';
import {CardSection} from './common';
import { Text, View,TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';



class ListItem extends Component {
    
    render(){
        const { textStyle } = styles;
        const {id, title} =this.props.library.item;
        console.log(this.props)
        return(
       <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
       <View>
        <CardSection>
         <Text style={textStyle}>{title}</Text>
        </CardSection>
        </View>
       </TouchableWithoutFeedback> 
        )
    }
}

const styles = {
    textStyle:{
        fontSize:18,
        paddingLeft:15
    }
}

export default connect(null,actions)(ListItem);