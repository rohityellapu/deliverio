
import HomeScreen from './screens/HomeScreen';
import { NativeWindStyleSheet } from "nativewind";

// For webpack
import "./main.css"
NativeWindStyleSheet.setOutput({
  default: "native",
});

import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

