import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {TodoForm} from './TodoForm';
import {connect} from  'react-redux';

export default class _Todo extends Component{
    static defaultProps = {
        todos: []
    }
    constructor(){
        super();
        this.state={
            newtodo: ''
        }
    }
    handleChange(text){
        this.setState({newtodo: text});

    }
    handlePress = () =>{

        this.props.createTodo(this.state.newtodo);
        this.setState({newtodo: ''});

    }

    render(){
        return(
            <View style={{padding: 20}}>
                <TodoForm
                    handleChange={this.handleChange.bind(this)}
                    handlePress={this.handlePress.bind(this)}
                    value ={this.state.newtodo}
                />
                <View>
                    {this.props.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

        createTodo: (todo) => {
            dispatch({type: 'CREATE_TODO' , payload: todo })

    }
};

const mapStateToProps = (state) => ({
    todos: state.todos
});


 const Todo= connect (mapStateToProps, mapDispatchToProps)(_Todo);


