import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import FormattedPrice from './FormattedPrice';
import {useDispatch} from 'react-redux';
import {
  PokeDeleteItem,
  pokeDecreaseQuantity,
  pokeIncreaseQuantity,
} from '../../redux/AmazonSlice';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';

const PokeCartProduct = ({item}: any) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.titleContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.qualityContainer}>
          <View style={styles.qualityContainer}>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  pokeDecreaseQuantity({
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                  }),
                )
              }
              style={styles.minusButton}>
              <MinusIcon size={15} color="#131921" />
            </TouchableOpacity>
            <Text style={{marginTop: 10}}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  pokeIncreaseQuantity({
                    id: item.id,
                    name: item.name,
                    quantity: 1,
                  }),
                )
              }
              style={styles.plusButton}>
              <PlusIcon size={15} color="#131921" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          onPress={() => dispatch(PokeDeleteItem(item.name))}
          style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  imageContainer: {
    flex: 0.2,
  },
  cart_image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemContainer: {
    flex: 0.8,
  },
  deleteContainer: {
    flex: 0.2,
  },
  qualityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  minusButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  plusButton: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  price_total: {
    fontSize: 16,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default PokeCartProduct;
