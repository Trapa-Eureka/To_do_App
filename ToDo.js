import React, { Component } from 'react';
import { View, Text, touchableOpacity, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, hight } = Dimensions.get("window");

export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false
    };
    render () {
        const { isCompleted } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                </TouchableOpacity>
                <Text style={styles.text}>To Do</Text>
            </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    };
}

const styles = StyleSheet.create ({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#f23657"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
})