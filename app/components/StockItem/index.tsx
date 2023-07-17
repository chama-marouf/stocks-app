import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';

import { theme } from 'app/styles';
import LineChartComponent from '../LineChart';
import NavigationService from 'app/navigation/NavigationService';
const { colors } = theme;

type StockItemType = {
  symbol: string;
  name: string;
  exchange: string;
  sector: string;
  percentageGain: number;
  historicalData: string;
  price: number;
  onPress: void;
};

const StockItem: React.FC<StockItemType> = ({
  symbol,
  name,
  percentageGain,
  historicalData,
  price,
  onPress,
}) => {
  const transformDataForChart = data => {
    const labels = data.map(item => item.date);
    const prices = data.map(item => item.price);
    const transformedData = {
      labels,
      datasets: [
        {
          data: prices,
        },
      ],
    };

    return transformedData;
  };
  const chartData = transformDataForChart(historicalData);

  return (
    <TouchableOpacity onPress={() => onPress} style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.symbol}>{symbol} </Text>
        <Text style={styles.name}>{name} </Text>
      </View>
      <View>
        <LineChartComponent
          data={chartData}
          color={percentageGain > 0 ? colors.COLOR_GREEN : colors.COLOR_RED}
        />
      </View>
      <View>
        <Text style={styles.price}>{`$ ${price}`} </Text>
        <Text style={styles.percentageGain}>{percentageGain} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StockItem;
