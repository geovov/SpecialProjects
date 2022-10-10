import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={OriginalScreen} />
        <Stack.Screen name="Next" component={NextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function OriginalScreen({navigation}){
  return (
    <View style={styles.container}>
      <Text>Click this button below to go to the next screen</Text>
      <Button
        title="Next Screen"
        color="#f194ff"
        onPress={() => navigation.navigate("Next")}
      />

      <StatusBar style="auto" />
    </View>
  );

}


function NextScreen(){
  return(
    <View style = {styles.container}>
      <Text>You made it to the next screen!</Text>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
