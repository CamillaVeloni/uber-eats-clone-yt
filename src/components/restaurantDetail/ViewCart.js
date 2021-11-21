import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

import firebase from '../../../firebase';
import OrderItem from './OrderItem';

const ViewCart = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    ({ cart }) => cart.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace('R$', '').trim()))
    .reduce((prev, curr) => prev + curr, 0);
  const formattedTotal = `R$ ${total.toFixed(2)}`;

  const addOrderToFirebase = () => {
    setLoading(true);

    const db = firebase.firestore();
    db.collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {items.map((item, index) => (
                <OrderItem
                  key={index}
                  item={{ title: item.title, price: item.price }}
                />
              ))}
            </ScrollView>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotal}>Subtotal</Text>
              <Text style={styles.subtotal}>{formattedTotal}</Text>
            </View>
            <View style={styles.checkoutButtonContainer}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFirebase();
                  setModalVisible(false);
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  Confirmar
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    position: 'absolute',
                    top: 17,
                    right: 20,
                  }}
                >
                  {total ? formattedTotal : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="fade"
        statusBarTranslucent
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>
                Ver carrinho
              </Text>
              <Text style={{ color: 'white', fontSize: 20 }}>
                {formattedTotal}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <View style={styles.loadingContainer}>
          <LottieView
            style={styles.loading}
            source={require('../../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    zIndex: 999,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 400,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotal: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  checkoutButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  loading: {
    height: 200,
  },
});

export default ViewCart;
