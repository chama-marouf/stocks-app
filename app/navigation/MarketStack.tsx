import * as React from 'react';
import { Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ThemeController from '../components/ThemeController';

import Markets from 'app/screens/Markets';
import StockDetails from 'app/screens/Markets/StockDetails';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'Home',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};

interface IProps {
  theme: Theme;
}

const MarketStack: React.FC<IProps> = (props: IProps) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Markets" component={Markets} options={homeOptions} />
      <Stack.Screen name="StockDetails" component={StockDetails} />
    </Stack.Navigator>
  );
};

export default MarketStack;
