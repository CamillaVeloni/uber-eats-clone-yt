import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = 375; // constant, 375 é o default width do iphone 6 / 7 / 8 

const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Icon icon="home" label="Home" />
      <Icon icon="search" label="Procurar" />
      <Icon icon="shopping-bag" label="Mercado" />
      <Icon icon="receipt" label="Pedidos" />
      <Icon icon="user" label="Conta" />
    </View>
  );
};

const Icon = ({ icon, label }) => (
  <TouchableOpacity onPress={() => {}}>
    <FontAwesome5 name={icon} size={23} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginHorizontal: 30,
  },
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
  label: {
    fontSize: SCREEN_WIDTH > SCALE ? 14 : 10
  }
});

export default BottomTab;
