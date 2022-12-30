
import { Platform } from 'react-native';

// For webpack (comment it if you are using Android or iOS SDK) 
import { NativeWindStyleSheet } from 'nativewind';
if (Platform.OS != 'android') {
  require('./main.css')
  NativeWindStyleSheet.setOutput({
    default: "native",
  });
}


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantScreen from './screens/RestaurantScreen';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './store';
import BasketScreen from './screens/BasketScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="Restaurant" component={ RestaurantScreen } />
          <Stack.Screen name="Basket" component={ BasketScreen }
            options={{presentation:'modal', headerShown:false}}
          />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>

  );
}

