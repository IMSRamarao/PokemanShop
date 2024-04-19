import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import FormattedPrice from './FormattedPrice';
import {StarIcon} from 'react-native-heroicons/solid';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/AmazonSlice';

const RecommandProducts = ({item}: any) => {
  const dispatch = useDispatch();
  return (
    <View
      key={item.id}
      style={styles.card}>
      <FastImage
        resizeMode="contain"
        source={{uri: item.image}}
        style={styles.card_image}
      />
      <Text style={styles.card_title}>
        {item.title.substring(0, 30)}...
      </Text>
      <Text style={styles.card_Des}>
        {item.description.substring(0, 100)}...
      </Text>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.card_title}>
            Price:{' '}
            <Text style={styles.card_title}>
              <FormattedPrice amount={item.price} />
            </Text>
          </Text>
        </View>
        <View style={styles.starContainer}>
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
          <StarIcon color="#febd69" size={20} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch(
            addToCart({
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
        style={styles.viewButton}>
        <Text style={styles.viewButtonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    padding: 20,
    margin: 50,
    backgroundColor: 'white',
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius : 10,
  },
  card_title: {
    fontSize: 16,
    fontWeight: '600',
  },
  card_Des: {
    fontSize: 12,
    fontWeight: '200',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
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

export default RecommandProducts;
