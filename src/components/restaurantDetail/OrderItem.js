import React, {useState} from 'react'; 
import { View, Text, StyleSheet} from 'react-native'; 

const OrderItem = ({ item }) => { 
    const { title, price } = item;
    return ( 
     <View style={styles.container}> 
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.price}>{price}</Text>
     </View>
)};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    price: {
        opacity: 0.7,
        fontSize: 15,
    },  
});

export default OrderItem;
