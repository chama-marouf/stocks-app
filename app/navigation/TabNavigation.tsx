import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import MarketStack from './MarketStack';
import Portflolio from 'app/screens/Portfolio';
import News from 'app/screens/News';
import { theme } from 'app/styles';
const { colors } = theme;

import MarketsIcon from 'app/assets/icons/icn_arrows-down-up.svg';
import PieChartIcon from 'app/assets/icons/icn_pie-chart.svg';
import NewsIcon from 'app/assets/icons/icn_news.svg';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,

            headerTitleAlign: 'left',

            title: 'Prtfolio',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <PieChartIcon width={24} fill={colors.COLOR_PRIMARY} />
              ) : (
                <PieChartIcon width={24} />
              ),
          }}
          name="Portfolio"
          component={Portflolio}
        />
        <Tab.Screen
          options={{
            headerShown: false,

            headerTitleAlign: 'left',

            title: 'Markets',

            tabBarIcon: ({ focused }) =>
              focused ? (
                <MarketsIcon width={24} fill={colors.COLOR_PRIMARY} />
              ) : (
                <MarketsIcon width={24} />
              ),
          }}
          name="MarketsStack"
          component={MarketStack}
        />
        <Tab.Screen
          options={{
            headerShown: false,

            headerTitleAlign: 'left',

            title: 'News',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <NewsIcon width={24} fill={colors.COLOR_PRIMARY} />
              ) : (
                <NewsIcon width={24} />
              ),
          }}
          name="News"
          component={News}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabs;
