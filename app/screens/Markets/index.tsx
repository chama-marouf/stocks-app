import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import styles from './styles';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';

import MainMarket from 'app/data/mainMarket.json';
import JuniorMarket from 'app/data/juniorMarket.json';
import GrowthMarket from 'app/data/growthMarket.json';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { theme } from 'app/styles';
import StockItem from 'app/components/StockItem';

const { colors } = theme;

const MarketsProps = {};

const Markets: React.FC = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [routes] = useState([
    { key: 'first', title: 'Junior Market' },
    { key: 'second', title: 'Main Market' },
    { key: 'third', title: 'Growth Market' },
  ]);

  useEffect(() => {
    const filteredMainMarket = MainMarket.filter(item => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchQuery.toLowerCase());
    });

    const filteredJuniorMarket = JuniorMarket.filter(item => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchQuery.toLowerCase());
    });

    const filteredGrowthMarket = GrowthMarket.filter(item => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchQuery.toLowerCase());
    });

    setFilteredData([
      filteredJuniorMarket,
      filteredMainMarket,
      filteredGrowthMarket,
    ]);
  }, [searchQuery]);
  const MainMarketScene = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredData[0]}
        renderItem={({ item }) => {
          console.log('item', item.price);
          return (
            <StockItem
              symbol={item.symbol}
              name={item.name}
              percentageGain={item.percentageGain}
              historicalData={item.historicalData}
              price={item.price}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );

  const JuniorMarketScene = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredData[1]}
        renderItem={({ item }) => (
          <StockItem
            symbol={item.symbol}
            name={item.name}
            percentageGain={item.percentageGain}
            historicalData={item.historicalData}
            price={item.price}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

  const GrowthMarketScene = () => (
    <View style={{ flex: 1 }}>
      <FlatList
        data={filteredData[2]}
        renderItem={({ item }) => (
          <StockItem
            symbol={item.symbol}
            name={item.name}
            percentageGain={item.percentageGain}
            historicalData={item.historicalData}
            price={item.price}
            navigation={navigation}
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

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={[styles.container, styles.container]}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.COLOR_PRIMARY}
      />
      <View style={styles.topContainer}>
        <Header />
        <Text style={styles.title}>Markets</Text>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
        />
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
