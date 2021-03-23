import React, {useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import Input from './Input'
 import {connect} from 'react-redux'
import { addTodo } from '../actions';


class TodoForm extends React.Component {
 
    constructor(props){
        super(props);

        this.state = {text: ''}
        // const [text, setText] = useState('');
    }

    onChangeText(text){
        this.setState({
            text
        });
    }

    onPress() {
        this.props.dispatchAddTodo(this.state.text)
        console.log("clicou" + this.state.text)
    }

    render(){
        const { text } = this.state.text
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                        />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="ADD"
                        onPress={() => 
                            this.onPress()
                        }/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 4
    },
    buttonContainer: {
        flex: 1
    }


})

const mapDispatchToProps = dispatch => {
    return{
        dispatchAddTodo: text => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(TodoForm)
