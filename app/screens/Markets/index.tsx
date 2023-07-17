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

interface StockData {
  id: string;
  symbol: string;
  name: string;
  percentageGain: number;
  historicalData: any; // Adjust the type of historicalData as per your needs
  price: number;
}

interface MarketData {
  [key: string]: StockData[];
}

type Route = {
  key: string;
  title: string;
};

type MarketsProps = {
  navigation: any; // TODO: fix this type
};

const Markets: React.FC<MarketsProps> = ({ navigation }) => {
  const [index, setIndex] = useState<number>(0);
  const [filteredData, setFilteredData] = useState<MarketData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const routes: Route[] = [
    { key: 'first', title: 'Junior Market' },
    { key: 'second', title: 'Main Market' },
    { key: 'third', title: 'Growth Market' },
  ];

  useEffect(() => {
    const filteredMainMarket = MainMarket.filter((item: StockData) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchQuery.toLowerCase());
    });

    const filteredJuniorMarket = JuniorMarket.filter((item: StockData) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(searchQuery.toLowerCase());
    });

    const filteredGrowthMarket = GrowthMarket.filter((item: StockData) => {
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
        renderItem={({ item }: { item: StockData }) => {
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
        renderItem={({ item }: { item: StockData }) => (
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
        renderItem={({ item }: { item: StockData }) => (
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
