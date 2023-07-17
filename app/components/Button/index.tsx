import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {
  onPress?: () => void;
  title: string;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
