import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import FormattedPrice from './FormattedPrice';
import {useDispatch} from 'react-redux';
import { pokeAddToCart } from '../../redux/AmazonSlice';

const Items = ({item}: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleDetails = () => {
    // @ts-ignore
    navigation.navigate('SingleProducts', {
      item: item,
    });
  };

  return (
    <View key={item.id} style={styles.card}>
      <Text style={styles.card_title}>{item.name}</Text>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            pokeAddToCart({
              id: item.id,
              name: item.name,
              quantity: 1,
            }),
          )
        }
        style={styles.viewButton}>
        <Text style={styles.viewButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '43%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    padding: 20,
    margin: 10,
    backgroundColor: 'white',
  },
  card_title: {
    fontSize: 16,
    fontWeight: '600',
  },
  viewButton: {
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  viewButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default Items;
