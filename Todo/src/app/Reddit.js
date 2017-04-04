import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';

export default class Reddit extends Component{
    constructor(props){
        super(props);
        this.state={
            pos: []
        }
    }
    componentWillMount(){
        fetch('https://www.reddit.com/.json', {
               Accept:'application/json'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({pos: data.data.children});
         });
    }
    render(){
        return(
            <View>
                {this.state.pos.map(post => (
                    <Text >{post.data.author}</Text>
                ))
               }
            </View>
        )
    }

}