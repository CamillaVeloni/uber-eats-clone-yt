import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTab from '../components/home/BottomTab';
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItems from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';

const YELP_API_KEY =
  '';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [term, setTerm] = useState('Chicago');
  const [activeTab, setActiveTab] = useState('delivery');

  const getRestaurantsFromYelp = async () => {
    const yelp_url = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${term}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    setIsLoading(true);

    const response = await fetch(yelp_url, apiOptions);
    const realResponse = await response.json();
    let data = realResponse.businesses.filter((rest) =>
      rest.transactions.includes(activeTab)
    );
    if (data.length == 0) {
      data = realResponse.businesses; // dummy para se o local não tiver nada no transactions
    }
    setRestaurants(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [term, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar termHandler={setTerm} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {isLoading ? (
          <Spinner />
        ) : (
          <RestaurantItems navigation={navigation} restaurantData={restaurants} />
        )}
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
};

const Spinner = () => (
  <View style={{ marginVertical: 20 }}>
    <ActivityIndicator color='black' size='large' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#eee',
  },
});

export default Home;
