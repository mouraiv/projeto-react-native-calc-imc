import React from 'react';
import {
  View,
  Text
} from 'react-native';

const ResultIMC = (props) => {

  return (
    <View>
        <Text>{props.resultIMC}</Text>
        <Text>{props.messengerIMC}</Text>
    </View>
  )
};

export default ResultIMC ;