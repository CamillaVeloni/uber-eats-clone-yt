import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { useSelector } from 'react-redux';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';

import MenuItems from '../components/restaurantDetail/MenuItems';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        id: '1',
        title: 'Guay Jub',
        description:
          'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
        price: 'R$ 20.60',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
      },
      {
        id: '2',
        title: 'Guay Jub',
        description:
          'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
        price: 'R$ 20.60',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
      },
      {
        id: '3',
        title: 'Guay Jub',
        description:
          'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
        price: 'R$ 20.60',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
      },
      {
        id: '4',
        title: 'Guay Jub',
        description:
          'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
        price: 'R$ 20.60',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
      },
      {
        id: '5',
        title: 'Guay Jub',
        description:
          'Sopa que tem como base os noodles de arroz, tofu, carne de porco e ovos cozidos',
        price: 'R$ 20.60',
        image:
          'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/47/98/80/guay-jub-guay-jub-noodles.jpg',
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    ({ cart }) => cart.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace('R$', '').trim()))
    .reduce((prev, curr) => prev + curr, 0);
  const formattedTotal = `R$ ${total.toFixed(2)}`;

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <LottieView
          style={styles.greenCheckmark}
          source={require('../../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.order}>
          Seu pedido no restaurante {restaurantName} fechou no valor de{' '}
          {formattedTotal}
        </Text>
        <MenuItems hideCheckbox foods={lastOrder.items} marginLeft={10} />
        <LottieView
          style={styles.cooking}
          source={require('../../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    margin: 15,
    alignItems: 'center',
    height: '95%'
  },
  order: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  greenCheckmark: {
    height: 100,
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight + 5 : 0,
    marginBottom: 30,
  },
  cooking: {
    height: 150,
    alignSelf: 'center',
  },
});

export default OrderCompleted;
