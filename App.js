import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { Header } from 'react-native-elements'
import FacebookScreen from './screens/FacebookScreen';
import InstagramScreen from './screens/InstagramScreen';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <Header backgroundColor = {'blue'}
          centerComponent={{
            text : 'Buzz App',
            style : {color : 'white', fontSize: 15, fontWeight: 700}
          }}
        />
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : FacebookScreen},
  Instagram : {screen : InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);