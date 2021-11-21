import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// RestaurantItems = Componente de Tela Home
const RestaurantItems = ({ navigation, restaurantData }) => {
  // Função ao pressionar o restaurante
  // Vai levar para tela RestaurantDetail com os dados do restaurante vindo do yelp
  function onRestaurantPress(restaurant) {
    navigation.navigate('RestaurantDetail', {
      name: restaurant.name,
      image: restaurant.image_url,
      price: restaurant.price,
      reviews: restaurant.review_count,
      rating: restaurant.rating,
      categories: restaurant.categories,
    });
  }

  return (
    <>
      {restaurantData &&
        restaurantData.map((restaurant, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            style={{ marginBottom: 10 }}
            onPress={() => onRestaurantPress(restaurant)}
          >
            <View style={styles.container}>
              <RestaurantImage image={restaurant.image_url} />
              <RestaurantInfo
                name={restaurant.name}
                rating={restaurant.rating}
              />
            </View>
          </TouchableOpacity>
        ))}
    </>
  );
};

// SUB-COMPONENTS:
const RestaurantImage = ({ image }) => (
  <View style={styles.imageContainer}>
    <Image
      source={
        image ? { uri: image } : require('../../../assets/images/bg2.jpg')
      }
      style={styles.image}
    />
    <TouchableOpacity style={styles.favoriteIcon} onPress={() => {}}>
      <Ionicons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = ({ name, rating }) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.timeText}>30-40 minutos</Text>
    </View>
    <View style={styles.rating}>
      <Text style={styles.ratingText}>{rating}</Text>
    </View>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 13,
    fontStyle: 'italic',
    color: 'gray',
  },
  rating: {
    width: 30,
    height: 30,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  ratingText: {},
});

export default RestaurantItems;
