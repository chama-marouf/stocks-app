import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import { StatusBar } from 'react-native';

import Markets from 'app/screens/Markets';
import StockDetails from 'app/screens/Markets/StockDetails';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Markets" component={Markets} options={homeOptions} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
    </Stack.Navigator>
  );
};

export default App;
