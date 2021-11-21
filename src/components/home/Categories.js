import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { CATEGORIES } from '../../data';

const Categories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/** Loop de categorias começa aqui */}
        {CATEGORIES.map((categ, index) => (
          <View key={index} style={styles.categorieContainer}>
            <Image source={categ.image} style={styles.image} />
            <Text style={styles.text}>{categ.name}</Text>
          </View>
        ))}
        {/** Loop termina aqui */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      marginTop: 5,
      backgroundColor: '#fff',
      paddingVertical: 10,
  },
  categorieContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default Categories;
