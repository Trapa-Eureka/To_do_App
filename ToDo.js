import React, { Component } from 'react';
import { View, Text, touchableOpacity, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, hight } = Dimensions.get("window");

export default class ToDo extends Component {
    state = {
        isEditing: false,
        isCompleted: false
    };
    render () {
        const { isCompleted, isEditing } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]} />
                    </TouchableOpacity>
                    <Text style={[styles.text, isCompleted ? styles.completedText : styles.uncompletedText]}>To Do</Text>
                </View>
                {isEditing ? (
                    // Editing Mode
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._finishEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✓</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    // Editing Mode end
                ) : (
                    <View style={styles.actions}>
                        <TouchableOpacity onPressOut={this._startEditing}>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✎</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.actionContainer}>
                                <Text style={styles.actionText}>✗</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
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
    _startEditing = () => {
        this.setState({
            isEditing: true
        });
    };
    _finishEditing = () => {
        this.setState({
            isEditing: false
        });
    };
}

const styles = StyleSheet.create ({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
    },
    completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {
        color: "#353839"
    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2,
        justifyContent: "space-between"
    },
    actions: {
        flexDirection: "row"
    },
    actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    actionText: {
        fontSize: 25,
        color: "#bbb"
    }
})