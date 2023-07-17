import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import styles from './styles';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';

import MainMarket from 'app/data/stocks.json';
import JuniorMarket from 'app/data/stocks.json';
import GrowthMarket from 'app/data/stocks.json';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { theme } from 'app/styles';
import StockItem from 'app/components/StockItem';
const { colors } = theme;

const MainMarketScene = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={MainMarket}
      renderItem={({ item }) => (
        <StockItem
          symbol={item.symbol}
          name={item.name}
          percentageGain={item.percentageGain}
          historicalData={item.historicalData}
          price={item.price}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

const JuniorMarketScene = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={JuniorMarket}
      renderItem={({ item }) => (
        <StockItem
          symbol={item.symbol}
          name={item.name}
          percentageGain={item.percentageGain}
          historicalData={item.historicalData}
          price={item.price}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

const GrowthMarketScene = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={GrowthMarket}
      renderItem={({ item }) => (
        <StockItem
          symbol={item.symbol}
          name={item.name}
          percentageGain={item.percentageGain}
          historicalData={item.historicalData}
          price={item.price}
        />
      )}
      keyExtractor={item => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  first: JuniorMarketScene,
  second: MainMarketScene,
  third: GrowthMarketScene,
});

const Markets: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Junior Market' },
    { key: 'second', title: 'Main Market' },
    { key: 'third', title: 'Growth Market' },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.COLOR_PRIMARY}
      />
      <View style={styles.topContainer}>
        <Header />
        <Text style={styles.title}>Markets</Text>
        <SearchBar />
      </View>
      <View style={{ flex: 1 }}>
        <TabView
          style={{ flex: 1 }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{
                backgroundColor: colors.COLOR_PRIMARY,
                elevation: 0,
              }}
              indicatorStyle={{
                backgroundColor: colors.COLOR_PRIMARY,
                borderRadius: 4,
                alignSelf: 'center',
              }}
              activeColor="#fff"
              inactiveColor="#737474"
              renderLabel={({ route, focused, color }) => (
                <Text style={{ fontSize: 14 }}>{route.title}</Text>
              )}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Markets;
