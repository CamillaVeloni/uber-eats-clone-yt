import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import * as cartActions from '../../store/actions/cart';

const MenuItems = ({ restaurantName, foods, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();

  // Função para selecionar item no carrinho
  const handlerSelectItem = (item, checkboxValue) => {
    dispatch(cartActions.addToCart({ ...item, restaurantName, checkboxValue }));
  };

  // Mostrando checkbox clicada quando voltar para tela do restaurante
  const cartItems = useSelector(({ cart }) => cart.selectedItems.items);
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={foods}
      renderItem={({ item }) => {
        return (
          <View>
            <View style={styles.foodContainer}>
              {!hideCheckbox ? (
                <BouncyCheckbox
                  iconStyle={{ borderRadius: 0, borderColor: 'lightgray' }}
                  isChecked={isFoodInCart(item, cartItems)}
                  fillColor="green"
                  onPress={(checked) => handlerSelectItem(item, checked)}
                />
              ) : null}
              <FoodInfo food={item} />
              <FoodImage image={item.image} marginLeft={marginLeft ?? 0} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        );
      }}
    />
  );
};

const FoodInfo = ({ food }) => (
  <View style={styles.foodInfoContainer}>
    <Text style={styles.title}>{food.title}</Text>
    <Text style={styles.description}>{food.description}</Text>
    <Text style={styles.price}>{food.price}</Text>
  </View>
);
const FoodImage = ({ image, marginLeft }) => (
  <View>
    <Image source={{ uri: image }} style={{...styles.image, marginLeft: marginLeft}} />
  </View>
);

const styles = StyleSheet.create({
  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  foodInfoContainer: {
    width: '60%',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  price: {
    color: '#888',
    fontStyle: 'italic',
    fontSize: 13,
  },
  image: {
    width: 95,
    height: 95,
    borderRadius: 8,
  },
});

export default MenuItems;
