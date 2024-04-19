import React from 'react';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SingleProducts from './screens/SingleProducts';
import Cart from './screens/Cart';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Payment from './screens/Payment';
import ShoppingCart from './src/components/ShoppingCart';
import TabNavigator from './navigation/TabNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigator}
            options={({navigation}) => ({
              headerRight: () => <ShoppingCart navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="SingleProducts"
            component={SingleProducts}
            options={({navigation}) => ({
              headerRight: () => <ShoppingCart navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation}) => ({
              headerRight: () => <ShoppingCart navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={({navigation}) => ({
              headerRight: () => <ShoppingCart navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
