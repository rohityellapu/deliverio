
<<<<<<< HEAD
=======
import HomeScreen from './screens/HomeScreen';
>>>>>>> 4bbdc5f054ea0e2319f5ddceb97350aeab6b62dd
import { NativeWindStyleSheet } from "nativewind";
// import "./main.css"
// NativeWindStyleSheet.setOutput({
//   default: "native",
// });

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

