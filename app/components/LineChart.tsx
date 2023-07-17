import { View, Text } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-chart-kit';

type Props = {
  data: any;
  color: string;
};

const LineChartComponent = (props: Props) => {
  return (
    <View>
      <LineChart
        data={props.data}
        // yAxisInterval={100}
        // XAxisInterval={1}
        height={70}
        width={120}
        withInnerLines={false}
        withShadow={false}
        chartConfig={{
          horizontalOffset: 0.2,
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => props.color,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: '0',
          },
        }}
        bezier
        withHorizontalLabels={false}
        withVerticalLines={false}
        withHorizontalLines={false}
      />
    </View>
  );
};

export default LineChartComponent;
