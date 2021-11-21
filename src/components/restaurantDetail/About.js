import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(' - ');
  const description = `${formattedCategories} ${price ? ' - ' + price : ''} - 💳 - ${rating} ⭐ - (${reviews})`; 

  return (
    <View>
      <RestaurantPhoto photo={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantPhoto = ({ photo }) => (
  <Image source={{ uri: photo }} style={styles.imageContainer} />
);
const RestaurantTitle = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const RestaurantDescription = ({ description }) => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  descriptionContainer: {
    marginTop: 10,
    marginHorizontal: 15.5,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
  },
});

export default About;
