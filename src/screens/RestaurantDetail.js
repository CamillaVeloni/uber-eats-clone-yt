import React from 'react'; 
import { View, StyleSheet } from 'react-native'; 
import { Divider } from 'react-native-elements';

import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';
import { MENU_FOOD } from '../data';

const RestaurantDetail = ({ route, navigation }) => { 
    const { name } = route.params; // Pegando nome do restaurante pelo route
    
    return ( 
     <View style={{ flex: 1 }}>  
         <About route={route} />
         <Divider width={1.8} style={{ marginVertical: 20}} />
         <MenuItems restaurantName={name} foods={MENU_FOOD} />
         <ViewCart navigation={navigation} />
     </View>
)};

const styles = StyleSheet.create({});

export default RestaurantDetail;
