import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export const TodoForm = (props) => (
    <View style={{flexDirection: 'row'}}>
          <TextInput style={{flex: 0.7}} value={props.value} onChangeText={props.handleChange} />
                <TouchableOpacity style={{flex: 0.3,borderWidth: 1, borderColor:'blue', height: 40, borderRadius: 3, justifyContent: 'center', alignItems: 'center'}} onPress={props.handlePress} >
                        <Text >SUBMIT</Text>
                </TouchableOpacity>
    </View>
);
