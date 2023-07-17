import { Text, View, StatusBar, Dimensions } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from 'app/styles';
import LineChartComponent from 'app/components/LineChart';
import Button from 'app/components/Button';
import PeriodButton from 'app/components/PeriodButton';
const { colors } = theme;

type Props = {
  route: any; // TODO define type for RouteProp<any, string>;
  navigation: any; //TODO define Navigation prop interface here?
};

const { width } = Dimensions.get('window');
const periods: Array<String> = ['1D', '7D', '1M', '3M', '1Y'];

const StockDetails = (props: Props) => {
  const [period, setPeriod] = useState('7D');
  const stock = props.route.params?.stock;
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
  const chartData = transformDataForChart(stock.historicalData);

  const addToPortfolio = () => {
    console.log('Add to portfolio');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.COLOR_WHITE} />
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Icon
            name="chevron-left"
            size={24}
            color={colors.COLOR_BLACK_TRANSP}
            onPress={() => props.navigation.navigate('Markets')}
          />
        </View>
        <View>
          <Text style={styles.symbol}>{stock.symbol}</Text>
          <Text style={styles.name}>{stock.name}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.price}>{`$ ${stock.price}`}</Text>
        <Text
          style={[
            styles.percentageGain,
            {
              color:
                stock.percentageGain > 0
                  ? colors.COLOR_GREEN
                  : colors.COLOR_RED,
            },
          ]}>
          {`${stock.percentageGain} %`}
        </Text>
        <View style={{ marginLeft: -88 }}>
          <LineChartComponent
            height={300}
            width={width + 100}
            data={chartData}
            color={colors.COLOR_BLACK}
          />
        </View>
        <View style={styles.timeLineButtonsContainer}>
          {periods.map(item => (
            <PeriodButton active={period === item} title={item} />
          ))}
        </View>
        <View style={styles.pricesInfo}>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Close price</Text>
            <Text style={styles.priceValue}>$25,699.90</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Last trade price</Text>
            <Text style={styles.priceValue}>$25,699.90</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Outstanding</Text>
            <Text style={styles.priceValue}>$25,699.90</Text>
          </View>
          <View style={styles.priceItem}>
            <Text style={styles.priceTitle}>Market value</Text>
            <Text style={styles.priceValue}>$255,699.90</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={addToPortfolio} title="Add to portfolio" />
        </View>
      </View>
    </View>
  );
};

export default StockDetails;
