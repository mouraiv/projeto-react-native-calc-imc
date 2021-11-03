import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ValidProvider from './src/context/'
import Form from './src/component/form/'
import Imc from './src/pages/imc/';

const Stack = createNativeStackNavigator();

function App () {

  return (
    <ValidProvider>
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Form" component={Form} /*options={{headerShown:false}}*/ />
        <Stack.Screen name="Imc" component={Imc} />
      </Stack.Navigator>

    </NavigationContainer>
    </ValidProvider>
  )
};

export default App;
