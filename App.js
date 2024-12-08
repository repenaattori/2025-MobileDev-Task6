
import {Text, View } from 'react-native';
import Styles from './styles/Styles';
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';

export default function App() {
  const [x, setX] = useState('red');

  return (
    <View style={Styles.container}>
      <View testID='box' style={Styles.box}/>
    </View>
  );
}

