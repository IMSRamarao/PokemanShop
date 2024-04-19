import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {StarIcon} from 'react-native-heroicons/solid';
import CommonHeader from '../src/components/CommonHeader';
import FormattedPrice from '../src/components/FormattedPrice';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/AmazonSlice';
import RecommandProducts from '../src/components/RecommandProducts';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}
[];

const SingleProducts = ({route}: any) => {
  // ======== Current items ============
  const {item} = route.params;
  // @ts-ignore
  const dispatch = useDispatch();

  // ======== Recommanding data ========

  const [recommandProducts, setRecommandProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetch(
        'https://fakestoreapiserver.reactbd.com/amazonproducts',
      );
      const data = await resp.json();
      // @ts-ignore
      const newData = await data.filter(i => i.id !== item.id);
      setRecommandProducts(newData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={styles.card}>
          <FastImage
            resizeMode="contain"
            source={{uri: item.image}}
            style={styles.card_image}
          />
          <Text style={styles.card_title}>
            {item.title}
          </Text>
          <Text style={styles.card_Des}>
            {item.description}
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
              <View style={styles.starContainer}>
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
                <StarIcon color="#febd69" size={20} />
              </View>
              <Text style={styles.card_Des}>(100 reviws)</Text>
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
            style={styles.viewButton}
            >
            <Text style={styles.viewButtonText}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {loading ? (
            <View>
              <Text className="text-amazon_blue text-lg font-semibold underline underline-offset-4 decoration-[1px] text-center py-2">
                Recommand data is loading...
              </Text>
            </View>
          ) : (
            <View className="p-8">
              {recommandProducts.map(item => (
                <RecommandProducts key={item.id} item={item} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },
  title: {
    width: '100%',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
    padding: 20,
    margin: 20,
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
export default SingleProducts;
