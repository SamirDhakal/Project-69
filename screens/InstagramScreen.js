import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.textstyle}>Instagram</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop : 200,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center'
    },
    textstyle:{
        color : 'blue',
        fontSize : 20,
        alignItems : 'center',
        justifyContent : 'center'
    }
})