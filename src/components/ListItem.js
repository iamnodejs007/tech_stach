import React, { Component } from 'react';
import {CardSection} from './common';
import { Text, View,TouchableWithoutFeedback,LayoutAnimation,UIManager, Platform } from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';

if (Platform.OS === 'android') {
 UIManager.setLayoutAnimationEnabledExperimental(true);
}

class ListItem extends Component {
    componentWillUpdate(){
         LayoutAnimation.spring()
    }
    renderDesc(){
        const {library, expanded}= this.props;
        if (expanded){
            return(
                <CardSection>
                <Text style={{flex:1 }}>
                {library.item.description}
                </Text>
                </CardSection>
            )
        }
    }
    render(){
        const { textStyle } = styles;
        const {id, title} =this.props.library.item;
        


        return(
       <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
       <View>
        <CardSection>
         <Text style={textStyle}>{title}</Text>
        </CardSection>
        {this.renderDesc()}
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

const mapStateToProps = (state,ownProps) =>{
    console.log(ownProps)
    const expanded = state.selectedLibraryId === ownProps.library.item.id
    return {expanded}
}

export default connect(mapStateToProps,actions)(ListItem);