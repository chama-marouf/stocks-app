import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import global from 'app/styles/global';
import styles from './styles';
import { theme } from 'app/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { colors } = theme;
type Props = {};

const StockDetails = (props: Props) => {
  console.log('route', props.route.params?.stock);
  const stock = props.route.params?.stock;
  return (
    <View style={[global.container, styles.container]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.COLOR_WHITE} />
      <View>
        <View style={styles.backButton}>
          <Icon
            name="chevron-left"
            color={colors.COLOR_BLACK_TRANSP}
            size={24}
          />
        </View>
        <Text style={styles.name}>{stock.symbol}</Text>
        <Text style={styles.name}>{stock.name}</Text>
      </View>
      <Text>StockDetails</Text>
    </View>
  );
};

export default StockDetails;
