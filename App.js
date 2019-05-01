import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>Simple To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e91e63',
    alignItems: 'center'
  },
  title: {
    color: "#fff",
    fontSize: 25,
    marginTop: 50,
    fontWeight: "600",
    marginBottom: 30
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -0.5,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  }
});
