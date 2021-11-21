import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderTabs = (props) => {

  return (
    <View style={styles.container}>
      <HeaderButton
        id='delivery'
        label="Entrega"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        id='pickup'
        label="Para retirar"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      ...styles.buttonContainer,
      backgroundColor: props.activeTab === props.id ? 'black' : 'white',
    }}
    onPress={() => props.setActiveTab(props.id)}
  >
    <Text
      style={{
        ...styles.buttonText,
        color: props.activeTab === props.id ? 'white' : 'black',
      }}
    >
      {props.label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default HeaderTabs;
