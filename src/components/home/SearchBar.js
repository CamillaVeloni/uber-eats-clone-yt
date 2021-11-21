import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const API_KEY = 'AIzaSyCqiC9-7v7BbyXB7-y0s6wB56j_qRWFT-Y';

const SearchBar = ({ termHandler }) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{ 
          key: API_KEY
        }}
        onPress={(data, details = null) => {
          const term = data.terms[0].value;
          termHandler(term);
          //console.log('term: ' + data.terms[0].value);
        }}
        placeholder="Nome da cidade"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <AntDesign name="clockcircle" size={11} style={{ marginRight: 6}} />
            <Text>Procurar</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default SearchBar;
