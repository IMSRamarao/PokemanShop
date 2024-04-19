import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import FormattedPrice from './FormattedPrice';
import {useDispatch} from 'react-redux';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../redux/AmazonSlice';
import {MinusIcon, PlusIcon} from 'react-native-heroicons/solid';

const CartProduct = ({item}: any) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.titleContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          resizeMode="contain"
          source={{uri: item.image}}
          style={styles.cart_image}
        />
      </View>
      <View style={styles.itemContainer}>
        <Text>{item.title.substring(0, 30)}...</Text>
        <View style={styles.qualityContainer}>
          <View style={styles.qualityContainer}>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  decreaseQuantity({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                    rating: item.rating,
                    quantity: 1,
                  }),
                )
              }
              style={styles.minusButton}>
              <MinusIcon size={15} color="#131921" />
            </TouchableOpacity>
            <Text className="text-[16px] font-semibold">{item.quantity}</Text>
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  increaseQuantity({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    description: item.description,
                    image: item.image,
                    rating: item.rating,
                    quantity: 1,
                  }),
                )
              }
              style={styles.plusButton}>
              <PlusIcon size={15} color="#131921" />
            </TouchableOpacity>
          </View>
          <View>
            <Text>
              Subtotal:{' '}
              <Text style={styles.price_total}>
                <FormattedPrice amount={item.price * item.quantity} />
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          onPress={() => dispatch(deleteItem(item.id))}
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
    flex: 0.6,
  },
  deleteContainer: {
    flex: 0.2,
  },
  qualityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

export default CartProduct;
